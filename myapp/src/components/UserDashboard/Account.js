import React from "react";
import Class from "./Account.module.css";

function Account(props) {
  const data = props.userdata[0];
  const accounts = data.accounts;
  return (
    <div className={Class.card}>
      <table className={Class.table}>
        <tr>
          <td className={Class.accountNumber}>ACCOUNT NUMBER</td>
          <td className={Class.type}>TYPE</td>
          <td>OPENING DATE</td>
          <td>MATURITY DATE</td>
          <td>TOTAL BALANCE</td>
        </tr>
        {accounts.map((p) => {
          if (p.type === "saving") {
            p.Balance = data.movements.reduce((total, num) => {
              return total + Number(num);
            }, 0);

            return (
              <tr>
                <td className={Class.accountNumber}>{p.accountNo}</td>
                <td className={Class.type}>{p.type}</td>
                <td>---</td>
                <td>---</td>
                <td>{p.Balance}</td>
              </tr>
            );
          } else {
            const current = new Date();
            const openingDate = new Date(p.createdOn);
            const maturityDate = new Date(p.MaturityDate);
            if (current.getTime() > maturityDate.getTime()) {
              const TotalPrincipal = p.Balance;
              const totalInterest = TotalPrincipal * 0.1;
              const total = TotalPrincipal + totalInterest;
              data.movements.push(+total);
              data.transaction.push({
                type: "DEPOSIT MATURED",
                amount: +total,
                createdAt: current,
              });
              const updatedData = data.accounts.filter((a) => {
                return a.accountNo !== p.accountNo;
              });
              data.accounts = updatedData;
              props.saveUserData([data, props.userdata[1]]);
            }
            const opening = `${openingDate.getDate()}/${
              openingDate.getMonth() + 1
            }/${openingDate.getFullYear()}`;
            const maturity = `${maturityDate.getDate()}/${
              maturityDate.getMonth() + 1
            }/${maturityDate.getFullYear()}`;
            return (
              <tr>
                <td className={Class.accountNumber}>{p.accountNo}</td>
                <td className={Class.type}>DEPOSIT</td>
                <td>{opening}</td>
                <td>{maturity}</td>
                <td>{p.Balance}</td>
              </tr>
            );
          }
        })}
      </table>
    </div>
  );
}

export default Account;
