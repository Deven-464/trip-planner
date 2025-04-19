// import React from 'react'

// function Footer() {
//   return (
// //     <div className='my-7'>
// //         <h2 className='text-center'>Create by Sai & Satish AI Travel Planner Website.</h2>
// //     </div>
// //   )
// // }

// // export default Footer
// import React from "react";
// import { motion } from "framer-motion";
// import { FaInstagram, FaFacebook, FaSnapchat, FaPhone } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="fixed bottom-0 w-full bg-[#143b50] text-white py-4">
//       <div className="flex justify-center items-center gap-6">
//         {/* Instagram */}
//         <motion.a
//           href="https://instagram.com/yourid"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.2, rotate: 10 }}
//           whileTap={{ scale: 0.9 }}
//           className="text-3xl hover:text-pink-500"
//         >
//           <FaInstagram />
//         </motion.a>
        
//         {/* Facebook */}
//         <motion.a
//           href="https://facebook.com/yourid"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.2, rotate: -10 }}
//           whileTap={{ scale: 0.9 }}
//           className="text-3xl hover:text-blue-500"
//         >
//           <FaFacebook />
//         </motion.a>

//         {/* Snapchat */}
//         <motion.a
//           href="https://snapchat.com/yourid"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.2, rotate: 10 }}
//           whileTap={{ scale: 0.9 }}
//           className="text-3xl hover:text-yellow-500"
//         >
//           <FaSnapchat />
//         </motion.a>

//         {/* Phone Number */}
//         <motion.a
//           href="tel:+1234567890"
//           whileHover={{ scale: 1.2, rotate: -10 }}
//           whileTap={{ scale: 0.9 }}
//           className="text-3xl hover:text-green-500"
//         >
//           <FaPhone />
//         </motion.a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import { motion } from "framer-motion";
// import { FaInstagram, FaFacebook, FaSnapchat, FaPhone } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#143b50] text-white py-6 mt-10">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
//         {/* Images */}
//         <div className="flex space-x-4">
//           <img src="/path-to-your-image1.jpg" alt="Image 1" className="w-20 h-20 rounded-lg shadow-lg" />
//           <img src="/path-to-your-image2.jpg" alt="Image 2" className="w-20 h-20 rounded-lg shadow-lg" />
//         </div>

//         {/* Social Icons */}
//         <div className="flex space-x-6 mt-4 md:mt-0">
//           <motion.a
//             href="https://instagram.com/dev_464_h"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             className="text-3xl hover:text-pink-500"
//           >
//             <FaInstagram />
//           </motion.a>

//           <motion.a
//             href="https://facebook.com/dev_464_h"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             className="text-3xl hover:text-blue-500"
//           >
//             <FaFacebook />
//           </motion.a>

//           <motion.a
//             href="https://snapchat.com/gokuuu"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             className="text-3xl hover:text-yellow-500"
//           >
//             <FaSnapchat />
//           </motion.a>

//           <motion.a
//             href="tel:+1234567890"
//             whileHover={{ scale: 1.2 }}
//             className="text-3xl hover:text-green-500"
//           >
//             <FaPhone />
//           </motion.a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





/* eslint-disable no-unused-vars */
// import React from 'react'
// import { BsDiscord, BsInstagram, BsLinkedin } from 'react-icons/bs'
// import { Link } from 'react-router-dom';
// import { BsTwitter } from 'react-icons/bs'
// import { BsFacebook } from 'react-icons/bs'
// import { BsSlack, BsGithub } from 'react-icons/bs'
// import playstore from "../../assets/images/pay/play.png";
// import appstore from "../../assets/images/pay/app.png";
// import visa from "../../assets/images/pay/pay.png";

