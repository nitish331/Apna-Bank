import React from "react";
import Card from "../Whyab/Card";
import phone from "../image/phone.png";
import email from "../image/email.png";
import Class from "./CardContainer.module.css";

function CardContainer() {
  return (
    <div className={Class.container}>
      <Card src={phone} head={"1800-700-266"} />
      <Card src={email} head={"cs@ab.com"} />
    </div>
  );
}

export default CardContainer;
