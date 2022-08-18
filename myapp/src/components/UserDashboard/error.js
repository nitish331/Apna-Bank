import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Class from "./errors.module.css";

function Errors(props) {
  const ctx = useContext(AuthContext);
  const navigate = useHistory();
  const data = props.userdata[0];
  const userId = props.userdata[1];
  const date = new Date();
  const day = date.toDateString();
  function LogoutHandler(e) {
    e.preventDefault();
    fetch(
      `https://apnabank-c8f12-default-rtdb.firebaseio.com/login/${userId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((result) => result)
      .catch((err) => alert("something went wrong"));
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyAfHsmZwzaNWIvOn85brwwqdh3PcjbqdIY",
      {
        method: "POST",
        body: JSON.stringify({ idToken: ctx.token }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("something went wrong");
          return res.json();
        }
      })
      .then((result) => {
        ctx.logout();
        navigate.replace("/");
      })
      .catch((err) => alert("something went wrong"));
    navigate.replace("/");
  }
  return (
    <div>
      <h1 className={Class.heading}>WELCOME SIR!</h1>
      <div className={Class.display}>
        <p>YOU LOGGED on {day}</p>
        <div>
          <NavLink
            onClick={LogoutHandler}
            activeClassName={Class.active}
            className={Class.link}
            to="#"
          >
            Logout
          </NavLink>
        </div>
      </div>
      <div className={Class.card}>
        <h1 className={Class.header}>
          Your Account Has Not Been Verified Due To: {data.error}
        </h1>
        <h1 className={Class.header}>
          LOGOUT FROM HERE AND RE SUBMIT YOUR DOCUMENTS FOR CREATING AN ACCOUNT
          OR CONTACT US
        </h1>
      </div>
    </div>
  );
}

export default Errors;
