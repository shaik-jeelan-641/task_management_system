import Auth from "../models/Auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

export const Login = async (res, req) => {
    try {
        const {username , email , password} = req.body
        const user = await Auth.find({email, username})
        if(!user){
            return res.status(400).json({message : "User not found" })
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword){ 
            return res.status(400).json({message : "Invalid password" })
            }   
            const token = jwt.sign({id : user._id}, process.env.SECRET_KEY,
                {expiresIn : "1h"})
                return res.json({token})
    } catch (error) {
        return res.status(500).json({message : "Internal server error" })
        
    }
}

export const Signup = async (res, req) => {
    try {
        const {username , email , password} = req.body
        const hashPassword  = await bcrypt.hash(password,10)
        const user = await Auth.create({
            username,
            email,
            password: hashPassword,
        })
        const token = jwt.sign(
            {id: user._id},
            process.env.SECRET_KEY,
            {expiresIn: "1h"}
        )
        return res.json({token})
    } catch(error){
        console.error(error)
        return res.status(500).json({message : "Internal server error" })
    }
}