import React,{useState} from "react";
import "./register.css"
import axios from "axios"
import {useHistory} from "react-router-dom"

const Register=()=>{

    const history= useHistory()

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handlechange=e=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register =() =>{
        const {name,email,password} =user
        if (name && email && password){
            alert("posted")
            axios.post("http://localhost:9002/register",user)
            .then(res => alert(res.data.message),
             history.push("/login"))
        }else{
            alert("invalid Input")
        }
        
    }
    return(
        <div className="Register">
            {console.log(user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handlechange}></input>
            <input type="text"  name="email" value={user.email} placeholder="Enter your Email" onChange={handlechange}></input>
            <input type="password" name="password" value={user.password}  placeholder="Enter your Password" onChange={handlechange}></input>
            {/*<input type="password" name="reEnterpassword" value={user.reEnterPassword} placeholder="Re-type Password" onChange={handlechange}></input>*/}
            <div className="button" onClick={register}>Register</div>
            <div >or</div>
            <div className="button" onClick={()=>history.push("/Login")}>login</div>
        </div>
    )
}
export default  Register