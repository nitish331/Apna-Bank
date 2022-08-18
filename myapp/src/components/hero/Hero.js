import React from "react";
import { Link } from "react-router-dom";
import mypic1 from "../image/bitcoin.jpg";
import mypic2 from "../image/money1.jpg";
import Classes from "./Hero.module.css";

function Hero() {
  return (
    <>
      <div className={Classes.flexContainwer}>
        <div className={Classes.heroflex}>
          <h1>APKA BANK APKE DWAR!</h1>
          <p>
            welcome to Apna bank , this is the world famous bank which has acces
            over more than 15000 branches all over the india .and we have have
            also collaborate with other countries banks to provide you seamless
            experience with international payments and services . our customer
            support expecutives are ready to help you any time anywhere. So ,
            let get started{" "}
          </p>
          <div className={Classes.button}>
            <Link to="/createaccount">create account</Link>
            <Link to="#">learn more</Link>
          </div>
        </div>
        <div className={Classes.imageContainer}>
          <img src={mypic1} alt="money" />
          <img src={mypic2} alt="money" />
        </div>
      </div>
    </>
  );
}

export default Hero;
