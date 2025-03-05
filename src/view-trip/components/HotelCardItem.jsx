import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router'

function HotelCardItem({hotel}) {
    const [photoUrl,setPhotoUrl]=useState();
      const GetPlacePhoto = async () => {
        // if (!trip?.userSelection?.location?.label) return; // Prevent unnecessary API calls
        const data = { textQuery: hotel?.hotelName };
    
        try {
          const result = await GetPlaceDetails(data);
          console.log("API Response:", result.data.places[0].photos[2].name);
          const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[1].name);
          setPhotoUrl(PhotoUrl);
        } catch (error) {
          console.error("Error fetching place photo:", error.response?.data || error);
        }
      };
    
      useEffect(() => {
        if (hotel) GetPlacePhoto();
      }, [hotel]);
      
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+","+hotel?.hotelAddress} target='_blank'>
    <div className='hover:scale-105 transition-all cursor-pointer'>
        <img src={photoUrl} className='rounded-xl h-[180px] w-full object-cover'/>
        <div className='my-2 flex flex-col gap-2'>
            <h2 className='font-medium'>{hotel?.hotelName}</h2>
            <h2 className='text-xs text-gray-600'>🍭 {hotel?.hotelAddress}</h2>
            <h2 className=' text-sm'>🤑 Price {hotel?.price}</h2>
            <h2 className=' text-sm'> ✨ Rating {hotel?.rating}</h2>
            
        </div>
    </div>
    </Link>
  )
}

export default HotelCardItem