import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

const ProductCard = ({ product }) => {
  const { currency, router } = useAppContext()

  return (
    <div
      onClick={() => {
        router.push('/product/' + product._id)
        scrollTo(0, 0)
      }}
      className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer"
    >
      {/* Image Container */}
      <div className="group relative bg-white border border-gray-200 rounded-xl w-full h-52 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition">
        <Image
          src={product.image[0]}
          alt={product.name}
          className="group-hover:scale-105 transition-transform object-cover w-4/5 h-4/5 md:w-full md:h-full"
          width={800}
          height={800}
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md transition">
          <Image
            className="h-3 w-3"
            src={assets.heart_icon}
            alt="heart_icon"
          />
        </button>
      </div>

      {/* Product Name */}
      <p className="md:text-base font-medium pt-2 w-full truncate text-gray-800">{product.name}</p>

      {/* Description */}
      <p className="w-full text-xs text-gray-500 max-sm:hidden truncate">{product.description}</p>

      {/* Ratings */}
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-600">{4.5}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              className="h-3 w-3"
              src={
                index < Math.floor(4)
                  ? assets.star_icon
                  : assets.star_dull_icon
              }
              alt="star_icon"
            />
          ))}
        </div>
      </div>

      {/* Price and Button */}
      <div className="flex items-end justify-between w-full mt-1">
        <p className="text-base font-semibold text-gray-800">
          {currency}{product.offerPrice}
        </p>
        <button className="max-sm:hidden px-4 py-1.5 bg-[#FE2C55] text-white rounded-full text-xs hover:bg-[#e8244b] transition">
          Buy now
        </button>
      </div>
    </div>
  )
}

export default ProductCard