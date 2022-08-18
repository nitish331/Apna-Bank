import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Class from "./Loginform.module.css";
function Loginform(props) {
  const ctx = useContext(AuthContext);
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const navigate = useHistory();
  function SubmitHandler(e) {
    e.preventDefault();
    const Password =
      inputPasswordRef.current.value.length == "6"
        ? inputPasswordRef.current.value
        : null;
    const Email = inputEmailRef.current.value;
    if (Password && Email) {
      props.Handler(Email, Password);
    } else {
      alert("INVALID INPUT, PLEASE CHECK YOUR INPUTS AGAIN");
    }
  }
  function passwordHandler(e) {
    e.preventDefault();
    const Password =
      inputPasswordRef.current.value.length == "6"
        ? inputPasswordRef.current.value
        : null;
    const Email = inputEmailRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfHsmZwzaNWIvOn85brwwqdh3PcjbqdIY",
      {
        method: "POST",
        body: JSON.stringify({
          email: Email,
          password: Password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.error) {
          return alert(result.error.message);
        }
        const { email, idToken } = result;
        ctx.login(idToken, email);
        if (email === "cs.apnabank@gmail.com") {
          navigate.replace(`/admin/login${idToken}`);
        } else {
          navigate.replace(`/login${email}/user-dashboard`);
        }
      })
      .catch((err) => alert(err.msg));
  }
  return (
    <div className={Class.card}>
      <form onSubmit={props.isLogin ? passwordHandler : SubmitHandler}>
        <div>
          <label htmlFor="password">ENTER YOUR EMAIL</label>
          <input ref={inputEmailRef} id="password" type="email" required />
        </div>
        <div>
          <label htmlFor="pass">ENTER YOUR 6 DIGIT PASSWORD</label>
          <input ref={inputPasswordRef} id="pass" type="number" required />
        </div>
        <button type="submit">{props.button}</button>
      </form>
    </div>
  );
}

export default Loginform;
