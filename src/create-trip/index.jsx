// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { AI_PROMPT, SelectBudgetOptions, SelectTravelesLists } from "@/constants/options";
// import { chatSession } from "@/service/AIModel";
// import React, { useEffect, useState } from "react";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// import { toast } from "sonner";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from "@react-oauth/google";

// function CreateTrip() {
//   const [place, setPlace] = useState();
//   const [formData,setFormData]=useState();
//   const [openDailog,setOpenDailog] = useState(false);
 
//   const handleInputChange=(name,value)=>{
//     if(name=='noOfDays'&&value>5)
//       {
//         console.log("Please enter Trip Days less than 5")
//         return;
//       }
//     setFormData({
//       ...formData,
//       [name]:value
//     })
//   }
//   useEffect(()=>{
//     console.log(formData);
//   },[formData])

//   const login=useGoogleLogin({
//     onSuccess:(codeResp)=>GetUserProfile(codeResp),
//     onError:(error)=>console.log(error)
//   })

//   const OnGenerateTrip=async()=>{
//     const user = localStorage.getItem('user');

//     if(!user){
//       setOpenDailog(true)
//       return;
//     }
//     if(formData?.noOfDays>5&&!formData?.location||!formData?.budget||!formData?.traveller)
//     {
//       toast("Please fill all the details")
//       return;
//     }
//     const FINAL_PROMPT=AI_PROMPT
//   .replace('{location}',formData?.location?.label)
//   .replace('{totalDays}',formData?.noOfDays)
//   .replace('{traveller}',formData?.traveller)
//   .replace('{budget}',formData?.budget)
//   .replace('{totalDays}',formData?.noOfDays)

//   console.log(FINAL_PROMPT);
  
//   const result = await chatSession.sendMessage(FINAL_PROMPT);

//   console.log(result?.response?.text());
//   }

//   const GetUserProfile = (tokenInfo) => {
//     console.log("Received Token Info:", tokenInfo); // Debugging step
  
//     if (!tokenInfo?.access_token) {
//       console.error("❌ Access token is missing!");
//       return;
//     }
  
//     axios.get("https://openidconnect.googleapis.com/v1/userinfo", {
//       headers: {
//         Authorization: `Bearer ${tokenInfo.access_token}`,
//         Accept: "application/json"
//       }
//     })
//     .then((resp) => {
//       console.log("✅ User Profile Data:", resp.data);
//     })
//     .catch((error) => {
//       console.error("❌ Error Fetching User Profile:", error.response?.data || error.message);
//     });
//   };
  
  

//   // const GetUserProfile=(tokenInfo)=>{
//   //   axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,{
//   //     headers:{
//   //       Authorization:`Bearer ${tokenInfo?.access_token}`,
//   //       Accept:'Application/json'
//   //     }
//   //   }).then((resp)=>{
//   //     console.log(resp);
//   //   })
//   // }
//   return (
//     <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
//       <h2 className="font-bold text-4xl text-[#204c64]">
//         Tell us your travel perferences
//       </h2>
//       <p className="mt-3 text-[#8a3e2d] text-2xl">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ea, illo
//         provident quisquam, voluptate rem, excepturi corrupti optio ullam quo
//         facere sunt.
//       </p>

//       <div className="mt-20 flex flex-col gap-10">
//         <div>
//           <h2 className="text-xl my-3 font-semibold text-[#204c64]">
//             What is destination of choice?
//           </h2>
//           <GooglePlacesAutocomplete
//             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
//             selectProps={{
//               place,
//               onChange: (v) => {
//                 setPlace(v);
//                 console.log(v);
//               handleInputChange('location',v)},
//             }}
//           />
//         </div>
//         <div>
//           <h2 className="text-xl my-3 font-semibold text-[#204c64]">
//             How many days are u{" "}
//           </h2>
//           <Input placeholder={"Ex. 3"} type="number" onChange={(e)=>handleInputChange('noOfDays',e.target.value)}/>
//         </div>

//         <div>
//           <h2 className="text-xl my-3 font-semibold text-[#204c64]">
//             Lorem ipsum dolor sit amet,
//           </h2>
//           <div className="grid grid-cols-3 gap-5 mt-5">
//             {SelectBudgetOptions.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={()=>handleInputChange('budget',item.title)}
//                 className={`px-4 py-4 border rounded-lg hover:shadow-2xl cursor-pointer ${formData?.budget==item.title&&'shadow-xl border-black'}`}>
//                 <h2 className="text-4xl">{item.icon}</h2>
//                 <h2 className="font-bold text-lg text-[#204c64]">
//                   {item.title}
//                 </h2>
//                 <h2 className="text-sm font-semibold text-[#8a3e2d]">
//                   {item.description}
//                 </h2>
//               </div>
//             ))}
//           </div>
//         </div>

      
//       <div className="mt-8">
//           <h2 className="text-xl my-3 font-semibold text-[#204c64]">
//             Lorem ipsum dolor sit amet,hashdiajjjs andsj{" "}
//           </h2>
//           <div className="grid grid-cols-3 gap-5 mt-5">
//             {SelectTravelesLists.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={()=>handleInputChange('traveller',item.people)}
//                 className={`px-4 py-4 border rounded-lg hover:shadow-2xl cursor-pointer ${formData?.traveller==item.people&&'shadow-xl border-black'}`}>
//                 <h2 className="text-4xl">{item.icon}</h2>
//                 <h2 className="font-bold text-lg text-[#204c64]">
//                   {item.title}
//                 </h2>
//                 <h2 className="text-sm font-semibold text-[#8a3e2d]">
//                   {item.desc}
//                 </h2>
//               </div>
//             ))}
//           </div>
//         </div>
//     </div>
//     <div className="my-15 justify-end flex">
//     <Button onClick={OnGenerateTrip}>Generate Trip</Button>
//     </div>
//     <div>
//       <br />
//     </div>
//     <Dialog open={openDailog}>
//   <DialogContent>
//     <DialogHeader>
//       {/* Logo at the top */}
//       <div >
//         <img src="/logo.svg" alt="App Logo" className="flex justify-items-start mb-5"/>
//       </div>

