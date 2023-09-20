const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cloudinary= require("cloudinary").v2
const morgan = require("morgan")
const app = express()
const dotenv = require("dotenv").config({path: "./config.env"})
const userRoutes = require("../server/routes/userRoutes");
const viewRoutes = require("../server/routes/viewRouter");
const productRoutes = require("../server/routes/productRoutes");
// (path: "success")
cloudinary.config({
  cloud_name: "dighewixb",
  api_key: "999648751199222",
  api_secret: "Wlq7lsmTYKxhhvrGku4PMdVjg3I",
});
const DB = process.env.DATABASE
app.use("/api/user", userRoutes);
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs");


app.use('/product', productRoutes)
app.use('/', viewRoutes)
mongoose.connect(DB, {useNewUrlParser: true}).then ((con)=>{
    console.log("DATABASE CONNECTED!!");
})
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Lodgemate is running on port ${port}`);
})