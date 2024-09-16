import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest , NextResponse } from "next/server";
connectDB();

export async function GET(){
    try {
        const response = NextResponse.json({
            success:true,
            message:"Logout successfull."
        })

        response.cookies.set("token","",{
            httpOnly:true
        });

        return response;
    } catch (error:any) {
        return NextResponse.json({
            success:false,
            message:error.message
        },{
            status:500
        })
    }
}