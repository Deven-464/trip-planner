// import { collection, getDocs, query, where } from 'firebase/firestore';
// import React, { useEffect } from 'react'
// import { useNavigation } from 'react-router';

// function MyTrips() {
//   const navigation = useNavigation();
//     useEffect(()=>{
//         GetUserTrips();
//     },[])

//     const GetUserTrips=async()=>{
//         const user = JSON.parse(localStorage.getItem('user'));
//         const navigation = useNavigation();

//         if(!user)
//         {
//             navigation('/');
//             return; 
//         }
//         const q = query(collection(db,"AiTrips"),where('uesrEmail','==',user?.email))
//         const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
// });
//     }
//   return (
//     <div>MyTrips</div>
//   )
// }

// export default MyTrips/

import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom'; // likely you meant this, not useNavigation
import UserTripCardItem from './components/UserTripCardItem';

// make sure you're importing your firestore instance

function MyTrips() {
  const navigation = useNavigation();
  const [userTrips, setUserTrips]=useState([])

  useEffect(() => {
    const getUserTrips = async () => {
      const user = JSON.parse(localStorage.getItem('user'));

      if (!user) {
        navigation('/');
        return;
      }
setUserTrips([])
      const q = query(collection(db,'AiTrips'),where('userEmail','==',user?.email));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        setUserTrips(prevVal=>[...prevVal,doc.data()]);
      });
    };

    getUserTrips();
  }, [navigation]);

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>My Trips</h2>
      <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
        {userTrips.map((trip, index)=>(
          <UserTripCardItem trip={trip} />
        ))}
      </div>
    </div>
  )
}

export default MyTrips;


