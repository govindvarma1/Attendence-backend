import mongoose from "mongoose";

const attendenceSchema =new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    _id: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
    },
    attendence: [
        {
            timestamps: {
                type: Date,
                default: Date.now,
            }
        }
    ]
})

const attendenceModel = mongoose.model("attendence", attendenceSchema);
export default attendenceModel;