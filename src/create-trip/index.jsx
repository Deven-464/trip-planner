import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesLists,
} from "@/constants/options";
import { chatSession } from "@/service/AIModel";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import axios from "axios"; // Ensure axios is imported
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { doc, setDoc } from "firebase/firestore";
import { BiLoaderCircle } from "react-icons/bi";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router";

function CreateTrip() {
  // State Management
  const [place, setPlace] = useState(null);
  const [currentPlace, setCurrentPlace] = useState(null);
  const [formData, setFormData] = useState({
    location: null,
    noOfDays: "",
    budget: "",
    traveller: "",
  });
  const [loading, setLoading] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  // Handle Input Changes
  const handleInputChange = (name, value) => {
    if (name === "noOfDays" && value > 15) {
      toast("Please enter a trip duration of 15 days or less.");
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Debugging: Log Form Data on Change
  useEffect(() => {
    console.log("Updated Form Data:", formData);
  }, [formData]);

  // Google Login Function
  const login = useGoogleLogin({
    onSuccess: (tokenResp) => GetUserProfile(tokenResp),
    onError: (error) => console.error("Google Login Error:", error),
  });

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    // Check if User is Logged In
    if (!user) {
      setOpenDialog(true);
      return;
    }

    // Validate Form Data
    if (
      !formData.location ||
      !formData.noOfDays ||
      !formData.budget ||
      !formData.traveller
    ) {
      toast("Please fill in all the required details.");
      return;
    }
    setLoading(true);

    // Prepare AI Prompt
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label || "Unknown Location"
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveller}", formData?.traveller)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    // console.log("Generated AI Prompt:", FINAL_PROMPT);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log("AI Response:", await result?.response?.text());
      setLoading(false);
      SaveAiTrip(result?.response?.text());
    } catch (error) {
      console.error("❌ Error Generating Trip:", error);
      toast("Failed to generate trip. Please try again.");
    }
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AiTrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate("/view-trip/" + docId);
  };

  const GetUserProfile = async (tokenInfo) => {
    console.log("Received Token Info:", tokenInfo);
    {
    }

    if (!tokenInfo?.access_token) {
      console.error("❌ Access token is missing!");
      return;
    }

    try {
      const response = await fetch(
        "https://openidconnect.googleapis.com/v1/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const userData = await response.json();
      console.log("✅ User Profile Data:", userData);

      // Store User Data Locally
      localStorage.setItem("user", JSON.stringify(userData));
      setOpenDialog(false); // Close Dialog on Successful s
    } catch (error) {
      console.error("❌ Error Fetching User Profile:", error);
      toast("Failed to fetch user info. Please try again.");
    }
  };
  // Function to Generate Trip Itinerary

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-4xl text-[#204c64]">
        Tell us your travel preferences
      </h2>

      <p className="mt-3 text-[#8a3e2d] text-2xl">
        Just a few quick answers and we’ll handle the rest of your adventure!.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        {/* Current Location Input */}
        <div>
          <h2 className="text-xl my-3 font-semibold text-[#204c64]">
            Enter your Current Location?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              currentPlace,
              onChange: (v) => {
                setCurrentPlace(v);
                handleInputChange("currentLocation", v);
              },
            }}
          />
        </div>

        {/* Destination Input */}
        <div>
          <h2 className="text-xl my-3 font-semibold text-[#204c64]">
            What is your destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                if (currentPlace?.label === v.label) {
                  toast("Destination cannot be the same as Current Location.");
                  return;
                }
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>

        {/* Number of Days */}
        <div>
          <h2 className="text-xl my-3 font-semibold text-[#204c64]">
            How many days?
          </h2>
          <Input
            placeholder="Ex. 3"
            type="number"
            min="1"
            max="15"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        {/* Budget Selection */}
        <div>
          <h2 className="text-xl my-3 font-semibold text-[#204c64]">
            Select Your Budget
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`px-4 py-4 border rounded-lg hover:shadow-2xl cursor-pointer ${
                  formData?.budget === item.title && "shadow-xl border-black"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg text-[#204c64]">
                  {item.title}
                </h2>
                {/* <h2 className="text-sm font-semibold text-[#8a3e2d]">{item.description}</h2> */}
                <div className="overflow-hidden w-full">
                  <h2 className="text-sm font-semibold text-[#8a3e2d] whitespace-nowrap inline-block animate-marquee">
                    {item.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traveller Type Selection */}
        <div className="mt-8">
          <h2 className="text-xl my-3 font-semibold text-[#204c64]">
            Who are you traveling with?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelesLists.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("traveller", item.people)}
                className={`px-4 py-4 border rounded-lg hover:shadow-2xl cursor-pointer ${
                  formData?.traveller === item.people &&
                  "shadow-xl border-black"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg text-[#204c64]">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Generate Trip Button */}
      <div className="my-15 justify-end flex">
        <Button disabled={loading} onClick={OnGenerateTrip}>
          {loading ? (
            <BiLoaderCircle className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      {/* Google Login Dialog */}
      {/* Google Login Dialog */}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold text-lg">
              Sign In with Google
            </DialogTitle>
            <p>Sign in to the app with Google Authentication</p>
            <Button
              onClick={() => login()}
              className="w-full mt-10 flex gap-4 items-center"
            >
              <FcGoogle className="h-7 w-7" /> Sign in with Google
            </Button>
            {/* Close Button */}
            <button
              onClick={() => setOpenDialog(false)} // Close the modal
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
