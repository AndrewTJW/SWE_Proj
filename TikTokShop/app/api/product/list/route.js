import Product from "@/models/Product";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";
//to get sellers product
export async function GET(request) {
    try {

        await connectDB();

        const products = await Product.find({})
        return NextResponse.json({ success: true, message: "All items fetched successfully!", products })

    } catch (err) {
        return NextResponse.json({ success: false, message: err.message })
    }
}