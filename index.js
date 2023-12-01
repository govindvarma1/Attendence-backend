require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res, next) => {
    res.send({msg: "Your are on home page"});
})

app.listen(process.env.PORT, () => {
    console.log(`The server is running on ${process.env.PORT}`)
})