//       {/* Use DialogTitle for the heading */}
//       <DialogTitle className="font-bold text-lg mt-20">
//         Sign In with Google
//       </DialogTitle>

//       {/* Description inside a div to avoid nested <p> */}
//       <div>
//         <p>Sign in to the app with Google Authentication</p>
//       </div>

//       {/* Google sign-in button */}
//       <Button 
//         onClick={() => login()}  
//         className="w-full mt-10 flex gap-4 items-center">
//         <FcGoogle className="h-7 w-7" /> Sign in with Google
//       </Button>
//     </DialogHeader>
//   </DialogContent>
// </Dialog>




// {/* <Dialog open={openDailog}> 
   
//     <DialogContent>
//       <DialogHeader>
        
//           <DialogDescription>
//           <img src="/logo.svg"/>
//           <h2 className="font-bold text-lg mt-7">Sign In with google </h2>
//           <p>Sign in the app with Google Authentication </p>
//           <Button 
//   onClick={() => login()}  // Ensure it's wrapped in a function
//   className="w-full mt-7 flex gap-4 items-center">
//   <FcGoogle className="h-7 w-7" /> Sign in with Google
// </Button>
//           {/* <Button 
//           onClick={login}
//           className="w-full mt-7 flex gap-4 items-center"><FcGoogle className="h-7 w-7"/> Sign in with google</Button> */}
//           {/* </DialogDescription>
//       </DialogHeader>
//   </DialogContent>
// // </Dialog> */} 
//   </div>
//   );
// }
// export default CreateTrip;



import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesLists } from "@/constants/options";
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
    if (name === "noOfDays" && value > 5) {
      toast("Please enter a trip duration of 5 days or less.");
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
    if (!formData.location || !formData.noOfDays || !formData.budget || !formData.traveller) {
      toast("Please fill in all the required details.");
      return;
    }
    setLoading(true);

    // Prepare AI Prompt
    const FINAL_PROMPT = AI_PROMPT
      .replace("{location}", formData?.location?.label || "Unknown Location")
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveller}", formData?.traveller)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays)

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

  const SaveAiTrip=async(TripData)=>{
    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const  docId = Date.now().toString();
await setDoc(doc(db, "AiTrips", docId), {
 userSelection:formData,
 tripData:JSON.parse(TripData),
 userEmail:user?.email,
 id:docId

});
setLoading(false);
navigate('/view-trip/'+docId)

  }

  const GetUserProfile = async (tokenInfo) => {
    console.log("Received Token Info:", tokenInfo);{}

    if (!tokenInfo?.access_token) {
      console.error("❌ Access token is missing!");
      return;
    }

    try {
      const response = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenInfo.access_token}`,
          Accept: "application/json",
        },
      });

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
      <h2 className="font-bold text-4xl text-[#204c64]">Tell us your travel preferences</h2>
      
      <p className="mt-3 text-[#8a3e2d] text-2xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        {/* Destination Selection */}
        <div>
          <h2 className="text-xl my-3 font-semibold text-[#204c64]">What is your destination of choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>

        {/* Number of Days */}
        <div>
          <h2 className="text-xl my-3 font-semibold text-[#204c64]">How many days?</h2>
          <Input
            placeholder="Ex. 3"
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        {/* Budget Selection */}
        <div>
          <h2 className="text-xl my-3 font-semibold text-[#204c64]">Select Your Budget</h2>
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
                <h2 className="font-bold text-lg text-[#204c64]">{item.title}</h2>
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
          <h2 className="text-xl my-3 font-semibold text-[#204c64]">Who are you traveling with?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelesLists.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("traveller", item.people)}
                className={`px-4 py-4 border rounded-lg hover:shadow-2xl cursor-pointer ${
                  formData?.traveller === item.people && "shadow-xl border-black"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg text-[#204c64]">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Generate Trip Button */}
      <div className="my-15 justify-end flex">
        <Button 
        disabled={loading}
        onClick={OnGenerateTrip}>
          {loading?
          <BiLoaderCircle className="h-7 w-7 animate-spin"/>:'Generate Trip'
        }
          </Button>
      </div>

      {/* Google Login Dialog */}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold text-lg">Sign In with Google</DialogTitle>
            <p>Sign in to the app with Google Authentication</p>
            <Button onClick={() => login()} className="w-full mt-10 flex gap-4 items-center">
              <FcGoogle className="h-7 w-7" /> Sign in with Google
            </Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
