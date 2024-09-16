import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse , NextRequest } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
connectDB();

export async function POST(request:NextRequest){
    try {
        const {email , password} = await request.json();
        if(!email || !password){
            return NextResponse.json({
                success:false,
                message:'All fields are required.'
            },{
                status:400
            })
        }
        const checkUserExists = await User.findOne({email});
        if(!checkUserExists){
            return NextResponse.json({
                success:false,
                message:'Email or Password is incorrect.'
            },{
                status:400
            })
        }
        //Check password is correct or not.
        const verifiedPassword = await bcryptjs.compare(password,checkUserExists.password)
        if(!verifiedPassword){
            return NextResponse.json({
                success:false,
                message:'Email or Password is incorrect.'
            },{
                status:400
            })
        }

        //Create Token data
        const tokenData = {
            id:checkUserExists._id,
            email:checkUserExists.email,
            username:checkUserExists.username
        }

        //Create Token
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET_KEY!,{
            expiresIn:"1d"
        })

        const response = NextResponse.json({
            message:'LoggedIn successfully',
            success:true,
            token
        })

        response.cookies.set("token",token,{
            httpOnly:true
        })

        return response;
        
    } catch (error:any) {
        return NextResponse.json({
            success:false,
            message : error.message
        },{
            status:500
        })
    }
}