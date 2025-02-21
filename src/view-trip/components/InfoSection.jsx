import { Button } from '@/components/ui/button'
import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";


// function InfoSection({trip}) {
//   useEffect(()=>{
//     trip&&GetPlacePhoto();
//   },[])
//   const GetPlacePhoto=async()=>{
//     const data={
//       textQuery:trip?.userSelection?.location?.label
//     }
//     const result = await GetPlaceDetails(data).then(resp=>{
//       console.log(resp.data)
//     })
//   }
const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key='+import.meta.env.VITE_GOOGLE_PLACE_API_KEY
function InfoSection({ trip }) {
  const [photoUrl,setPhotoUrl]=useState();
  const GetPlacePhoto = async () => {
    if (!trip?.userSelection?.location?.label) return; // Prevent unnecessary API calls
    const data = { textQuery: trip.userSelection.location.label };

    try {
      const result = await GetPlaceDetails(data);
      console.log("API Response:", result.data.places[0].photos[3].name);
      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    } catch (error) {
      console.error("Error fetching place photo:", error.response?.data || error);
    }
  };

  useEffect(() => {
    if (trip) GetPlacePhoto();
  }, [trip]); // Runs when `trip` is updated

  return (
    <div>
        <img src={photoUrl} className='h-[340px] w-full object-cover rounded-xl'/>
        <div className='flex justify-between items-center'>
        <div className='m-5 flex flex-col gap-2'>
            <h2 className='font-bold '> {trip?.userSelection?.location?.label}</h2>
            <div className='flex gap-5'>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-black text-xs md:text-md '>🗓️ {trip.userSelection?.noOfDays} Day</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-black text-xs md:text-md'>💰💸 {trip.userSelection?.budget} </h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-black text-xs md:text-md'>🧳No. of traveller {trip.userSelection?.traveller} </h2>

            </div>
        </div>
        
            <Button><IoIosSend/></Button>
        </div>
    </div>
  )
}

export default InfoSection