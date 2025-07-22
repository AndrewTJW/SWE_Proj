import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/config/db";
import Product from "@/models/Product";

export async function POST(request) {
  try {
    await connectDB();

    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" }
      );
    }

    const { productId } = await request.json();

    const product = await Product.findById(productId);

    const index = product.likedBy.indexOf(userId);

    if (index > -1) {
      // Already liked → unlike
      product.likedBy.splice(index, 1);
    } else {
      // Not liked → like
      product.likedBy.push(userId);
    }

    await product.save();

    return NextResponse.json(
      { success: true, message: "Successfully liked product" ,likedBy: product.likedBy },
    );
  } catch (error) {
    console.error("Error toggling like:", error);
    return NextResponse.json(
      { success: false, message: error.message },
    );
  }
}
