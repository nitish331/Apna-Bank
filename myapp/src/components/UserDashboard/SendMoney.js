import React, { useRef } from "react";
import Class from "./NewDeposit.module.css";

function SendMoney(props) {
  const user = props.userdata[0];
  const accountRef = useRef();
  const amountRef = useRef();
  function MoneySender(e) {
    e.preventDefault();
    const date = new Date();
    const accountNo = accountRef.current.value;
    const amount = amountRef.current.value;
    if (
      accountNo.trim() === " " ||
      amount.trim() === " " ||
      !Number.isInteger(+amount) ||
      !Number.isInteger(+accountNo)
    ) {
      return alert("INVALID INPUTS");
    }
    fetch(`https://apnabank-c8f12-default-rtdb.firebaseio.com/login/.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const id = Object.keys(data);
        const UserData = Object.values(data).filter((p) => {
          if (p.accounts[0].accountNo === accountNo) {
            const userIdIndex = Object.values(data).indexOf(p);
            const userId = id[userIdIndex];
            return [p, userId];
          }
        });
        if (UserData.length > 0) {
          UserData[0][0].movements.push(+amount);
          UserData[0][0].transaction.push({
            type: `Credited By ${user.name}`,
            amount: amount,
            createdAt: date.toISOString(),
          });
          fetch(
            `https://apnabank-c8f12-default-rtdb.firebaseio.com/login/${UserData[0][1]}.json`,
            {
              method: "PUT",
              body: JSON.stringify(UserData[0][0]),
            }
          )
            .then((response) => {
              return response.json();
            })
            .then((result) => console.log(result));
          user.transaction.push({
            type: "Money transfered",
            amount: amount,
            createdAt: date.toISOString(),
          });
          user.movements.push(-amount);
          return alert("MONEY TRANSFER SUCCESSFULLY");
        } else {
          return alert("USER NOT FOUND");
        }
      });
  }
  return (
    <div>
      <div className={Class.card}>
        <form>
          <div>
            <label className={Class.label} id="Password">
              ENTER THE ACCOUNT NUMBER
            </label>
            <input
              ref={accountRef}
              className={Class.input}
              type={"text"}
              htmlFor="Password"
            />
          </div>
          <div>
            <label className={Class.label} id="confirm">
              ENTER THE AMOUNT
            </label>
            <input
              ref={amountRef}
              className={Class.input}
              htmlFor="confirm"
              type={"text"}
            />
          </div>
          <button onClick={MoneySender} type="submit">
            CONFIRM
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendMoney;
