import React,{useState} from "react";
import "./homepage.css";
import {useHistory} from "react-router-dom";

const Homepage=({setLoginUser})=>{

    const history= useHistory()

    
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        
    })
    return(
        <div className="homepage">
            <h1>Hello!!!{user.name}</h1>
            <div className="button" onClick={()=> setLoginUser({})}>Logout</div>
        </div>

    )
}
export default  Homepage