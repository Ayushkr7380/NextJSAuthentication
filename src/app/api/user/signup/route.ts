import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest , NextResponse} from "next/server";
import bcryptjs from "bcryptjs";

connectDB();

export async function POST(request : NextRequest){
    try {
        const reqBody = await request.json();
        const { username , email , password } = reqBody;
        if(!username || !email || !password){
            return NextResponse.json({
                success:false,
                message:'All fields are required'
            },{
                status:400
            })
        }
        const userExist = await User.findOne({email});
        if(userExist){
            return NextResponse.json({
                success:false,
                message:'User already exists.'
            },{
                status:400
            })
        }

        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        const createUser = await User.create({
            username,
            email,
            password : hashedPassword
        });

        if(!createUser){
            return NextResponse.json({
                success:false,
                message:'Failed to create user.'
            },{
                status:400
            })
        }

        await createUser.save();
        
        createUser.password = undefined;

        return NextResponse.json({
            success:true,
            message:'User created successfully.',
            createUser
        },{
            status:201
        })
    } catch (error:any) {
        return NextResponse.json({
            success:false,
            message:error.message,
            message1:'internal server error'
        },{
            status:500
        })
    }
}