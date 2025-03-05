// import React from 'react'

// function PlacesToVisit({trip}) {
//   return (
//     <div>
//         <h2 className='font-bold text-lg'>Places to Visit</h2>
//         <div>
//             {/* {trip.tripData?.itinerary.map((item,index)=>(
//                 <div>
//                     <h2>{item.day1}</h2>
//                     </div>
//             ))}  */}
//             console
//             .log("tripData:", trip.tripData);
//     console.log("itinerary:", trip.tripData?.itinerary);
// console.log("Type of itinerary:", typeof trip.tripData?.itinerary);

//         </div>
//     </div>
//   )
// }

// export default PlacesToVisit
// import React from 'react'

// function PlacesToVisit({ trip }) {
//   console.log("tripData:", trip.tripData); // Debugging tripData
//   console.log("itinerary:", trip.tripData?.itinerary);
//   console.log("Type of itinerary:", typeof trip.tripData?.itinerary);

//   return (
//     <div>
//       <h2 className='font-bold text-lg'>Places to Visit</h2>
//       <div>
//         {Array.isArray(trip.tripData?.itinerary) ? (
//           trip.tripData.itinerary.map((item, index) => (
//             <div key={index}> {/* Added key prop */}
//               <h2>{item.day1}</h2>
//             </div>
//           ))
//         ) : (
//           <p>No itinerary data available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PlacesToVisit;


import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  console.log("tripData:", trip.tripData); 
  console.log("itinerary:", trip.tripData?.itinerary);
  console.log("Type of itinerary:", typeof trip.tripData?.itinerary);

  // Convert itinerary object to an array of { day: "day1", details: {...} }
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
            // <div key={index} className="border p-3 my-2 grid grid-cols-2 gap-3">
            <div key={index} className='mt-2'>
              <h2 className="font-semibold text-lg">{item.day}</h2>
              <div className='grid md:grid-cols-2 gap-6'>
              {/* <p><strong>Theme:</strong> {item.details.theme}</p> */}
              {/* <p><strong>Best Time to Visit:</strong> {item.details.bestTimeToVisit}</p> */}
              {/* <ul> */}
                {item.details.places.map((place, i) => (
                //   <li key={i} className="mt-2">
                    <div className='my-4'>
                    {/* <p className='text-[#13394e]'><strong>Travel Time:</strong>⏱️{place.timeManagement
                    }</p> */}
                    {/* <h3 className="font-medium">{place.placeName}</h3> */}
                    {/* <p><strong>Details:</strong> {place.placeDetails}</p> */}
                    <PlaceCardItem place={place}/>
                    {/* <p><strong>Rating:</strong> {place.rating} ⭐</p>
                    <p><strong>Travel Time:</strong> {place.timeTravel}</p>
                    <p><strong>Tickets:</strong> {place.ticketsPricing}</p> */}
                    </div>
                    // {place.placeImageURI && (
                    //   <img src={place.placeImageURI} alt={place.placeName} className="w-40 h-40 object-cover rounded-lg mt-2" />
                    // )}
                //   </li>
                
                ))}
                </div>
              {/* </ul> */}
            </div>
          ))
        ) : (
          <p>No itinerary data available</p>
        )}
      </div>
    </div>
  );
}

export default PlacesToVisit;
