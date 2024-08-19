import React, { useContext, useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import RegisterBtn from "./logIn/registerBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../context/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../firebase/firebase";
import { Helmet } from "react-helmet-async";

const LogIn = () => {
  const { logInuser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [seePass, setSeePassword] = useState(false);
  const logLocation=useLocation();
  console.log(logLocation.state);
  const provider = new GoogleAuthProvider();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logInuser(data.email, data.password) 
      .then((userCredential) => {
        toast("Login successful");
        setTimeout(() => {
          navigate(logLocation?.state?logLocation?.state:"/");
        }, 3000);
      })
      .catch((error) => {
        toast("You don't have an account");
      });
  };

  const handelGoogleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // setPerson(user);
        toast("Login successful with Google");
        // console.log(user);
        setTimeout(() => {
          navigate(logLocation?.state?logLocation.state:"/");
        }, 3000);
      })
      .catch((error) => console.log("error", error.message));
  };
  return (
    <div id="form-ui">
      <Helmet>
        <title>Log In One shope</title>
      </Helmet>
      <form action="" method="post" id="form" onSubmit={handleSubmit(onSubmit)}>
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">One Shope</div>
            <div id="welcome-line-2">Welcome Back to One Shope</div>
          </div>
          <div id="input-area">
            <div className="form-inp">
              <input
                placeholder="Email Address"
                type="text"
                className="bg-transparent"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-start text-xl text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-inp bg-transparent">
              <input
                placeholder="Password"
                type={seePass ? "text" : "password"} // Conditional input type
                {...register("password", { required: true })}
              />
              <span onClick={() => setSeePassword(!seePass)}>
                {seePass ? "Hide" : "Show"} Password
              </span>
              {errors.password && (
                <span className="text-start text-xl text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">
              Login
            </button>
          </div>
          <div id="forgot-pass">
            <a href="#">Forgot password?</a>
          </div>
          <div className="w-full flex justify-center">
          <button className="my-2 btn text-white bg-transparent bottom-2 border-green-800 w-[45%] sm:w-[48%] ml-2 mr-2 hover:bg-green-800 hover:text-white" onClick={handelGoogleSubmit}>
          <span className="text-2xl"><FaGoogle></FaGoogle></span>Google log in</button>
          </div>
          <div className="flex justify-center">
            <Link to="/register">
              <RegisterBtn />
            </Link>
          </div>
          <div id="bar"></div>
        </div>
        <ToastContainer /> 
      </form>
    </div>
  );
};

export default LogIn;
