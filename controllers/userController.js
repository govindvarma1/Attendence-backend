import mongoose from "mongoose"


export const Login = async (req, res, next) => {
    try{
        res.send({msg: "on the login route"});
    } catch (ex) {
        next(ex);
    }
}

export const Register = async (req, res, next) => {
    try{
        const {username, password} = req.body;
    } catch (ex) {
        next(ex);
    }
}