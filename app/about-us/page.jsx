//About Us Page
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          We are a leading e-commerce platform dedicated to providing a seamless
          online shopping experience for our valued customers. Our mission is to
          connect you with a wide range of high-quality products from various
          categories, ensuring a hassle-free shopping journey.
        </p>
        <p className="text-lg">
          At our e-commerce platform, we believe in delivering exceptional
          customer service and ensuring a secure and convenient shopping
          experience. With a user-friendly interface, we aim to make your online
          shopping experience enjoyable and hassle-free.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;