import React from "react";
import Card from "./Card";
import icon1 from "../image/icon1.png";
import icon2 from "../image/icon2.png";
import icon3 from "../image/icon3.png";
import icon4 from "../image/icon4.png";
import icon5 from "../image/icon5.png";
import icon6 from "../image/icons6.png";
import Class from "./Whyab.module.css";

function Whyab() {
  return (
    <div>
      <div>
        <h1 className={Class.heading}>CHOOSE BEYOND YOUR LIMITS</h1>
      </div>
      <div className={Class.grid}>
        <Card src={icon1} head={"DIGITAL INDIA"} />
        <Card src={icon2} head={"FAST UPI PAYMENTS"} />
        <Card src={icon3} head={"INVEST NOW"} />
        <Card src={icon4} head={"24*7 SUPPORT"} />
        <Card src={icon5} head={"BEST SERVICES"} />
        <Card src={icon6} head={"SUPER SECURE"} />
      </div>
    </div>
  );
}

export default Whyab;
