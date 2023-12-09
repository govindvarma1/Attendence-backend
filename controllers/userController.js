const mongoose = require("mongoose");

module.exports.Login = async (req, res, next) => {
    try{
        res.send({msg: "on the login route"});
    } catch (ex) {
        next(ex);
    }
}

module.exports.Register = async (req, res, next) => {
    try{
        res.send({msg: "on the register route"});
    } catch (ex) {
        next(ex);
    }
}