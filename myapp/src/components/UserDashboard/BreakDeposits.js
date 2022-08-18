import React, { useRef } from "react";
import Class from "./BreakDeposits.module.css";

function BreakDeposits(props) {
  const DepositNo = useRef();
  const data = props.userdata[0];
  function depositBreaker(e) {
    e.preventDefault();
    const accountNo = +DepositNo.current.value;
    const Depositdata = data.accounts.filter((p) => {
      if (p.type === "deposit") {
        return p.accountNo === accountNo;
      }
    });
    if (!Depositdata.length > 0) {
      return alert("please enter a valid account number");
    }
    const updatedData = data.accounts.filter((p) => {
      return p.accountNo !== accountNo;
    });
    const date = new Date().toISOString();
    data.accounts = updatedData;
    data.movements.push(+Depositdata[0].Balance);
    data.transaction.push({
      type: "DEPOSIT BREAKED",
      amount: +Depositdata[0].Balance,
      createdAt: date,
    });
    props.saveUserData([data, props.userdata[1]]);
    DepositNo.current.value = "";
    return alert("DEPOSIT BREAKED SUCCESFULLY");
  }
  return (
    <div>
      <div className={Class.card}>
        <form>
          <div>
            <label className={Class.label} id="Password">
              ENTER THE DEPOSIT ACCOUNT NUMBER
            </label>
            <input
              ref={DepositNo}
              className={Class.input}
              type={"text"}
              htmlFor="Password"
            />
          </div>
          <button onClick={depositBreaker} type="submit">
            BREAD DEPOSIT
          </button>
        </form>
      </div>
      <div>
        <h1 className={Class.heading}>SOME POINTS YOU SHOULD REMEMBER</h1>
        <div>
          <ul>
            <li className={Class.point}>
              IF YOU BREAK THE DEPOSIT THEN YOU WILL LOSE THE INTEREST ON THAT
              DEPOSIT
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BreakDeposits;
