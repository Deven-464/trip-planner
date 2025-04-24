



import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

function HotelCardItem({ hotel }) {
  
  const [isOpen, setIsOpen] = useState(false);

  // const getMaxPrice = (priceStr) => {
  //   const match = priceStr?.match(/\$[\d]+(?:\.\d+)?\s*-\s*\$([\d]+(?:\.\d+)?)/);
  //   return match ? `$${match[1]}` : (priceStr || "$120");
  // };
  const getMaxPrice = (priceStr) => {
    const match = priceStr?.match(/([€$])[\d]+(?:\.\d+)?\s*-\s*([€$])([\d]+(?:\.\d+)?)/);
    // If there's a range like €25-€50, we'll return the maximum value (€50)
    if (match) {
      return `${match[1]}$${match[3]}`;
    }
    // If there's no range, return the price as is (e.g., €100)
    return priceStr || "€120/night"; 
  };
  

  return (
    <>
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
        <img
          src={hotel.hotelImageURI || "/hotel-fallback.jpg"}
          alt={hotel.hotelName}
          className="w-full h-36 object-cover"
          onError={(e) => { e.target.src = "/hotel-fallback.jpg"; }}
        />
        
        <div className="p-3">
          <h3 className="font-bold text-[#204c64]">{hotel.hotelName}</h3>
          <p className="text-sm text-gray-600">{hotel.hotelAddress}</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-sm text-gray-500 ml-1">({hotel.rating || "4.2"})</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold">{getMaxPrice(hotel.price)}<span className="text-xs text-gray-500">/night</span></p>
            <button
              onClick={() => setIsOpen(true)}
              className="text-xs bg-[#204c64] text-white px-2 py-1 rounded-md"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-md w-full rounded-lg p-6 shadow-lg">
            <Dialog.Title className="text-xl font-bold mb-2">{hotel.hotelName}</Dialog.Title>
            <img
              src={hotel.hotelImageURI || "/hotel-fallback.jpg"}
              alt={hotel.hotelName}
              className="w-full h-48 object-cover rounded mb-4"
              onError={(e) => { e.target.src = "/hotel-fallback.jpg"; }}
            />
            <p className="text-gray-700 mb-2">{hotel.description}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Location:</strong> {hotel.hotelAddress}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Rating:</strong> {hotel.rating}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Price:</strong> {getMaxPrice(hotel.price)}</p>
            <p className="text-sm text-gray-600"><strong>Amenities:</strong> {hotel.amenities?.join(", ")}</p>
            <div className="mt-4 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-[#204c64] text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default HotelCardItem;



