import React from 'react'
import './login.css'

import { useForm } from "react-hook-form"
import RegisterBtn from './logIn/registerBtn'
import { Link } from 'react-router-dom'

const LogIn = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
<div id="form-ui">
  <form action="" method="post" id="form" onSubmit={handleSubmit(onSubmit)}>
    <div id="form-body">
      <div id="welcome-lines">
        <div id="welcome-line-1">One Shope</div>
        <div id="welcome-line-2">Welcome Back in One shope</div>
      </div>
      <div id="input-area">
        <div className="form-inp">
          <input placeholder="Email Address" type="text" className='bg-transparent' {...register("email",{ required: true })}/>
          {errors.email && <span className="text-start text-xl text-red-500">This field is required</span>}
        </div>
        <div className="form-inp bg-transparent">
          <input placeholder="Password" type="password" {...register("password", { required: true })}/>
          {errors.password && <span className="text-start text-xl text-red-500">This field is required</span>}
        </div>
      </div>
      <div id="submit-button-cvr">
        <button id="submit-button" type="submit" >Login</button>
      </div>
      <div id="forgot-pass">
        <a href="#">Forgot password?</a>
      </div>
    <div className='flex justify-center'>
    <Link to="/register">
    <RegisterBtn></RegisterBtn>
    </Link>
    </div>
      <div id="bar"></div>
    </div>
  </form>
  </div>
  )
}

export default LogIn
