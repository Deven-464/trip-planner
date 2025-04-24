//import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'


function UserTripCardItem({trip}) {
  // const [photoUrl, setPhotoUrl] = useState(null);
  
  //   const GetPlacePhoto = async () => {
  //     if (!trip?.userSelection?.location?.label) return; // Prevent unnecessary API calls
      
  //     try {
  //       const data = { textQuery: trip.userSelection.location.label };
  //       const result = await GetPlaceDetails(data);
  
  //       const photoRef = result.data?.places?.[0]?.photos?.[1]?.name;
  //       if (photoRef) {
  //         setPhotoUrl(PHOTO_REF_URL(photoRef));
  //       } else {
  //         console.warn("No photo reference found.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching place photo:", error.response?.data || error);
  //     }
  //   };
  
  //   useEffect(() => {
  //     if (trip) GetPlacePhoto();
  //   }, [trip]); // Runs when `trip` updates

  return (
    <div>
        <img src="/Airplane.jpg" className='object-cover rounded-xl'/>
        <div>
            <h2 className='font-bold text-lg' >{trip?.userSelection?.location?.label}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
            
        </div>
    </div>
  )
}

export default UserTripCardItem