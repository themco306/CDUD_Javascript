import React from "react";
import InputPassword from "./InputPassword";

export default function Login() {
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
            <form>
              <div className="control-group">
                <label className="control-label" htmlFor="inputUser">
                  User
                </label>
                <div className="controls">
                  <input className="span3" type="text" placeholder="User" />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label" htmlFor="inputPassword">
                  Password
                </label>
                <div className="controls">
                  <InputPassword/>
                </div>
              </div>
              <div className="control-group">
                <div className="controls">
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
