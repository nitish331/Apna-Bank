import React from "react";
import classes from "./Starterbox.module.css";

function Starterbox(props) {
  return (
    <>
      <div className={classes.flexbox}>
        <div>
          {props.image || (
            <img
              className={classes.image}
              src={props.src}
              alt="HOW TO GET STARTED"
            />
          )}
          {props.image && <p className={classes.parah}>{props.discription}</p>}
        </div>
        <div>
          {props.image && (
            <img
              className={classes.image}
              src={props.src}
              alt="HOW TO GET STARTED"
            />
          )}

          {props.image || <p className={classes.parah}>{props.discription}</p>}
        </div>
      </div>
    </>
  );
}
export default Starterbox;
