import React from "react";
import Style from "./Accounts.module.css";
import { Link } from "react-router-dom";

function Accounts() {
  return (
    <>
      <h1 className={Style.heading}>
        <span>our plans</span>
      </h1>
      <div className={Style.fullFlex}>
        <div className={Style.flex}>
          <h2>basic plan</h2>
          <ul>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                intrest <strong>1.1%</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                checkbook <strong>20 leaves</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                <strong>Upi</strong> Services
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                Debit Card<strong>$25000 Limit</strong>
              </span>
            </li>
            <li>
              <ion-icon name="close"></ion-icon>
              <span>
                Credit <strong>card</strong>
              </span>
            </li>
            <li>
              <ion-icon name="close"></ion-icon>
              <span>
                personal Loans<strong>@7.5%</strong>
              </span>
            </li>
            <li>
              <ion-icon name="close"></ion-icon>
              <span>
                Relationship <strong>Manager</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                demat account <strong>$80</strong>
              </span>
            </li>
          </ul>
          <Link to="/">$10</Link>
        </div>
        <div className={Style.flex}>
          <h2>Regular plan</h2>
          <ul>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                intrest <strong>1.9%</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                checkbook <strong>50 leaves</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                <strong>Upi</strong> Services
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                Debit Card<strong>$50000 Limit</strong>
              </span>
            </li>
            <li>
              <ion-icon name="close"></ion-icon>
              <span>
                Credit <strong>card</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                personal Loans<strong>@7.5%</strong>
              </span>
            </li>
            <li>
              <ion-icon name="close"></ion-icon>
              <span>
                Relationship <strong>Manager</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                demat account <strong>$50</strong>
              </span>
            </li>
          </ul>
          <Link to="/">$15</Link>
        </div>
        <div className={Style.flex}>
          <h2>premium plan</h2>
          <ul>
            <li>
              <ion-icon className={Style.icon} name="checkmark"></ion-icon>
              <span>
                intrest <strong>2.5%</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                checkbook <strong>50 leaves</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                <strong>Upi</strong> Services
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                Debit Card<strong>$75000 Limit</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                Credit <strong>card</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                personal Loans<strong>@6.5%</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                Relationship <strong>Manager</strong>
              </span>
            </li>
            <li>
              <ion-icon name="checkmark"></ion-icon>
              <span>
                demat account <strong>Free</strong>
              </span>
            </li>
          </ul>
          <Link to="/">$20</Link>
        </div>
      </div>
    </>
  );
}

export default Accounts;
