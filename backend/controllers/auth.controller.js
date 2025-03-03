import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { validatePhoneNumber } from "../utils/validatePhoneNumber.js";

export const signup = async (req, res) => {
    const {name, countryCode, telephone, email, password} = req.body;

    if (!name || !telephone || !password || !countryCode){
        return res.status(400).json({
            message: "All the fields with '*' are required!",
            success: false
        });
    }

    if (!validatePhoneNumber(telephone, countryCode)){
        return res.status(400).json({
            message: "Your phone number is invalid!",
            success: false
        })
    }

    // if (!req.body.email || req.body.email.trim() === "") {
    //     req.body.email = undefined;
    //     email = req.body.email;
    // }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    try {
        const newUser = new User({name, countryCode, telephone, 
            email: ((!req.body.email || req.body.email === "" ) ? undefined : req.body.email ), 
            password:hashedPassword});
        await newUser.save();
        res.status(200).json({"new user": newUser})
    } catch (error) {
        if (error.code === 11000){
            return res.status(400).json({
                message: "Name, Email or Phone number already used",
                success: false
            });
        }
        res.status(500).json(error);
    }
}
