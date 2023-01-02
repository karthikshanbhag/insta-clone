import React,{useState} from "react";
import { useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom'
import './CreatePost.css'
import M from "materialize-css";
const CreatePost = () => {
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [image,setImage] = useState("")
  const history=useNavigate()
  useEffect(()=>{
    console.log(image)
    if(image){//only call when the value of the image exist
      //call to create post api
      fetch("/createpost",{
        method:"post",
        headers:{
          "Content-Type": "application/json",
          "Authorization":"Bearer "+localStorage.getItem("token")
        },
        body:JSON.stringify({
          title:title,
          body:body,
          image:image
        })
      })
      .then(response=>response.json())
      .then((data)=>{
        if(data.error){
          M.toast({html:data.error,classes:"#e53935 red darken-1"})
        }
        else{
          M.toast({html:"Post created successfully!" ,classes:"#00e676 green accent-3"})
          history("/")
        }
      }).catch(error=>{
        console.log(error)
      })
    }
  },[image])//only call when the value of image changes
  const submitPost = ()=>{
    // const apikey="6d207e02198a847aa98d0a2a901485a5"
    const formData = new FormData();
    formData.append("file",image);
    formData.append("upload_preset","insta-clone");
    formData.append("cloud_name","dw1gdt3y4");
    fetch("https://api.cloudinary.com/v1_1/dw1gdt3y4/image/upload",{
      // key:apikey,
      method:"post",
      body:formData
    }).then(response=>response.json())
    .then(data=>{
      setImage(data.url)
      console.log(data)
    })
    .catch(error=>console.log(error))
  }
  return (
    <div className="card create-post-container">
      <input value={title} onChange={(event)=>setTitle(event.target.value)} type="text" placeholder="post title" />
      <input value={body} onChange={(event)=>setBody(event.target.value)} type="text" placeholder="post content" />
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span>Upload Post Image</span>
          <input type="file" onChange={(event)=>{setImage(event.target.files[0])}} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button onClick={()=>submitPost()}className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Submit Post</button>
    </div>
  );
};

export default CreatePost;
