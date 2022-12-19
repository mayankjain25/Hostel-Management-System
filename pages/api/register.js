import connect from "../../lib/mongodb";
import User from "../../model/schema";
import {Toaster,toast} from 'react-hot-toast'

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
        },1500)
        res.redirect('/')


    }catch(error){
        toast.error("Not able to create a new user")
        console.log(error.message)

        res.redirect('/error')

    }
}

