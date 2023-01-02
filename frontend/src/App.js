import React,{useEffect,createContext,useReducer,useContext} from "react";
import { BrowserRouter , Route,Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import './App.css'
import CreatePost from "./pages/CreatePost";
import Track from "./pages/Track";
import { useNavigate} from "react-router-dom";
import {initialState,reducer} from './reducer/userReducer'
export const UserContext = createContext()

const CustomRouting = ()=>{
  const history = useNavigate()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    if(userInfo){
      dispatch({type:"USER",payload:userInfo})
      history('/')//user logged in do redirect to home
    }else{
      history('/login')
    }
  },[dispatch,history])//called when component mounts and get called only once
  return(
  
      <Routes>
      <Route exact path="/" element={<Home/>}> </Route>
      <Route exact path="/login" element={<Login/>}> </Route>
      <Route exact path="/signup" element={<Signup/>}> </Route>
      <Route exact path="/profile" element={<Profile/>}> </Route>
      <Route exact path="/create-post" element={<CreatePost/>}> </Route>
      <Route exact path="/track" element={<Track/>}> </Route>
      </Routes>
      
  )
}
function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state:state,dispatch:dispatch}}>
    <BrowserRouter>
      <NavBar />
      <CustomRouting/>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
