//HomeProducts
import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  return (
    <div className="flex flex-col items-center pt-14 bg-white text-black">
      <p className="text-2xl font-semibold w-full text-left">Popular Products</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <button
        onClick={() => {
          router.push("/all-products");
        }}
        className="px-12 py-2.5 mt-2 rounded-full bg-[#FE2C55] text-white hover:bg-[#e91b44] transition duration-200"
      >
        See more
      </button>
    </div>
  );
};

export default HomeProducts;