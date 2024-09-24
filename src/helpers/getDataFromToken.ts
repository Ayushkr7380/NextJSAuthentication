import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export function getDataFromToken(request:NextRequest){
    try {
        const token = request.cookies.get('token')?.value || '';
        const decodedToken:any =  jwt.verify(token,process.env.TOKEN_SECRET_KEY!);

        return decodedToken.id;
    } catch (error:any) {
        return NextResponse.json({
            message:error.message,
            success:false
        },{
            status:500
        })
    }
}