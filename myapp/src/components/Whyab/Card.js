import React from "react";
import Class from "./Card.module.css";

function Card(props) {
  return (
    <div>
      <div className={Class.card}>
        <div>
          <img
            className={Class.image}
            src={props.src}
            alt="APNA BANK SECURITY"
          />
        </div>
        <div>
          <p className={Class.head}>{props.head}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
