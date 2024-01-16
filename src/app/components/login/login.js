'use client';
import "./login.css";
import TabButton from "../tabButton"
import AlertWindow from "../alert/alert"

import { useState } from "react";

export const user = {
  email: "",
  password: "",
  loggedIn: false,
};

function handleclick() {
  user.email = "abc";
  user.password = "abc";
  user.loggedIn = true;
}

const BUTTONVALUES = {
  LOGIN : 'LOG IN',
  SIGNUP : 'SIGN UP'
}

function LoginWindow() {
  const [selectedScreen, setSelectedScreen] = useState();
  function handleUserAction(name) {
    setSelectedScreen(name);
  }


  let closeX = <div></div>
  if(selectedScreen){
    closeX=(<TabButton onSelect={()=>handleUserAction(null)}>CLOSE WINDOW</TabButton>)
  }
  return (
    <section id="loginMenu">
      {!selectedScreen ? (<h2>Please select one option </h2>) : null }
      
        <menu id="loginMenuButtonTab">
          <TabButton onSelect={()=>handleUserAction('LOGIN')}>LOG IN</TabButton>
          <TabButton onSelect={()=>handleUserAction('SIGNUP')}>SIGN UP</TabButton>
          {closeX}
        </menu>
     
        {selectedScreen ? 
        (<div id="login">
        <h1>User {BUTTONVALUES[selectedScreen]}</h1>
        <p>
          <label>Email</label>
          {}
          <input type="email" />
        </p>
  
        <p>
          <label>Password</label>
          {}
          <input type="password" />
        </p>
  
        <p id="actions">
          <button>{BUTTONVALUES[selectedScreen]}</button>
        </p>
      </div>) : null
        }
      
    </section>
  );
}


function UserLogin() {
  return (
    <div id="login">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {}
        <input type="password" />
      </p>

      <p id="actions">
        <button>{BUTTONVALUES[selectedScreen]}</button>
      </p>
    </div>
  );
}

export default LoginWindow;
