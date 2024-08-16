import React, { useContext, useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import RegisterBtn from "./logIn/registerBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";
import { ToastContainer, toast } from 'react-toastify';

const LogIn = () => {
  const { logInuser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [seePass, setSeePassword] = useState(false);
  const logLocation=useLocation();
  console.log(logLocation.state);
  
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

  return (
    <div id="form-ui">
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
          <div className="flex justify-center">
            <Link to="/register">
              <RegisterBtn />
            </Link>
          </div>
          <div id="bar"></div>
        </div>
        <ToastContainer /> {/* Include ToastContainer */}
      </form>
    </div>
  );
};

export default LogIn;
