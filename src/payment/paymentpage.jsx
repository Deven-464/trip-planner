import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { BiLoaderCircle } from "react-icons/bi";

function PaymentPage() {
  const [hotelPhoto, setHotelPhoto] = useState(null);
  const [flightPhoto, setFlightPhoto] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get trip data from location state
  const { trip, hotelSelection, flightSelection } = location.state || {};
  
  const fetchHotelPhoto = async () => {
    try {
      // If we have a hotel image URL from trip data, use it
      if (hotelSelection?.imageUrl) {
        setHotelPhoto(hotelSelection.imageUrl);
      } else {
        // Fallback to a default image
        setHotelPhoto('/hotel-fallback.jpg');
      }
    } catch (error) {
      console.error("Error fetching hotel photo:", error);
    }
  };

  const fetchFlightPhoto = async () => {
    try {
      // If we have a flight image URL from trip data, use it
      if (flightSelection?.imageUrl) {
        setFlightPhoto(flightSelection.imageUrl);
      } else {
        // Fallback to a default image
        setFlightPhoto('/plane.jpg');
      }
    } catch (error) {
      console.error("Error fetching flight photo:", error);
    }
  };

  useEffect(() => {
    // Check if we have valid trip data
    if (!trip) {
      toast.error("No trip information available");
      navigate('/');
      return;
    }
    
    fetchHotelPhoto();
    fetchFlightPhoto();
  }, [trip]);

  const handlePayment = () => {
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsPaid(true);
      setIsLoading(false);
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
                src={"data:image/jpeg;base64,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"}
                // onError={(e) => (e.currentTarget.src = "/hotel-fallback.jpg")}
                className="rounded-lg h-[180px] w-full object-cover mb-2"
                alt="Hotel"
              />
              <h3 className="font-bold text-lg">Hotel Reservation</h3>
              <p className="text-sm">{hotelSelection?.name || "Recommended Hotel"}</p>
              <p className="text-sm">{hotelSelection?.location || trip?.userSelection?.location?.label}</p>
              <p className="text-sm font-bold mt-1">${hotelSelection?.pricePerNight || "120"}/night</p>
            </div>

            {/* Flight Info */}
            <div className="border p-4 rounded-lg shadow">
              <img
                src={flightPhoto || "/plane.jpg"}
                onError={(e) => (e.currentTarget.src = "/plane.jpg")}
                className="rounded-lg h-[180px] w-full object-cover mb-2"
                alt="Flight"
              />
              <h3 className="font-bold text-lg">Flight Details</h3>
              <p className="text-sm">{flightSelection?.airline || "Recommended Airline"}</p>
              <p className="text-sm">To: {trip?.userSelection?.location?.label}</p>
              <p className="text-sm font-bold mt-1">${flightSelection?.price || "350"}</p>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="border p-4 rounded-lg shadow mb-6">
            <h3 className="font-bold text-lg mb-2">Booking Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Hotel ({trip?.userSelection?.noOfDays || 3} nights)</span>
              <span>${((hotelSelection?.pricePerNight || 120) * (trip?.userSelection?.noOfDays || 3)).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Flight (round-trip)</span>
              <span>${flightSelection?.price || "350.00"}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes & Fees</span>
              <span>$75.00</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>${(((hotelSelection?.pricePerNight || 120) * (trip?.userSelection?.noOfDays || 3)) + (flightSelection?.price || 350) + 75).toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Form */}
          <div className="border p-4 rounded-lg shadow mb-6">
            <h3 className="font-bold text-lg mb-2">Payment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="p-2 border rounded" />
              <input type="email" placeholder="Email" className="p-2 border rounded" />
              <input type="text" placeholder="Card Number" className="p-2 border rounded" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="p-2 border rounded" />
                <input type="text" placeholder="CVC" className="p-2 border rounded" />
              </div>
            </div>
          </div>

          {/* Complete Payment Button */}
          <button 
            onClick={handlePayment} 
            disabled={isLoading}
            className="w-full bg-[#204c64] text-white p-3 rounded-lg hover:bg-[#163547] flex justify-center items-center"
          >
            {isLoading ? <BiLoaderCircle className="animate-spin mr-2" /> : "Complete Payment"}
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto text-center p-6 border rounded-xl shadow-xl">
          <div className="text-5xl mb-4 text-green-500">✅</div>
          <h2 className="text-3xl font-bold mb-2">Payment Successful!</h2>
          <p className="mb-6">Your trip to {trip?.userSelection?.location?.label} has been booked successfully.</p>
          <p className="mb-8">A confirmation email has been sent to your email address.</p>
          <button 
            onClick={() => navigate('/my-trips')} 
            className="bg-[#204c64] text-white px-6 py-2 rounded-lg hover:bg-[#163547]"
          >
            View My Trips
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
