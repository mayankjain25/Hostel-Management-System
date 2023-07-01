import connect from "../../lib/mongodb";
import User from "../../model/schema";
import {Toaster,toast} from 'react-hot-toast'
import cors from 'cors'
import { useRouter } from 'next/router'


connect()

export default async function handler(req,res){
    console.log('handler entered')
    const router = useRouter()
    try{

        const user = await User.create(req.body)
        if(!user){
            toast.error("User not created")
            return res.json({error: 'User could not be created'})
        }
        else{
            router.push('/')
        }


    }catch(error){
        toast.error("Not able to create a new user")
        console.log(error.message)

        router.push('/Error')

    }
}

