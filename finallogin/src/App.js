
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import React,{useState} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [user,setLoginUser]=useState({})
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>
            }</Route>
          <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
          <Route path="/Register"><Register/></Route>
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;
