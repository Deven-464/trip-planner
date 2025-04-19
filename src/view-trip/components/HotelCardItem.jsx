import React from 'react';

function HotelCardItem({ hotel }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
      <img 
        src={hotel.imageUrl || "/hotel-fallback.jpg"} 
        alt={hotel.name} 
        className="w-full h-36 object-cover"
        onError={(e) => {e.target.src = "/hotel-fallback.jpg"}}
      />
      <div className="p-3">
        <h3 className="font-bold text-[#204c64]">{hotel.name}</h3>
        <p className="text-sm text-gray-600">{hotel.location}</p>
        <div className="flex items-center mt-1">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="text-sm text-gray-500 ml-1">({hotel.rating || "4.2"})</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">${hotel.pricePerNight || "120"}<span className="text-xs text-gray-500">/night</span></p>
          <button className="text-xs bg-[#204c64] text-white px-2 py-1 rounded-md">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default HotelCardItem;