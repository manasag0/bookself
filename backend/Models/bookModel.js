import mongoose from "mongoose"

const bookSchama = mongoose.Schema(
    {
        title:{
            type:String,
            required: true
        },
        author:{
            type: String,
            required:true
        },
        publishYear:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true
    }
)


export const Book = mongoose.model(bookSchama)