// const footer = () => {
//   return <>
//   <footer className='footer p-5'>
//     <div className="container-xxl">
//       <div className="row justify-content-center justify-content-md-start footer-top">
//         <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
//           <h2 className='footer-title mb-3'><b>Contact</b></h2>
//           <div className='mb-3'><p><b>Address:</b>  CHM College Extension Building E-208  </p> </div>
//           <div className='mb-3'><p><b>Phone:</b>  <a className='footer-tel' href="tel:+1234567890">Call us at 91+ 9307596517</a></p> </div>
//           <div className='mb-4'><p><b>Hours:</b>  From 8 a.m To 6 p.m</p> </div>
//           <div className='mb-3'><p><b>Follow the developer</b></p> </div>
//           <div className="socials d-flex gap-3">
//           <Link to='https://www.instagram.com/sameer.gupta09' id='footer-link' target='_blank' className='gap-3'>
//           <BsInstagram />
//           </Link>
//           <Link to='https://x.com/sameer_gupta09' id='footer-link' target='_blank' className='gap-3'>
//           <BsTwitter />
//           </Link>
//           <Link to='https://github.com/Sameergupta09' className='gap-3' id='footer-link'>
//           <BsGithub />
//           </Link>
//           <Link to='https://www.linkedin.com/in/sameer-gupta-094017299' id='footer-link' target='_blank' className='gap-3'>
//           <BsLinkedin />
//           </Link>
//           </div>
//         </div>
//         <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
//           <h2 className='footer-title mb-3'><b>About</b></h2>
//           <div className='mb-3'> <Link to='/about' id='footer-links'>About Us</Link>  </div>
//           {/* <div className='mb-3'> <Link to='checkout' id='footer-links'>Delivery</Link>  </div> */}
//           <div className='mb-3'> <Link id='footer-links'>Privacy Policy</Link>  </div>
//           <div className='mb-3'> <Link id='footer-links'>Terms & Conditions</Link>  </div>
//           <div className='mb-3'> <Link id='footer-links'>Fee Policy</Link>  </div>
//         </div>
//         <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
//           <h2 className='footer-title mb-3'><b>Account</b></h2>
//           <div className='mb-3'> <Link to='/login' id='footer-links'>Profile</Link>  </div>
//           <div className='mb-3'> <Link to='/cart' id='footer-links'>View Cart</Link>  </div>
//           <div className='mb-3'> <Link to='/contact' id='footer-links'>Help</Link>  </div>
//           <div className='mb-3'> <Link id='footer-links'>Payments</Link>  </div>
//           <div className='mb-3'> <Link to='/cart'  id='footer-links'>My Wishlist</Link>  </div>
//           <div className='mb-3'> <Link id='footer-links'>Coupons</Link> </div>
//         </div>
//         <div className="col-md-4 col-lg-4">
//           <h2 className='footer-title mb-3'><b>Install App</b></h2>
//           <p className='mb-3'>Available On Google Play Services & App Store</p>
//           <div className="className='mb-3 col-md-6 col-12 pay">
//           <div className='mb-3'>
//           <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
//           <img src={playstore} alt="" />
//           </Link>
//           </div>
//           <div className='mb-3'>
//           <Link to='https://www.apple.com/app-store/' target='_blank'>
//           <img src={appstore} alt="" />
//           </Link>
//           </div>
//           </div>
//           <p className="mb-3">
//             Payment Methods
//           </p>
//           <div className="pay">
//           <Link to='https://www.paypal.com/signin' target='_blank'>
//           <img src={visa} alt="" />
//           </Link>
//           </div>
//         </div>
//       </div>
//       <hr className='my-4' />
//       <div className="row">
//         <div className="col-12 col-md-6">
//         <p className="text-center text-md-start">&copy;Developed by Sameer & Anshuman Developers 2024</p>
//         </div>
//         <div className="col-12 col-md-6">
//         <ul className="list-inline text-center text-md-end">
//           <li className="list-inline-item"><Link to="#" className="text-dark">Privacy Policy</Link></li>
//           <li className="list-inline-item"><Link to="#" className="text-dark">Terms of Use</Link></li>
//           <li className="list-inline-item"><Link to="#" className="text-dark">Contact Us</Link></li>
//         </ul>
//       </div>
//       </div>
//     </div>
//   </footer>
//   </>;
// }

// export default footer




import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsDiscord,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsSlack,
  BsGithub,
} from 'react-icons/bs';

import playstore from '../../assets/images/pay/play.png';
import appstore from '../../assets/images/pay/app.png';
import visa from '../../assets/images/pay/pay.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 mt-10">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="mb-2"><strong>Address:</strong> CHM College Extension Building E-208</p>
            <p className="mb-2">
              <strong>Phone:</strong>{' '}
              <a href="tel:+919307596517" className="text-yellow-400 hover:underline">
                Call us at +91 7738485808
              </a>
            </p>
            <p className="mb-2"><strong>Hours:</strong> From 8 a.m to 6 p.m</p>
            <p className="mt-4 mb-2 font-semibold">Follow the developer:</p>
            <div className="flex gap-4 text-xl">
              <Link to="https://www.instagram.com/sameer.gupta09" target="_blank"><BsInstagram /></Link>
              <Link to="https://x.com/sameer_gupta09" target="_blank"><BsTwitter /></Link>
              <Link to="https://github.com/Sameergupta09" target="_blank"><BsGithub /></Link>
              <Link to="https://www.linkedin.com/in/sameer-gupta-094017299" target="_blank"><BsLinkedin /></Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-4">About</h2>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Fee Policy</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <ul className="space-y-2">
              <li><Link to="/login" className="hover:text-yellow-300">Profile</Link></li>
              <li><Link to="/cart" className="hover:text-yellow-300">View Cart</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300">Help</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Payments</Link></li>
              <li><Link to="/cart" className="hover:text-yellow-300">My Wishlist</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Coupons</Link></li>
            </ul>
          </div>

          {/* Install App */}
          <div>
            <h2 className="text-xl font-bold mb-4">Install App</h2>
            <p className="mb-4">Available on Google Play and App Store</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <Link to="https://play.google.com/store" target="_blank">
                <img src={playstore} alt="Play Store" className="w-32 h-auto rounded-md shadow-md" />
              </Link>
              <Link to="https://www.apple.com/app-store/" target="_blank">
                <img src={appstore} alt="App Store" className="w-32 h-auto rounded-md shadow-md" />
              </Link>
            </div>
            <p className="mb-2">Payment Methods</p>
            <Link to="https://www.paypal.com/signin" target="_blank">
              <img src={visa} alt="Visa" className="w-24 h-auto rounded shadow" />
            </Link>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p className="text-center md:text-left">
            &copy; 2024 Developed by Devendrapratap & Sai Developers
          </p>
          <ul className="flex justify-center md:justify-end gap-4 mt-2 md:mt-0">
            <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-white">Terms of Use</Link></li>
            <li><Link to="#" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
