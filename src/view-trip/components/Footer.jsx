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


import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaSnapchat, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#143b50] text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Images */}
        <div className="flex space-x-4">
          <img src="/path-to-your-image1.jpg" alt="Image 1" className="w-20 h-20 rounded-lg shadow-lg" />
          <img src="/path-to-your-image2.jpg" alt="Image 2" className="w-20 h-20 rounded-lg shadow-lg" />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <motion.a
            href="https://instagram.com/dev_464_h"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl hover:text-pink-500"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://facebook.com/dev_464_h"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl hover:text-blue-500"
          >
            <FaFacebook />
          </motion.a>

          <motion.a
            href="https://snapchat.com/gokuuu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl hover:text-yellow-500"
          >
            <FaSnapchat />
          </motion.a>

          <motion.a
            href="tel:+1234567890"
            whileHover={{ scale: 1.2 }}
            className="text-3xl hover:text-green-500"
          >
            <FaPhone />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
