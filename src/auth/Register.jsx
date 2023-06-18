import React from "react";
import { useForm } from "react-hook-form";
import InputPassword from "./InputPassword";

import { useDispatch } from 'react-redux'
import { setCurrent, setToken } from "../state/UserSlice";
import { userApi } from "../API/userApi";
import {ToastContainer,toast} from 'react-toastify'
import { useState } from "react";
import LoadingRegister from "../components/LoadingRegister";
export default function Register() {

  const {reset,register,handleSubmit,getValues,formState:{errors}}= useForm()
  const dispatch=useDispatch()
  const [loading,setLoading]=useState()
  const validateConfirmPassword=(value)=>{
    var {password}=getValues()
    return value===password
  }
  var myView=loading==true?<LoadingRegister/>:''
  const onSubmit=(data)=>{
    const callRegister=async (data)=>{
    try {
      setLoading(true)
      const response=await userApi.register(data)
      console.log(response)
      dispatch(setCurrent(response.data.user))
      dispatch(setToken(response.data.jwt))
      localStorage.setItem('user',JSON.stringify(response.data.user))
      localStorage.setItem('token',JSON.stringify(response.data.jwt))
      toast.success("Register success")
      setLoading(false)
      reset()
    } catch (error) {
      toast.error("Register Error: "+ error)
    }
     
    }
    callRegister(data)
  }
  return (
    <div className="">
      <ul className="breadcrumb">
        <li>
          <a href="index.html">Home</a> <span className="divider">/</span>
        </li>
        <li className="active">Registration</li>
      </ul>
      <h3> Registration</h3>
      <hr className="soft" />
      <div className="well">
        <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
          <div className="control-group">
            <label className="control-label" htmlFor="inputUsername">
              User name <sup>*</sup>
            </label>
            <div className="controls">
              <input {...register('username',{required:true,minLength:2})} type="text" id="inputUsername" placeholder="User name" />
             {errors.username?.type === "required"&&<p style={{color:'red'}}>username is required </p>}
             {errors.username?.type === "minLength"&&<p style={{color:'red'}}>username must have at least 2 character </p>}
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="inputEmail">
              Email <sup>*</sup>
            </label>
            <div className="controls">
              <input {...register('email',{required:true,pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})} type="text" placeholder="Email" />
              {errors.email?.type === "required"&&<p style={{color:'red'}}>email is required </p>}
             {errors.email?.type === "pattern"&&<p style={{color:'red'}}>wrong email</p>}
            </div>
          </div>
          <div className="control-group">
            <label className="control-label">
              Password <sup>*</sup>
            </label>
            <div className="controls">
            <InputPassword label="password" register={register} validateConfirmPassword={() => {return true}} />
              {errors.password?.type === "required" && (
                <p style={{ color: "red" }}>Password is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p style={{ color: "red" }}>
                  Password at least 8 character, 1 uppcase, 1 lowercase, 1
                  number and 1 specialCharacter
                </p>
              )}
            </div>
          </div>
          <div className="control-group">
            <label className="control-label">
              Confirm Password <sup>*</sup>
            </label>
            <div className="controls">
            <InputPassword label='confirmPassword' register={register} validateConfirmPassword={validateConfirmPassword}/>
            {errors.confirmPassword?.type === "required" && (
              <p style={{ color: "red" }}>Password is required</p>
            )}
            {errors.confirmPassword?.type === "pattern" && (
              <p style={{ color: "red" }}>
                Password must contain at least one uppercase letter, one lowercase letter, one number, and be between 8 and 30 characters long.
              </p>
            )}
            {errors.confirmPassword?.type === "validate" && (
              <p style={{ color: "red" }}>Password and Comfirm Password not match required</p>
            )}
            </div>
          </div>
          <div className="control-group">
            <div className="controls">
              {myView}
              <input
                type="submit"
                name="submitAccount"
                defaultValue="Register"
                className="exclusive shopBtn"
              />
            </div>
          </div>
        </form>
      </div>
      
    </div>
  );
}
