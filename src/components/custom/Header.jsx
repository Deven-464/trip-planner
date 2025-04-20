// import React, { useEffect } from 'react'
// import { Button } from '../ui/button'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { googleLogout } from '@react-oauth/google';
// import { useNavigation } from 'react-router';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";


// function Header() {
//   const user =JSON.parse(localStorage.getItem('user'));
//   const [openDialog, setOpenDialog] = useState(false);
  
//   useEffect(()=>{
// console.log(user)
//   },[])

//   const login = useGoogleLogin({
//     onSuccess: (tokenResp) => GetUserProfile(tokenResp),
//     onError: (error) => console.error("Google Login Error:", error),
//   });

//   const GetUserProfile = async (tokenInfo) => {
//     console.log("Received Token Info:", tokenInfo);

//     if (!tokenInfo?.access_token) {
//       console.error("❌ Access token is missing!");
//       return;
//     }

//   return (
//     <div className='p-3 shadow-sm flex justify-between items-center px-6'>
//       <img src='/logo.svg'/>
//       <div>
//        {user ? <div className='flex items-center gap-3'><Button variant="outline" className="round-full">My Trip</Button>
       
       
//        <Popover>
//   <PopoverTrigger><img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/></PopoverTrigger>
//   <PopoverContent><h2 className='cursor-pointer' onClick={()=>{
//     googleLogout();
//     localStorage.clear();
//     window.location.reload();
//   }}>Logout</h2></PopoverContent>
// </Popover>

//        </div> : <Button onClick={()=>setOpenDialog(true)}>Sign In</Button>
//        }
      
        
//       </div>
//       <Dialog open={openDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle className="font-bold text-lg">Sign In with Google</DialogTitle>
//             <p>Sign in to the app with Google Authentication</p>
//             <Button onClick={() => login()} className="w-full mt-10 flex gap-4 items-center">
//               <FcGoogle className="h-7 w-7" /> Sign in with Google
//             </Button>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog> 
      
//     </div>
//   )
// }

// export default Header




import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc"; // Import Google Icon

function Header() {
  // ✅ Corrected `useNavigate`
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (tokenResp) => GetUserProfile(tokenResp),
    onError: (error) => console.error("Google Login Error:", error),
  });

  const GetUserProfile = async (tokenInfo) => {
    console.log("Received Token Info:", tokenInfo);{}

    if (!tokenInfo?.access_token) {
      console.error("❌ Access token is missing!");
      return;
    }

    try {
      const response = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenInfo.access_token}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const userData = await response.json();
      console.log("✅ User Profile Data:", userData);

      // Store User Data Locally
      localStorage.setItem("user", JSON.stringify(userData));
      setOpenDialog(false);
      window.location.reload(  ) // Close Dialog on Successful s
    } catch (error) {
      console.error("❌ Error Fetching User Profile:", error);
      toast("Failed to fetch user info. Please try again.");
    }
  };

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-6'>
      <img src='/logo.svg' alt="Logo" />
      <div>
        {user ? (
          <div className='flex items-center gap-3'>
            <a href='/my-trips'>
            <Button variant="outline" className="rounded-full">My Trip</Button>
            </a>
          <div>
            <a href="/page">
            <button className='text-slate-50'>Contact Us</button></a>
          </div>
          <div>
            <a href="/page_contact">
            <button className='text-slate-50'>About Us</button></a>
          </div>


            <Popover>
              <PopoverTrigger>
                <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' alt="User" />
                

              </PopoverTrigger>
              <PopoverContent>
                <h2 className='cursor-pointer' onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold text-lg">Sign In with Google</DialogTitle>
            <p>Sign in to the app with Google Authentication</p>
            <Button onClick={() => login()} className="w-full mt-10 flex gap-4 items-center">
              <FcGoogle className="h-7 w-7" /> Sign in with Google
            </Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
