import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footerdiv.module.css";

function Footerdiv(props) {
  return (
    <div className={styles.footerbox}>
      <ul className={styles.footerdiv}>
        <li className={styles.footerlist}>
          <Link className={styles.link} to="#">
            {props.value1}
          </Link>
        </li>
        <li className={styles.footerlist}>
          <Link className={styles.link} to="#">
            {props.value2}
          </Link>
        </li>
        <li className={styles.footerlist}>
          <Link className={styles.link} to="#">
            {props.value3}
          </Link>
        </li>
        <li className={styles.footerlist}>
          <Link className={styles.link} to="#">
            {props.value4}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footerdiv;
