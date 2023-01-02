const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const userModel =require('../models/user_model');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/user_model');
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')
const protectedResource = require('../middleware/protectedResource')


router.get('/', (req, res) => {
  res.send("hello world");
});
router.get('/client',(req,res)=>{
  res.send("your order is being recieved and will shorly being dispatched")
})

router.get('/secured',protectedResource, (req, res) => {
  res.send("this is a authorized request");
});

router.get('/droneInfo', (req, res) => {
  res.send({
    crop:"wheat",
    quantity:"1 arc"
  });
});


router.post('/login',(req,res)=>
{
  const {email,password} = req.body
  if(!email||!password){
    return res.status(400).json({ error: "one or more mandatory is empty" });
  }
  

  UserModel.findOne({email:email})
  .then((dbUser)=>{
    if(!dbUser){//user not found
      return res.status(400).json({ error: "invalid credentials "});
    }
    bcrypt.compare(password,dbUser.password)
    .then((didMatch)=>{
      if(didMatch){
        // res.status(200).json({result:"user logged in successfully"})
        //create and send a token
        const jwtToken = jwt.sign({_id:dbUser._id},JWT_SECRET)
        const {_id,fullName,email} = dbUser
        res.send({token:jwtToken,userInfo:{_id,fullName,email}})
      }else{
        return res.status(400).json({ error: "invalid credentials "});
      }
    })
  })
  .catch((error)=>{console.log(error)})
})

router.post('/register', (req, res) => {
  console.log(req.body);
 
  const {fullName,email,password } = req.body;
  if (!fullName || !email || !password  ) {
    return res.status(400).json({ error: "one or more mandatory is empty" });
  }
  // avoid duplicate user
  UserModel.findOne({email:email})
  .then((dbUser)=>{
    if(dbUser){
      return res.status(500).json({ error: "user with email exist"});
    }
    bcrypt.hash(password,16)
    .then((hashedPassword)=>{
      const user = new UserModel({fullName,email,password:hashedPassword})
    user.save()
    .then((u)=>{res.status(201).json({result: "user registered successfully"});})
    .catch((error)=>{
      console.log(error)
    })
    })
    
  })
  .catch((error)=>{
    console.log(error)
  })
  
});

module.exports = router;
