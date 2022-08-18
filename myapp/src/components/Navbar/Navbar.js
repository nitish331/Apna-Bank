import React, { useState } from "react";
import Class from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isdisplay, setisdisplay] = useState(false);
  const iconHandler = (event) => {
    if (!isdisplay) {
      setisdisplay(true);
    } else {
      setisdisplay(false);
    }
  };
  const changestate = () => {
    if (window.outerWidth >= 393) {
      setisdisplay(true);
    }
  };

  return (
    <div className={Class.flexContainer}>
      <div className={Class.flex}>
        <h2 className={Class.heading}>Apna Bank</h2>

        {isdisplay || (
          <div className={Class.links}>
            <Link to="/">Home</Link>
            <Link to="/login">login</Link>
            <Link to="/createaccount">create account</Link>
            <Link to="/services">our services</Link>
            <Link to="/help">help</Link>
            <Link to="/invest">invest</Link>
          </div>
        )}

        <div className={Class.link}>
          <Link to="/">Home</Link>
          <Link to="/login">login</Link>
          <Link to="/createaccount">create account</Link>
          <Link to="/services">our services</Link>
          <Link to="/help">help</Link>
          <Link to="/invest">invest</Link>
        </div>
      </div>
      <div onBlur={changestate} className={Class.icon}>
        <ion-icon
          onClick={iconHandler}
          name={isdisplay ? "menu" : "close"}
        ></ion-icon>
      </div>
    </div>
  );
}

export default Navbar;
