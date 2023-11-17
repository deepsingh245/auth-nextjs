import {connect} from '@/dbConfig/dbConfig'
import User from "@/models/userModel"
import { NextRequest,NextResponse } from 'next/server'
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'



connect()

export async function POST( request: NextRequest){
    try {
        
        const reqBody = await request.json()
        const {email, password }= reqBody;
        console.log(reqBody);

        //check if user exists
        const user = User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User not found"},{status : 400});
        }
        //compare password
        const validatePassword = await bcryptjs.compare(password, user.password)
        if (!validatePassword){
            return NextResponse.json({error:'Invalid Password'},{status : 401});
        }
        //generate token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }
        //create jwt token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'})

        const response = NextResponse.json({
            message: 'Login Succesfull',
            success: true,
        })
        response.cookies.set('token', token, {
            httpOnly:true,

        })
        return response;

        

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
        
    }
}