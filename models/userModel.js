const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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