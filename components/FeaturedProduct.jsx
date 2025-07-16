"use client";
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/product/list");
      if (res.data.success) {
        const allProducts = res.data.products;
        const shuffled_products = [...allProducts].sort(
          () => 0.5 - Math.random()
        );
        const selectedProducts = shuffled_products.slice(0, 3);
        setProducts(selectedProducts);
      } else {
        toast.error("Failed to fetch products");
      }
    } catch (err) {
      toast.error("Error fetching products: " + err.message);
    }
      useEffect(() => {
    fetchProducts();
  }, []);
    
 return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-black mt-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map((product) => (
        {products.map((product) => (
          <div key={product._id} className="relative group">
            <Image
              src={product.image[0]}
              alt={product.name}
              className="group-hover:brightness-75 transition duration-300 w-full h-64 object-cover rounded-lg"
              width={500}
              height={500}
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{product.name}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {product.description.slice(0, 60)}...
              </p>
              <button className="flex items-center gap-1.5 bg-black px-4 py-2 rounded">
                Buy now
                <Image
                  className="h-3 w-3"
                  src={assets.redirect_icon}
                  alt="Redirect Icon"
                />
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button className="flex items-center gap-1.5 bg-black px-4 py-2 rounded">
                Buy now <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  };

export default FeaturedProduct;
