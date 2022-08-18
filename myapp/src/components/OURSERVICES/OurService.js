import React from "react";
import Class from "./OurService.module.css";

function OurService(props) {
  return (
    <div className={Class.container}>
      <div className={Class.imagecontainer}>
        <img className={Class.image} src={props.src} alt="images" />
      </div>
      <h1>{props.heading}</h1>
    </div>
  );
}

export default OurService;
