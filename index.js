require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes")
app.use(cors());
app.use(express.json());

const DBConnect = async ()=> {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to database successfully");
    } catch(error) {
        console.log(error);
    }
}
DBConnect();

app.use("/api/auth/", userRoutes);

app.get("/", (req,res, next) => {
    res.send({msg: "Your are on home page"});
})

app.listen(process.env.PORT, () => {
    console.log(`The server is running on ${process.env.PORT}`)
})

