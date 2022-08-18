import React, { useContext, useRef } from "react";
import AuthContext from "../../Context/AuthContext";
import check from "../image/check.png";
import Class from "./Profile.module.css";

function Profile(props) {
  const ctx = useContext(AuthContext);
  const data = props.userdata[0];
  const PasswordRef = useRef();
  function Reset(e) {
    e.preventDefault();
    const NewPassword = PasswordRef.current.value;
    if (
      (NewPassword.length !== 6 ||
        NewPassword.trim() === " " ||
        !Number.isInteger(+NewPassword),
      Number(NewPassword) < 0)
    ) {
      return alert("Please enter a valid 6-Digit Password");
    }
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAfHsmZwzaNWIvOn85brwwqdh3PcjbqdIY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: ctx.token,
          password: NewPassword,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        ctx.login(result.idToken, result.email);
        data.password = NewPassword;
        props.saveUserData([data, props.userdata[1]]);
        PasswordRef.current.value = "";
        alert("PASSWORD RESETED SUCCESFULLY");
      })
      .catch((err) => alert(err));
  }
  return (
    <div className={Class.card}>
      <div className={Class.display}>
        <h1>YOUR NAME: {data.name}</h1>
        <img src={check} alt={"verified"} />
      </div>
      <div className={Class.display}>
        <h1>YOUR EMAIL: {data.email}</h1>
        <img src={check} alt={"verified"} />
      </div>
      <form className={Class.form}>
        <div>
          <label className={Class.label} id="Password">
            RESET YOUR PASSWORD
          </label>
          <input
            ref={PasswordRef}
            className={Class.input}
            type={"number"}
            htmlFor="Password"
            minLength="6"
          />
        </div>
        <button className={Class.button} onClick={Reset} type="submit">
          Reset
        </button>
      </form>
    </div>
  );
}

export default Profile;
