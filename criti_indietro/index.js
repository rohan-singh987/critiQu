const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config();


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(console.log("connected"))
.catch((err) => {
    console.log(err);
});


app.listen('5050', () => {
    console.log("Heyyy Its backend");
})