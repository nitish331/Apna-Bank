import React from "react";
import Starterbox from "./Starterbox";
import account1 from "../image/createaccount.png";
import upload from "../image/upload.png";
import login from "../image/login.png";
import Class from "./Starter.module.css";

function Starter() {
  const InsertImage = false;
  const d1 =
    "GO TO CREATE ACCOUNT TAB AND FILL OUT THE DETAILS NEDDED TO CREATE YOUR ACCOUNT . ONCE YOUR DETAILS ARE SUBMITTED AND HENCE YOU HAVE TAKEN YOUR FIRST STEP TOWARDS DIGITAL INDIA";
  const d2 =
    "AFTER COMPLETITION OF YOUR FIRST STEP THEN OUR SYSTEM WILL REQUIRED YOUR AADHAR CARD AND PAN CARD COPY . PLEASE APPLOAD IT AND OUR RESPECTIVE TEAM WILL VERIFY IT AND CONTACT YOU FOR GETTING YOU ONBOARD ON OUR SYSTEM . ";
  const d3 =
    "ALL THE NESSARY STEPS WILL BE DONE BY OUR TEAM ON BEHALF OF YOU. YOU JUST NEED TO LOGIN WITH YOUR 4 DIGIT PIN AND VERIFY YOUR SELF AND YOUR JOURNEY GETS STARTED.";
  return (
    <div>
      <div>
        <h1 className={Class.heading}>LET'S GET STARTED</h1>
      </div>
      <div>
        <Starterbox image={InsertImage} src={account1} discription={d1} />
        <Starterbox image={!InsertImage} src={upload} discription={d2} />
        <Starterbox image={InsertImage} src={login} discription={d3} />
      </div>
    </div>
  );
}

export default Starter;
