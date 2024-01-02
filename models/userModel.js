import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password : {
        required: true,
        type: String,
    }
}, {timestamps: true})

const userModel = mongoose.model('user', userSchema);
export default userModel;