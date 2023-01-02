const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const UserModel = mongoose.model("UserModel",UserSchema)
module.exports = UserModel