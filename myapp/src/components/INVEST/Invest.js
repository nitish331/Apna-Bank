import React from "react";
import OurService from "../OURSERVICES/OurService";
import mf from "../image/MF.jpg";
import bonds from "../image/BONDS.jpg";
import goals from "../image/SETGOALS.jpg";
import email from "../image/email.png";
import phone from "../image/phone.png";
import Class from "./Invest.module.css";
function Invest() {
  function InvestHandler(e) {
    e.preventDefault();
  }
  return (
    <div className={Class.container}>
      <h1 className={Class.head}>INVEST NOW FOR YOUR FUTURE</h1>
      <h1 className={Class.headSecondary}>SAVE MONEY, SAVE FUTURE!</h1>
      <p className={Class.parah}>
        Investing in your future means making some sacrifices in the present to
        reap rewards later. It means investing your time and money in something
        that might not give you immediate return, but which could give you
        tremendous value later. It also means preparing for the uncertainties of
        the future.
      </p>
      <h3 className={Class.thirdHead}>
        WE HAVE DIFFERENT SERVICES FOR OUR CUSTOMERS IN WHICH THEY CAN INVEST
        FOR THEIR FUTURE OR FOR THEIR DIFFERENT GOALS . NOW A DAYS PEOPLES ARE
        UNDERSTANDING THE POWER OF INVESTMENTS. YOUR ONE STEP CAN SECURE YOUR
        CHILD FUTURE
      </h3>
      <div className={Class.flexContainer}>
        <OurService src={goals} heading={"SET YOUR GOALS FOR YOUR FUTURE"} />
        <OurService
          src={bonds}
          heading={
            "INVEST IN BONDS MARKET TO GET HIGHER ATTRACTIVE INTEREST RATES THAN FD'S"
          }
        />
        <OurService src={mf} heading={"INVEST IN MUTUAL FUNDS"} />
      </div>
      <h1 className={Class.head}>
        WANT TO CLEAR YOUR DOUBTS, CALL OUR EXPERT TEAM NOW!
      </h1>
      <div className={Class.flexContainer}>
        <OurService src={phone} heading={"1800-700-266"} />
        <OurService src={email} heading={"Cs@Ab.Com"} />
      </div>
      <h1 className={Class.head}>
        LET TAKE A STEP FURTHER TO COMPLETE YOUR GOALS...
      </h1>
      <button className={Class.button} onClick={InvestHandler}>
        INVEST NOW
      </button>
    </div>
  );
}

export default Invest;
