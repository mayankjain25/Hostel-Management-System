import connect from "../../lib/mongodb";
import User from "../../model/schema";
import {Toaster,toast} from 'react-hot-toast'
import cors from 'cors'

connect()

export default async function handler(req,res){
    console.log('handler entered')
    try{

        const user = await User.create(req.body)
        if(!user){
            toast.error("User not created")
            return res.json({error: 'User could not be created'})
        }
        setTimeout(()=>{
            
            toast.success("User created successfully")
            res.redirect('/')
        },1500)


    }catch(error){
        toast.error("Not able to create a new user")
        console.log(error.message)

        res.redirect('/Error')

    }
}

