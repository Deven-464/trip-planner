import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  const navigate = useNavigate();

  // Convert itinerary object to an array
  const itineraryArray = trip.tripData?.itinerary 
    ? Object.entries(trip.tripData.itinerary).map(([day, details], index) => ({
        day: `Day ${index + 1}`,
        details
      }))
    : [];

  return (
    <div>
      <h2 className='font-bold text-xl mt-4 text-[#143b50]'>Places to Visit</h2>
      <div>
        {itineraryArray.length > 0 ? (
          itineraryArray.map((item, index) => (
            <div key={index} className='mt-2'>
              <h2 className="font-semibold text-lg">{item.day}</h2>
              <div className='grid md:grid-cols-2 gap-6'>
                {item.details.places.map((place, i) => (
                  <div key={i} className='my-4'>
                    <PlaceCardItem place={place} />
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No itinerary data available</p>
        )}

        {/* BOOK NOW BUTTON */}
        <div className='mt-5'>
          <button
            onClick={() => navigate('/payment', { 
              state: { 
                trip: trip,
                hotelSelection: trip.tripData?.hotelOptions?.[0] || {},
                flightSelection: trip.tripData?.flightOptions?.[0] || {}
              } 
            })}
            className="bg-[#204c64] text-white px-4 py-2 rounded hover:bg-[#163547]"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlacesToVisit;
