import authSeller from "@/lib/authSeller";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
//to get sellers product
export async function GET(request) {
    try {
        const { userId } = getAuth(request)
        const isSeller = authSeller(userId)
        if (!isSeller) {
            return NextResponse.json({ success: false, message: "Not Authorized!"});
        }

        const products = await Product.find({})
        return NextResponse.json({ success: true, message: "Updated Product Listing!", products })

    } catch (err) {
        return NextResponse.json({ success: false, message: err.message })
    }
}