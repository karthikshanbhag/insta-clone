const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')
const mongoose = require('mongoose');
// const UserModel = mongoose.model("UserModel")
const UserModel = require('../models/user_model');


module.exports = (req,res,next)=>{
    const {authorization} = req.headers;
    // console.log(req.headers)
    //AUTHORIZATION HEADER->BEARER AND TOKEN(IUFDVIUAvsiufv)
    // console.log(authorization)
    // const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU4ZDc0MjEyYzMzYjU5NjEzOWE1YWQiLCJpYXQiOjE2NjcwNjIwMjJ9.U9a2piIp90OYsf37ckzIqeLzBOcJuXTTnOwoHTlPgCw"
    if(!authorization){
        return res.status(401).json({error:"user not logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(error,payload)=>{
        // console.log(payload)
        if(error){
            return res.status(401).json({error:"user not logged in"})
        }
        const {_id} = payload;
        UserModel.findById(_id)
        .then(dbUser=>{
            
            req.dbUser = dbUser
            //forward the request to next route
        next()
        })
        
    })
}