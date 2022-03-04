import React from "react";
import "./App";
import { FaCheckCircle } from "react-icons/fa";
import agreement from "../Images/nondisclosureagreement.png";

const Sucess = (e) => {
  // event.aadharvalid();
  return (
    <div className="signedin">
      <div className="verfied-successfully">
        <span id="check-icon">
          <FaCheckCircle />
        </span>{" "}
        Aadhar verfied successfully
      </div>
      <div className="text-page">
        <img className="agreement-image" src={agreement} alt="agreement" />
        <div className="otp-box">Request OTP to sign</div>
      </div>
    </div>
  );
};
export default Sucess;
