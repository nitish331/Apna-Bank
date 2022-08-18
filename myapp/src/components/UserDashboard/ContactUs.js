import React from "react";
import OurService from "../OURSERVICES/OurService";
import Class from "./ContactUs.module.css";
import phone from "../image/phone.png";
import email from "../image/email.png";

function ContactUs() {
  return (
    <div className={Class.display}>
      <div className={Class.flex}>
        <OurService src={phone} heading={"1800-700-266"} />
        <OurService src={email} heading={"Cs@Ab.Com"} />
      </div>
    </div>
  );
}

export default ContactUs;
