import React from "react";
import Class from "./transactions.module.css";

function transactions(props) {
  const data = props.userdata[0];
  return (
    <div>
      <div className={Class.card}>
        <table className={Class.table}>
          <tr>
            <td className={Class.accountNumber}>TYPE</td>
            <td className={Class.type}>CreatedAt</td>
            <td>TIME</td>
            <td>AMOUNT</td>
          </tr>
          {data.transaction.map((p) => {
            const date = new Date(p.createdAt);
            let hours = date.getHours();
            hours = hours % 12;
            hours = hours ? 12 : hours;
            const CreatedAt = `${date.getDay()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`;
            const Time = `${hours}:${date.getMinutes()}:${date.getSeconds()}`;
            return (
              <tr>
                <td className={Class.accountNumber}>{p.type}</td>
                <td className={Class.type}>{CreatedAt}</td>
                <td>{Time}</td>
                <td>{p.amount}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default transactions;
