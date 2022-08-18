import React from "react";
import Class from "./ACCOUNTSUCCES.module.css";

function Submission() {
  return (
    <div className={Class.container}>
      <h1 className={Class.center}>THANKS FOR SUBMISSION OF YOUR DETAILS</h1>
      <h2 className={Class.center2}>
        WE WILL SOON VERIFY THE DETAILS AND GET BACK IN TOUCH WITH YOU
      </h2>
      <h2 className={Class.center2}>
        YOU CAN LOGIN AFTER 2 DAYS , TO KNOW THE STATUS OF YOUR ACCOUNT
      </h2>
    </div>
  );
}

export default Submission;
