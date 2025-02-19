import { Button } from '@/components/ui/button'
import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router';

function PlaceCardItem({place}) {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 shadow-md hover:scale-105 transition-all hover:shadow-xl cursor-pointer'>
        <img src='/plane.jpg' className='w-[130px] h-[130px] rounded-xl'/> 
        <div>
            <h2 className='font-bold text-lg text-[#13394e]'>🚵🏽{place.placeName}</h2>
            <p className='text-sm text-gray-700'>✨ {place.placeDetails}</p>
            <h2 className='mt-2'>{place.timeTravel}</h2>
            <Button className='mt-1'><FaMapLocationDot className='h-2 w-2' /></Button>

        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem