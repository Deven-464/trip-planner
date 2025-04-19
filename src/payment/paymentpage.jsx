import React, { useState, useEffect } from "react";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { useSearchParams } from "react-router-dom";

const PaymentPage = () => {
  const [params] = useSearchParams();
  const [hotelPhoto, setHotelPhoto] = useState(null);
  const [flightPhoto, setFlightPhoto] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [paymentMode, setPaymentMode] = useState("UPI");

  // These values would ideally come from backend or props, mocked here for now
  const userDetails = {
    name: "John Doe",
    hotel: {
      name: params.get("hotelName") || "Grand Palace Hotel",
      address: params.get("hotelAddress") || "MG Road, Bangalore",
      price: "₹25,000",
      rating: 4.5,
    },
    flight: {
      name: params.get("flight") || "Air India AI-202",
      price: "₹15,000",
    },
    destination: params.get("destination") || "Goa",
    company: "Satish & Sai",
  };

  // Fetch hotel image
  const fetchHotelPhoto = async () => {
    try {
      const data = { textQuery: userDetails.hotel.name };
      const result = await GetPlaceDetails(data);
      const photoName = result.data.places?.[0]?.photos?.[1]?.name;
      if (photoName) {
        setHotelPhoto(PHOTO_REF_URL.replace("{NAME}", photoName));
      }
    } catch (error) {
      console.error("Error fetching hotel photo:", error);
    }
  };

  // Fetch flight image
  const fetchFlightPhoto = async () => {
    try {
      const data = { textQuery: userDetails.flight.name };
      const result = await GetPlaceDetails(data);
      const photoName = result.data.places?.[0]?.photos?.[1]?.name;
      if (photoName) {
        setFlightPhoto(PHOTO_REF_URL.replace("{NAME}", photoName));
      }
    } catch (error) {
      console.error("Error fetching flight photo:", error);
    }
  };

  useEffect(() => {
    fetchHotelPhoto();
    fetchFlightPhoto();
  }, []);

  const handlePayment = () => {
    setTimeout(() => {
      setIsPaid(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-[#204c64] p-6">
      {!isPaid ? (
        <div className="max-w-3xl mx-auto border p-6 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-[#8a3e2d]">Complete Your Booking</h2>

          {/* Trip Overview */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Hotel Info */}
            <div className="border p-4 rounded-lg shadow">
              <img
                src={hotelPhoto || "/plane.jpg"}
                onError={(e) => (e.currentTarget.src = "/plane.jpg")}
                className="rounded-lg h-[180px] w-full object-cover mb-2"
              />
              <h3 className="text-xl font-semibold">{userDetails.hotel.name}</h3>
              <p className="text-sm text-gray-600">📍 {userDetails.hotel.address}</p>
              <p className="text-sm">✨ Rating: {userDetails.hotel.rating}</p>
              <p className="text-sm">🤑 ₹{userDetails.hotel.price}</p>
            </div>

            {/* Flight Info */}
            <div className="border p-4 rounded-lg shadow">
              <img
                src={flightPhoto || "/plane.jpg"}
                onError={(e) => (e.currentTarget.src = "/plane.jpg")}
                className="rounded-lg h-[180px] w-full object-cover mb-2"
              />
              <h3 className="text-xl font-semibold">{userDetails.flight.name}</h3>
              <p className="text-sm text-gray-600">📍 Destination: {userDetails.destination}</p>
              <p className="text-sm">🤑 ₹{userDetails.flight.price}</p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
            <select
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="p-2 border rounded w-full"
            >
              <option value="UPI">UPI</option>
              <option value="Netbanking">Netbanking</option>
              <option value="Card">Credit/Debit Card</option>
            </select>
          </div>

          <button
            onClick={handlePayment}
            className="bg-[#8a3e2d] text-white px-6 py-2 rounded hover:bg-[#6e2f24] transition"
          >
            Pay Now
          </button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg bg-green-50 mt-10">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Payment Successful ✅</h2>
          <h3 className="text-xl font-semibold mb-2 text-[#204c64]">Receipt</h3>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Destination:</strong> {userDetails.destination}</p>
          <p><strong>Hotel:</strong> {userDetails.hotel.name}</p>
          <p><strong>Hotel Price:</strong> {userDetails.hotel.price}</p>
          <p><strong>Flight:</strong> {userDetails.flight.name}</p>
          <p><strong>Flight Price:</strong> {userDetails.flight.price}</p>
          <p><strong>Total Paid:</strong> ₹{parseInt(userDetails.hotel.price.replace("₹", "")) + parseInt(userDetails.flight.price.replace("₹", ""))}</p>
          <p className="mt-4 font-semibold text-[#8a3e2d]">Thank you for booking with {userDetails.company}!</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
