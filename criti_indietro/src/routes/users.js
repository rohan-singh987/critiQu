import  express  from 'express';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserModel } from '../models/Users.js';

const router = express.Router();

router.post('/register', async(req, res) => {
    const {username, password} = req.body;

    const user = await UserModel.findOne({ username: username})

    if(user)
    {
        return res.json("User already exists")
    }

    const hassPass = await bcrypt.hash(password, 10);

    const newUser = new UserModel({username, password:hassPass});
    await newUser.save();
    
    res.json(` User Registerd Successfully`);

});

router.get('/login', async(req,res) => {
    const {username, password} = req.body;

    const user = await UserModel.findOne({username});
    if(!user)
    {
        return res.json({"message" : "User Doesn't Exist"})
    }

    const isPassValid = await bcrypt.compare(password, user.password);
    if(!isPassValid)
    {
        return res.json({"Message": "Password is incorrect"})
    }

    const token = jwt.sign({id: id})


});

 
export {router as userRouter};