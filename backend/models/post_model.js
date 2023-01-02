const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types;

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    author:{
        type:ObjectId,
        ref: "UserModel"
    }
})
const PostModel = mongoose.model("PostModel",PostSchema)
module.exports = PostModel