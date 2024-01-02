import User from "../models/userModel.js";
import bcrypt from "bcrypt"

export const Login = async (req, res, next) => {
    try{
        const {username, password} = req.body;
        const existingUser =await User.findOne({username: username});
        if(!existingUser) {
            return res.status(400).send({msg: "user doesn't exist"});
        }
        console.log(existingUser.password);
        const passwordMatch = await bcrypt.compare(password, existingUser.password)
        if(!passwordMatch) {
            return res.status(400).send({msg: "Incorrect password"});
        } else {
            return res.status(200).send({user: existingUser, msg: "User logged in succesfully"})
        }
    } catch (ex) {
        next(ex);
    }
}

export const Register = async (req, res, next) => {
    try{
        const {username, password} = req.body;
        const fetchedUser = await User.findOne({username: username});
        if(fetchedUser) {
            return res.status(400).send({msg: "user already exists"});
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const createdUser =await User.create({
            username: username,
            password: hashedPassword,
        })
        res.status(200).send({user: createdUser, msg: "New User Created successfully"})        
    } catch (ex) {
        next(ex);
    }
}