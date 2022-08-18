import React from "react";
import Class from "./invalid.module.css";

function INVALID() {
  return (
    <div>
      <div className={Class.display}>
        <h1 className={Class.h1}>SOMETHING WENT WRONG!</h1>
        <h1 className={Class.h1}>PAGE NOT FOUND</h1>
      </div>
    </div>
  );
}

export default INVALID;
