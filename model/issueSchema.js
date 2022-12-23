import mongoose from "mongoose";
import { Schema } from "mongoose";

const issueSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    priority:{
        type:Number,
        required:true,
    },
    status:{
        type:String
    },
    date:{
        type:Date,
    }
})

module.exports = mongoose.models.Issues || mongoose.model('Issues',issueSchema) //check if 'User' model is already defined, if not, then it explicitly defines it