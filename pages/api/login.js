import connect from "../../lib/mongodb";
import User from "../../model/schema";
import jwt from 'jsonwebtoken'


connect()

const bodyParser = require('body-parser')
export default async function handler(req,res){
    try{
        console.log('aba')
        const {email,password} = req.body
        const user = await User.findOne({email,password})

        if(!user){
            res.redirect('/userNotExist')
        }
        // const token=jwt.sign({
        //     email:user.email,
        //     id:user._id,

        // },process.env.JWT_SECRET)
        // res.json({token})
        const val = await user.json()
        return val
        
        // res.redirect('/StudentDashboard')

    }
    catch(error){
        console.log(error.message)
        // res.redirect('/error')
    }
}