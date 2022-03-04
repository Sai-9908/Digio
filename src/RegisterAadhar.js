import React, { useState, useRef } from "react";
import "./App";
import aadharlogo from "../Images/aadhaar_english_logo.svg";
import logo from "../Images/digio_bluelogo.png";
import agreement from "../Images/nondisclosureagreement.png";
import Success from "./AadharValdated";
import { Link } from "react-router-dom";

const RegisterAadhar = (props) => {
  const aadharSubmit = useRef(null);
  const OtpSubmit = useRef(null);
  const aadharAlert = useRef(null);

  const [aadharNumber, updateAadharNumber] = useState("");
  const [OtpNumber, updateOtpNumber] = useState("");
  const [formSubmitted, updateFormSubmission] = useState(false);
  const OriginalOTP = "000000";

  const aadharEntered = (e) => {
    e.target.value.length === 16 && (aadharSubmit.current.disabled = false);
    e.target.value.length < 17 && updateAadharNumber(e.target.value);
  };
  const aadharSubmitHandler = () => {
    console.log(aadharNumber);
    aadharNumber.length === 16 && alert("working");
  };
  const OtpEntered = (e) => {
    e.target.value.length === 6 && (OtpSubmit.current.disabled = false);
    e.target.value.length < 7 && updateOtpNumber(e.target.value);
  };
  const OtpSubmitHandler = (e) => {
    e.preventDefault();
    if (OtpNumber === OriginalOTP) {
      aadharAlert.current.style.display = "none";
      updateFormSubmission(true);
    }
  };

  const boxClicked = (e) => {
    e.currentTarget.style.display = "none";
  };
  const innerBox = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="register">
      <div id="nav">
        <nav id="Nav-Bar">
          <div id="text-box">
            {formSubmitted ? (
              <div>
                Signing... <br />
                <span id="Atext"> Mutual NON-Disclosure Agreement</span>
              </div>
            ) : (
              "Register Aadhar"
            )}
          </div>
        </nav>
        <img className="logo-image" src={logo} alt="logo" />
      </div>
      {formSubmitted ? <Success aadharvalid={RegisterAadhar} /> : ""}
      <div className="aadharpage">
        <div className="text-page">
          <img className="agreement-image" src={agreement} alt="agreement" />
          <div className="otp-box">Request OTP to sign</div>
        </div>

        <div className="aadharalert" onClick={boxClicked} ref={aadharAlert}>
          <div className="alert" onClick={innerBox}>
            <img className="aadhar-img" src={aadharlogo} alt="aadharlogo" />
            <div>
              <form onSubmit={aadharSubmitHandler}>
                <div className="verified-boxes">
                  <input
                    className="verify-box"
                    type="number"
                    onChange={aadharEntered}
                    value={aadharNumber}
                  />
                  <input
                    className="verify-button"
                    type="submit"
                    value="verify"
                    ref={aadharSubmit}
                    disabled
                  />
                </div>
              </form>
              <div className="text">
                <input type="checkbox" className="check-box" />I agree to e-sign
                this KYC document to get started
              </div>
              <form onSubmit={OtpSubmitHandler}>
                <div className="verifyOtp">
                  <input
                    className="verify-box"
                    type="number"
                    onChange={OtpEntered}
                    value={OtpNumber}
                  />

                  <input
                    className="verify-button"
                    type="submit"
                    value="Submit"
                    ref={OtpSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterAadhar;
