import React from "react";
import Class from "./Input2.module.css";
import useFile from "./FileHandler";
import { useHistory, useParams } from "react-router-dom";

function Input2(props) {
  const { FileHandler: FileHandler1, url: url1 } = useFile();
  const { FileHandler: FileHandler2, url: url2 } = useFile();
  const { FileHandler: FileHandler3, url: url3 } = useFile();
  const userId = useParams();
  const navigate = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    const Id = userId.userId.slice(1);

    if (url1.trim() !== "" && url2.trim() !== "" && url3.trim() !== "") {
      const picData = { AadharFront: url1, AadharBack: url2, Pan: url3 };
      props.picHandler(picData);
    }

    navigate.push(`/submitfiles:${Id}/SetPassword`);
  };
  return (
    <div className={Class.card}>
      <form onSubmit={submitHandler}>
        <div className={Class.flex}>
          <div>
            <label htmlFor="img">UPLOAD YOUR AADHAR FRONT IMAGE</label>
            <input onChange={FileHandler1} id="img" type="file" required />
          </div>
          <div>
            <label htmlFor="back-img">UPLOAD YOUR AADHAR BACK IMAGE</label>
            <input
              id="back-img"
              type="file"
              onChange={FileHandler2}
              width="2rem"
              height="2rem"
              required
            />
          </div>
          <div>
            <label htmlFor="pan-front">UPLOAD YOUR PAN CARD IMAGE</label>
            <input onChange={FileHandler3} type="file" required />
          </div>
        </div>
        <div>
          <button onClick={submitHandler} type="submit" className={Class.btn}>
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input2;
