import React, { useState } from "react";
import Class from "./Faqs.module.css";

function Faqs(props) {
  const [showAnswer, setshowAnswer] = useState(false);
  function answerHandler() {
    setshowAnswer(!showAnswer);
  }

  return (
    <div>
      <div onClick={answerHandler} className={Class.question}>
        <h3>{props.question}</h3>
      </div>
      {showAnswer && (
        <div className={Class.answer}>
          <p>{props.answer}</p>
        </div>
      )}
    </div>
  );
}

export default Faqs;
