const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PostModel = require('../models/post_model');

const protectedResource = require('../middleware/protectedResource')

router.get('/posts', (req, res) => {
  PostModel.find()
  .populate("author","_id fullName")
  .then((dbPosts)=>{
    res.status(200).json({posts:dbPosts})
  })
  .catch((error)=>{
    console.log(error)
  })
});

router.get('/myposts',protectedResource,(req, res) => {
  PostModel.find({author:req.dbUser._id})
  .populate("author","_id fullName")
  .then((dbPosts)=>{
    res.status(200).json({posts:dbPosts})
  })
  .catch((error)=>{
    console.log(error)
  })
});

router.post('/createpost',protectedResource,(req,res)=>{
    const {title,body,image} = req.body
    if(!title||!body||!image){
        return res.status(400).json({ error: "one or more mandatory is empty" });
      }
      // console.log(req.dbUser)
      // res.send("done")
      req.dbUser.password = undefined
      const post = new PostModel({title:title,body:body,image:image,author:req.dbUser})

      post.save()
      .then((dbPost)=>{
        res.status(201).json({post:dbPost})
      })
      .catch((error)=>{
        console.log(error)
      })
})

module.exports = router;