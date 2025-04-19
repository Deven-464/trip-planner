// import { useState } from 'react';
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import { Link } from 'react-router'
// import { useEffect } from 'react';
// function PlaceCardItem({place}) {
//     const [photoUrl,setPhotoUrl]=useState();
//       const GetPlacePhoto = async () => {
//         // if (!trip?.userSelection?.location?.label) return; // Prevent unnecessary API calls
//         const data = { textQuery: place?.placeName };
    
//         try {
//           const result = await GetPlaceDetails(data);
//           console.log("API Response:", result.data.places[0].photos[0].name);
//           const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[0].name);
//           setPhotoUrl(PhotoUrl);
//         } catch (error) {
//           console.error("Error fetching place photo:", error.response?.data || error);
//         }
//       };
    
//       useEffect(() => {
//         if (place) GetPlacePhoto();
//       }, [place]);

//       return (
//           <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
//           <div className='hover:scale-105 transition-all cursor-pointer'>
//               <img src={photoUrl?photoUrl:'/plane.jpg'} className='rounded-xl h-[130px] w-[130px]'/>
//               <div className='my-2 flex flex-col gap-2'>
//               <h2 className='font-medium'>⏱️ Travel time: {place.timeManagement}</h2>
//                   <h2 className='font-medium'>{place?.placeName}</h2>
//                   <h2 className='text-xs text-gray-600'>🍭 {place.placeDetails}</h2>
//                   <h2 className=' text-sm'>🤑 Price {place.ticketsPricing}</h2>
//                   <h2 className=' text-sm'> ✨ Rating {place.rating}</h2>
                  
//               </div>
//           </div>
//           </Link>
//         )
//     }
//     export default PlaceCardItem;



import { useState, useEffect } from 'react';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
    const [photoUrl, setPhotoUrl] = useState(null);

    const GetPlacePhoto = async () => {
        if (!place?.placeName) return; // Ensure there's a valid place name before making the API call

        try {
            const data = { textQuery: place.placeName };
            const result = await GetPlaceDetails(data);

            console.log("API Response:", result.data);

            if (result.data.places?.length > 0 && result.data.places[0].photos?.length > 0) {
                const photoName = result.data.places[0].photos[1].name;
                const generatedPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
                console.log("Generated Photo URL:", generatedPhotoUrl);
                setPhotoUrl(generatedPhotoUrl);
            } else {
                console.log("No photos found for this place.");
            }
        } catch (error) {
            console.error("Error fetching place photo:", error.response?.data || error);
        }
    };

    useEffect(() => {
        if (place) GetPlacePhoto();
    }, [place]);

    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + place.placeName} target='_blank'>
            <div className='hover:scale-105 shadow-lg transition-all cursor-pointer'>
                <img 
                    src={photoUrl || "/plane.jpg"} 
                    onError={(e) => e.currentTarget.src = "/plane.jpg"} 
                    className='rounded-xl h-[130px] w-[130px]' 
                />
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium'>⏱️ Travel time: {place.timeTravel}</h2>
                    <h2 className='font-medium'>{place?.placeName}</h2>
                    <h2 className='text-sm text-gray-600'>🍭 {place.placeDetails}</h2>
                    <h2 className=' text-sm'>🤑 Price {place.ticketsPricing}</h2>
                    <h2 className=' text-sm'> ✨ Rating {place.rating}</h2>
                </div>
            </div>
        </Link>
    );
}

export default PlaceCardItem;
