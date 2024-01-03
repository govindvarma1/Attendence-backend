import Attendence from "../models/attendenceModel.js";
import User from "../models/userModel.js";

export const Mark = async(req, res, next) => {
    try {
        const {_id} = req.body;
        const fetchedUser = await User.findOne({_id: _id});
        if(!fetchedUser) {
            return res.status(400).send({msg: "User Doesn't exist"});
        }
        const attendenceUser = await Attendence.findOne({_id: _id});
        if(!attendenceUser) {
            await Attendence.create({
                _id: _id,
                username: fetchedUser.username,
                attendence: [
                    {}
                ]
            })
            return res.status(200).send({msg: "marked attendence successfully"});
        }
        attendenceUser.attendence.push({});
        await attendenceUser.save();
        return res.status(200).send({msg: "marked attendence successfully"});
    } catch(ex) {
        next(ex);
    }
}