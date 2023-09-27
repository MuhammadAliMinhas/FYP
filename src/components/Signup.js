// useless imports
import React, { useState, useEffect } from "react";
import "../css/signup.css";
import left_top_image from "../images/signup/left_top_image.png";
import center_background_image from "../images/signup/center_background_image.png";
import right_logo from "../images/signup/signup_right_logo.png";
import { auth } from "../components/Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const Signup = () => {
  // intializing useStates
  const [RegisterName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});

  // history sending to login

  // signup Registration
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/email-already-in-use") {
        setError("This email is already in use. Please use a different email.");
      } else if (errorCode === "auth/invalid-email") {
        setError("Invalid email address. Please enter a valid email.");
      } else if (errorCode === "auth/weak-password") {
        setError(
          "The password is too weak. Please choose a stronger password."
        );
      } else {
        setError(errorMessage);
      }
    }
  };
  // getting current user
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // error message timer
  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      setError(null);
    }, 5000);

    return () => {
      clearTimeout(errorTimeout);
    };
  }, [error]);

  // signOut
  const logout = async () => {
    await signOut(auth);
  };

  // going to loginPage
  function handleLoginNavigator() {}

  return (
    <div className="main_container">
      <div className="left_container">
        {error && <div className="error_message">{error}</div>}
        <div>
          <img
            src={left_top_image}
            className="left_top_image"
            alt="leftimage"
          />
        </div>
        <div className="heading_container">Sign up</div>
        <br />
        <div className="form_container">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="input_name"
              name="lname"
              onChange={(event) => {
                setRegisterName(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input_2"
              name="email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="input_2"
              name="password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input_2"
              name="confirm"
            />
          </div>
          <div>
            <button onClick={register} className="submit_Btn">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="right_container">
        <div className="background_image_container">
          <img
            src={center_background_image}
            alt="centerimage"
            className="center_img"
          />
        </div>
        <div className="justifyCenter logo_container">
          <img src={right_logo} alt="mainlogo" className="right_logo" />
        </div>
        <div className="justifyCenter content_container">
          <p id="text">
            <strong>Have an account?</strong> Log in & Buy <br />{" "}
            <span id="text2">our best products.</span>
          </p>
        </div>
        <div className="justifyCenter login_Btn_container">
          <button onClick={handleLoginNavigator} className="goto_login_Btn">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
