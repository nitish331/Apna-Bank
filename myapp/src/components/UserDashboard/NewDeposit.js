import React, { useRef } from "react";
import Class from "./NewDeposit.module.css";

function NewDeposit(props) {
  const data = props.userdata[0];
  const amountRef = useRef();
  const monthsRef = useRef();
  function depositCreater(e) {
    e.preventDefault();
    const amount = amountRef.current.value;
    const months = monthsRef.current.value;
    if (
      amount.trim() === "" ||
      months.trim() === " " ||
      !Number.isInteger(+months) ||
      !Number.isInteger(+amount) ||
      +amount <= +"10000" ||
      +months >= +"120"
    ) {
      console.log();
      return alert("INVALID INPUT");
    } else {
      const date = new Date();
      const maturity = new Date();
      maturity.setMonth(maturity.getMonth() + Number(months));
      data.movements.push(-amount);
      data.transaction.push({
        type: "New Deposit Created",
        amount: amount,
        createdAt: date.toISOString(),
      });
      data.accounts.push({
        accountNo: Math.trunc(Math.random() * 10000000),
        type: "deposit",
        Balance: amount,
        createdOn: date.toISOString(),
        MaturityDate: maturity.toISOString(),
      });
      props.saveUserData([data, props.userdata[1]]);
      amountRef.current.value = "";
      monthsRef.current.value = "";
      alert("DEPOSIT CREATED SUCCESFULLY");
    }
  }
  return (
    <div>
      <div className={Class.card}>
        <form>
          <div>
            <label className={Class.label} id="Password">
              ENTER THE AMOUNT
            </label>
            <input
              ref={amountRef}
              className={Class.input}
              type={"text"}
              htmlFor="Password"
            />
          </div>
          <div>
            <label className={Class.label} id="confirm">
              ENTER THE NUMBER OF MONTHS
            </label>
            <input
              ref={monthsRef}
              className={Class.input}
              htmlFor="confirm"
              type={"text"}
            />
          </div>
          <button onClick={depositCreater} type="submit">
            SUBMIT
          </button>
        </form>
      </div>
      <div>
        <h1 className={Class.heading}>SOME POINTS YOU SHOULD REMEMBER</h1>
        <div>
          <ul>
            <li className={Class.point}>
              AMOUNT OF FIXED DEPOSITS SHOULD BE AN INTEGER AND SHOULD GREATER
              THAN 10000
            </li>
            <li className={Class.point}>
              MONTHS SHOULD BE AN INTEGER AND NOT GREATER THAN 120
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewDeposit;
