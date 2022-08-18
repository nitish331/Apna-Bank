import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Class from "./DashboardList.module.css";

function DashboardList(props) {
  const [active, setactive] = useState("ACCOUNTS");
  props.state(active);
  function ACCOUNTS(e) {
    e.preventDefault();
    setactive("ACCOUNTS");
  }
  function TRANSACTIONS(e) {
    e.preventDefault();
    setactive("TRANSACTIONS");
  }
  function NEWDEPOSITS(e) {
    e.preventDefault();
    setactive("NEWDEPOSITS");
  }
  function BREAKDEPOSITS(e) {
    e.preventDefault();
    setactive("BREAKDEPOSITS");
  }
  function SENDMONEY(e) {
    e.preventDefault();
    setactive("SENDMONEY");
  }
  function CHAT(e) {
    e.preventDefault();
    setactive("CONTACT");
  }
  function PROFILEPASSWORD(e) {
    e.preventDefault();
    setactive("PROFILEPASSWORD");
  }
  function PROFILE(e) {
    e.preventDefault();
    setactive("PROFILE");
  }
  function DEBITCARD(e) {
    e.preventDefault();
    setactive("DEBITCARD");
  }
  return (
    <div>
      <div className={Class.card}>
        <ul>
          <li onClick={ACCOUNTS}>
            <NavLink
              activeClassName={active === "ACCOUNTS" ? Class.active : null}
              className={Class.Link}
              to="#"
            >
              ACCOUNTS
            </NavLink>
          </li>
          <li onClick={NEWDEPOSITS}>
            <NavLink
              activeClassName={active === "NEWDEPOSITS" ? Class.active : null}
              className={Class.Link}
              to="#"
            >
              CREATE NEW DEPOSITS
            </NavLink>
          </li>
          <li onClick={PROFILE}>
            <NavLink
              activeClassName={active === "PROFILE" ? Class.active : null}
              className={Class.Link}
              to="#"
            >
              YOUR PROFILE
            </NavLink>
          </li>
          <li onClick={BREAKDEPOSITS}>
            <NavLink
              activeClassName={active === "BREAKDEPOSITS" ? Class.active : null}
              className={Class.Link}
              to="#"
            >
              BREAK DEPOSITS
            </NavLink>
          </li>
          <li onClick={TRANSACTIONS}>
            <NavLink
              activeClassName={active === "TRANSACTIONS" ? Class.active : null}
              className={Class.Link}
              to="#"
            >
              TRANSACTIONS
            </NavLink>
          </li>
          <li onClick={SENDMONEY}>
            <NavLink
              activeClassName={active === "SENDMONEY" ? Class.active : null}
              className={Class.Link}
              to="#"
            >
              SEND MONEY
            </NavLink>
          </li>
          <li onClick={PROFILEPASSWORD}>
            <NavLink
              activeClassName={
                active === "PROFILEPASSWORD" ? Class.active : null
              }
              className={Class.Link}
              to="#"
            >
              PROFILE PASSWORD
            </NavLink>
          </li>
          <li onClick={DEBITCARD}>
            <NavLink
              activeClassName={active === "DEBITCARD" ? Class.active : null}
              className={Class.Link}
              to="#"
            >
              YOUR DEBIT CARD
            </NavLink>
          </li>
          <li onClick={CHAT}>
            <NavLink
              activeClassName={active === "CONTACT" ? Class.active : null}
              className={Class.Link}
              to="#"
            >
              CONTACT WITH US
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default DashboardList;
