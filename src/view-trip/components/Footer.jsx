




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
