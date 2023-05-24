import express from "express";
import cors from 'cors'
import mongoose from "mongoose";

const app = express()

app.use(express.json());

app.use(cors());


mongoose.connect(`mongodb+srv://rohannsingh987:rohansingh10084@critique.3jifkxm.mongodb.net/critique?retryWrites=true&w=majority`)


const port = 1234
app.listen(port, ()=> console.log(`Server Running on ${port}`));