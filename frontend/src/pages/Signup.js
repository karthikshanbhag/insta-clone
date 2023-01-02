import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import M from 'materialize-css'
import './Signup.css'
const Signup = () => {
  const history=useNavigate()
  const [fullName,setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const register = ()=>{
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html:"Enter valid emailId",classes:"#e53935 red darken-1"})
      return
    }
    fetch("/register",{
      method:"post",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        fullName:fullName,
        email:email,
        password:password
      })
    })
    .then(response=>response.json())
    .then((data)=>{
      console.log(data)
      if(data.error){
        M.toast({html:data.error,classes:"#e53935 red darken-1"})
      }
      else{
        M.toast({html:data.result,classes:"#00e676 green accent-3"})
        history("/login")
      }
    }).catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className='login-container'>
     <div className='card login-card input-field'>
      <h2 className='brand-logo'>SignUp</h2>
      <input type="text" placeholder='Full name' value={fullName} onChange={(event)=>setFullName(event.target.value)}/>
      <input type="text" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
      <input type="password" placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
      <button onClick={()=>register()} className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">SIGNUP</button>
      <h6><Link to='/login'>Already have an account?</Link></h6>
     </div>
    </div>
  )
}

export default Signup
