import React from "react";
import OurService from "./OurService";
import creditCart from "../image/creditCard.png";
import Banking from "../image/internetBanking.png";
import CallCenter from "../image/CALLCENTERS.png";
import mf from "../image/MUTUALFUNDS.png";
import safe from "../image/safety.png";
import stocks from "../image/stocks.png";
import invoice from "../image/invoice.png";
import bonds from "../image/bonds.png";
import fd from "../image/fd.png";
import expert from "../image/expert.png";
import buy from "../image/buy.png";
import shop from "../image/shop.png";
import money from "../image/moneytransfer.png";
import Footer from "../Footer/Footer";
import Class from "./OurServiceContainer.module.css";

function OurServiceContainer() {
  return (
    <>
      <h1 className={Class.h1}>LET'S TAKE A STEP FURTHER WITH APNA BANK </h1>
      <div className={Class.gridContainer}>
        <OurService
          src={creditCart}
          heading={"BEST AND AFFORDABLE CREDIT CARDS"}
        />
        <OurService src={Banking} heading={"NOW BANK AT YOUR HOME"} />
        <OurService
          src={CallCenter}
          heading={"DEDICATED RELATIONSHIP MANAGERS"}
        />
        <OurService src={safe} heading={"SAFETY FIRST"} />
        <OurService src={stocks} heading={"INVEST FOR YOUR FUTURE"} />
        <OurService src={mf} heading={"MUTUAL FUNDS"} />
        <OurService src={invoice} heading={"INVOICE DISCOUNTING"} />
        <OurService src={bonds} heading={"INVEST IN BONDS"} />
        <OurService src={fd} heading={"BOOK AN FD'S NOW"} />
        <OurService src={shop} heading={"SHOP NOW WITH EFFECTIVE PRICE"} />
        <OurService src={money} heading={"INTERNATIONAL MONEY TRANSFER"} />
        <OurService src={buy} heading={"BUY NOW PAY LATER"} />
        <OurService src={expert} heading={"GET OUR EXPERT ADVICE"} />
      </div>
      <Footer />
    </>
  );
}

export default OurServiceContainer;
