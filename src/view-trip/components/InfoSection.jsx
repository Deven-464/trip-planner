import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { IoIosSend } from "react-icons/io";
import { Button } from '@/components/ui/button';

const PHOTO_REF_URL = (photoRef) => 
  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${photoRef}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  const GetPlacePhoto = async () => {
    if (!trip?.userSelection?.location?.label) return; // Prevent unnecessary API calls
    
    try {
      const data = { textQuery: trip.userSelection.location.label };
      const result = await GetPlaceDetails(data);

      const photoRef = result.data?.places?.[0]?.photos?.[1]?.name;
      if (photoRef) {
        setPhotoUrl(PHOTO_REF_URL(photoRef));
      } else {
        console.warn("No photo reference found.");
      }
    } catch (error) {
      console.error("Error fetching place photo:", error.response?.data || error);
    }
  };

  useEffect(() => {
    if (trip) GetPlacePhoto();
  }, [trip]); // Runs when `trip` updates

  return (
    <div>
      {/* <img 
        src={photoUrl || '/fallback-image.jpg'} 
        alt="Trip Location" 
        className='h-[340px] w-full object-cover rounded-xl'
      /> */}
      <div className='flex justify-between items-center'>
        <div className='m-5 flex flex-col gap-2'>
          <h2 className='font-bold'>{trip?.userSelection?.location?.label}</h2>
          <div className='flex gap-5'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-black text-xs md:text-md'>
              🗓️ {trip.userSelection?.noOfDays} Day
            </h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-black text-xs md:text-md'>
              💰💸 {trip.userSelection?.budget}
            </h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-black text-xs md:text-md'>
              🧳 No. of travellers: {trip.userSelection?.traveller}
            </h2>
          </div>
        </div>
        <Button><IoIosSend/></Button>
      </div>
    </div>
  );
}

export default InfoSection;
