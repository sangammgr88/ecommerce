import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="flex flex-col gap-14 my-10 mt-40 text-sm">
      {/* Footer Content */}
      <div className="grid sm:grid-cols-[3fr_1fr_1fr] gap-14">
        {/* Company Description */}
        <div>
          <img className="mb-5 w-24" src={assets.logo} alt="Sneaker Garage Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Sneaker Garage is an online store offering high-quality shoes that combine style, comfort, and durability. With a diverse collection and excellent customer service, it’s the go-to destination for premium footwear.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="space-y-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="space-y-1 text-gray-600">
            <li>000-000-000</li>
            <li>SneakerGarage@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center py-4 border-t">
        <p className="text-sm text-gray-600 text-center">
          &copy; 2024 Sneaker Garage - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
