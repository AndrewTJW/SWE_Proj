import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16 text-gray-800 space-y-12 bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Contact <span className="text-[#FE2C55]">TikTok Shop</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Need to get in touch with us? Reach out through any of the following contact methods.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-2xl shadow-md space-y-6">
          <div className="flex items-center space-x-4">
            <Image className="w-6 h-6" src={assets.box_icon} alt="phone icon" />
            <p className="text-[#FE2C55] text-lg">+6012-3456789</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image className="w-6 h-6" src={assets.box_icon} alt="phone icon" />
            <p className="text-[#FE2C55] text-lg">teknologia05@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;