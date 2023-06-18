import React from "react";
import InputPassword from "./InputPassword";
import { useForm } from "react-hook-form";
import {ToastContainer,toast} from 'react-toastify'
import { useState } from "react";
import LoadingRegister from "../components/LoadingRegister";
import { useDispatch } from 'react-redux'
import { setCurrent, setToken } from "../state/UserSlice";
import { userApi } from "../API/userApi";
export default function Login() {
  const {register,handleSubmit,getValues,formState:{errors}}= useForm()
  const [loading,setLoading]=useState()
  const dispatch=useDispatch()
  var myView=loading==true?<LoadingRegister/>:''
  const onSubmit=(data)=>{
    const callLogin=async (data)=>{
    try {
      setLoading(true)
      const response=await userApi.login(data)
      console.log(response)
      dispatch(setCurrent(response.data.user))
      dispatch(setToken(response.data.jwt))
      localStorage.setItem('user',JSON.stringify(response.data.user))
      localStorage.setItem('token',JSON.stringify(response.data.jwt))
      toast.success("Login success")
      setLoading(false)
    } catch (error) {
      toast.error("Login Error: "+ error)
    }
     
    }
    callLogin(data)
  }
  return (
    <div className="">
      <ul className="breadcrumb">
        <li>
          <a href="index.html">Home</a> <span className="divider">/</span>
        </li>
        <li className="active">Login</li>
      </ul>
      <h3> Login</h3>
      <hr className="soft" />
      <div className="row">
        <div className="span4"></div>
        <div className="span4">
          <div className="well">
            <h5>ALREADY REGISTERED ?</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="control-group">
                <label className="control-label" htmlFor="inputUser">
                  User
                </label>
                <div className="controls">
                <input {...register('identifier',{required:true,minLength:2})} type="text" id="inputUsername" placeholder="User name" />
             {errors.identifier?.type === "required"&&<p style={{color:'red'}}>username is required </p>}
             {errors.identifier?.type === "minLength"&&<p style={{color:'red'}}>username must have at least 2 character </p>}
                </div>
              </div>
              <div className="control-group">
                <label className="control-label" htmlFor="inputPassword">
                  Password
                </label>
                <div className="controls">
                <InputPassword label='password' register={register} validateConfirmPassword={()=>true}/>
            {errors.password?.type === "required" && (
              <p style={{ color: "red" }}>Password is required</p>
            )}
                </div>
              </div>
              <div className="control-group">
                <div className="controls">
                  {myView}
                  <button type="submit" className="defaultBtn">
                    Sign in
                  </button>{" "}
                  <a href="#">Forget password?</a>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
