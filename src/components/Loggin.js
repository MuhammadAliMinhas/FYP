// imports
import {React, useState, useEffect} from "react";
import "../css/loggin.css";
import background from "../images/login/left_login.png";
import Link from "react-router-dom";
import google from "../images/login/google.png";
import {signInWithGoogle} from "../components/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";





// main component
const Loggin = () => {
 
  
  //login 
  const login = async () => {
    
  }

   return (
    <div className="main_login_container">
      <div className="right_login_container"> /* right */




      </div>
      <div className="left_login_container">
        <div className="background_image_containerLogin">
          <img
            src={background}
            alt="just a background"
            className="center_imgLogin"
          />
        </div>
        <div className="heading_containerLogin">Log in</div>
        <br />
        <div className="form_cont">
          <form action="">
            <input
              type="email"
              placeholder="Email"
              className="emailInput"
              name="Email"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="emailInput"
              name="Password"
            />
            <div className="forget">Forget Password?</div>
            <br />
            <input className="Login_Btn" type="submit" value={"Sign in"} />
          </form>
          <br />
          <div className="hate_it">OR</div>
            <button className="Google_Btn" onClick={signInWithGoogle}>
              <img src={google} alt="google" className="google" /><p id="yend">Continue with google</p></button>
        </div>
      </div>
    </div>
  );
};

// component exported
export default Loggin;
