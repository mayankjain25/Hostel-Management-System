 import mongoose from 'mongoose'
import {Schema} from 'mongoose'

const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    rollNumber:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true
    },
    hostelName:{
        type:String,
        required:true
    },
    roomNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

module.exports = mongoose.models.User || mongoose.model('User',userSchema) //check if 'User' model is already defined, if not, then it explicitly defines it