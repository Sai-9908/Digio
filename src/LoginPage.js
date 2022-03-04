import React, { useState } from "react";
import "./App";
import logo from "../Images/digio_bluelogo.png";
import { Link } from "react-router-dom";
import validator from "validator";

const LoginPage = (props) => {
  const [formsubmit, updateformsubmitted] = useState("");
  const [validemail, updatevalidemail] = useState(false);

  const formsubmitted = (e) => {
    e.preventDefault();
    // props.logincheck(formsubmit);
    updatevalidemail(true);
  };
  const mailchanged = (e) => {
    updateformsubmitted(e.target.value);
  };

  return (
    <div className="loginpage">
      <div className="nav">
        <nav className="Nav-Bar">
          <div className="text-box">Sign Document Using sanket@digio.in</div>
        </nav>
        <img className="logo-image" src={logo} alt="logo" />
      </div>
      <div className="gmail-container">
        sanket@digio.in uses Gmail? <br /> login using google
        <div className="google-box">g+Google</div>
        <div className="or">
          <span>OR</span>
          <div className="line"></div>
        </div>
        <form className="input-form" onSubmit={formsubmitted}>
          <div id="text1">proceed with your email address</div>
          <input className="emailbox" type="email" onChange={mailchanged} />
          <div id="text2">
            By continuing.I confirm the Terms and Serives and Privacy Policy of
            digio.in
          </div>
          <Link to={validator.isEmail(formsubmit) ? "/register" : ""}>
            <input type="submit" className="continue" value="Continue" />
          </Link>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
