import React, { useRef, useState } from "react";
import Class from "./DebitCard.module.css";

function DebitCard(props) {
  const data = props.userdata[0];
  const InputRef = useRef();
  const [showCVV, setshowCVV] = useState(false);
  function DataHandler(e) {
    e.preventDefault();
    const Password = InputRef.current.value;
    if (Password.trim() === "") {
      return alert("PLEASE ENTER A VALID PASSWORD");
    }
    if (data.profilePassword !== Password) {
      return alert("PASSWORD DO NOT MATCH");
    }
    setshowCVV(true);
  }
  return (
    <div>
      <div className={Class.card}>
        <div className={Class.display}>
          <h1 className={Class.heading}>APNA BANK</h1>
          <h1 className={Class.name}>{data.name}</h1>
        </div>
        <div>
          <h1 className={Class.number}>CARD NUMBER: {data.debitCard.CardNo}</h1>
          {showCVV ? (
            <h1 className={Class.number}>CVV NUMBER: {data.debitCard.CVV}</h1>
          ) : null}
        </div>
      </div>
      <div className={Class.FormCard}>
        <form className={Class.form}>
          <label className={Class.label}>
            PLEASE ENTER THE PROFILE PASSWORD TO GET CVV
          </label>
          <input ref={InputRef} className={Class.input} type={"text"} />
          <div>
            <button
              onClick={DataHandler}
              className={Class.button}
              type={"submit"}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DebitCard;
