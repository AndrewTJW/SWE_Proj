"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { assets } from "@/assets/assets";
import Image from "next/image";
import toast from "react-hot-toast";
import { useAppContext } from "@/context/AppContext";

const HeaderSlider = () => {
  const { products, router } = useAppContext();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {}, [products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {products.map((product, index) => (
          <div
            key={product._id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#1E1E1E] text-white py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full shadow-md"
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold text-white">
                {product.name}
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                {product.description?.slice(0, 80)}...
              </p>
              <div className="flex items-center mt-4 md:mt-6">
                <button
                  onClick={() => router.push("/all-products")}
                  className="md:px-10 px-7 md:py-2.5 py-2 bg-[#FE2C55] hover:bg-[#e5204d] transition rounded-full text-white font-medium"
                >
                  Buy Now
                </button>
                <button
                  className="group flex items-center gap-2 px-6 py-2.5 font-medium text-white hover:text-[#FE2C55] transition"
                  onClick={() => router.push(`/product/${product._id}`)}
                >
                  Learn More
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-72 w-48 rounded-lg object-contain bg-white p-2"
                src={product.image[0]}
                alt={product.name}
                width={300}
                height={300}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {products.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-[#FE2C55]" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;