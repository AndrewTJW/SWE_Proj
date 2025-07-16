//Contact Us Page
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4">
            <Image
              className="w-6 h-6"
              src={assets.box_icon}
              alt="phone icon"
            />
            <p>123-456-7890</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              className="w-6 h-6"
              src={assets.box_icon}
              alt="email icon"
            />
            <p>8OvBt@example.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;