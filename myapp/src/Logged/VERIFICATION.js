import React, { useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Class from "./VERIFICATION.module.css";

function Verification(props) {
  const ctx = useContext(AuthContext);
  const navigate = useHistory();
  const location = navigate.location.pathname;
  const [userData, setUserData] = useState([]);
  const users = [];
  useEffect(() => {
    function FetchUsers() {
      fetch("https://apnabank-c8f12-default-rtdb.firebaseio.com/users.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data) {
            Object.values(data).forEach((p) => {
              users.push(Object.values(p));
            });
            setUserData(users);
          } else {
            setUserData([]);
          }
        })
        .catch((err) => alert("something went wrong"));
    }

    FetchUsers();
    console.log(userData);
    const interval = setInterval(() => {
      FetchUsers();
    }, 3600000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const currentDate = new Date();
  const day = currentDate.toDateString();
  function LogoutHandler(e) {
    e.preventDefault();
    ctx.logout();
    navigate.replace("/");
  }
  return (
    <div>
      <h1 className={Class.heading}>WELCOME SIR!</h1>
      <div className={Class.displayNav}>
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
      {userData.length > 0 ? (
        userData.map((data) => {
          let [p] = data;
          return (
            <div key={p.userdata.ID} className={Class.card}>
              <div className={Class.display}>
                <p className={Class.details}>
                  FirstNAME: {p.userdata.firstName}
                </p>
                <p className={Class.details}>LastNAME: {p.userdata.lastName}</p>
                <p className={Class.details}>
                  MiddleNAME: {p.userdata.middleName}
                </p>
              </div>
              <div className={Class.display}>
                <p className={Class.details}>
                  FatherName: {p.userdata.FatherName}
                </p>
                <p className={Class.details}>
                  MotherName: {p.userdata.MotherName}
                </p>
              </div>
              <div className={Class.display}>
                <p className={Class.details}>
                  Aadhar Number: {p.userdata.Aadhar}
                </p>
                <p className={Class.details}>Date Of Birth: {p.userdata.DOB}</p>
                <p className={Class.details}>Pan Number: {p.userdata.Pan}</p>
              </div>
              <form>
                <button
                  key={p.userdata.ID}
                  className={Class.button}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate.push(`${location}/${p.userdata.ID}/details`);
                  }}
                >
                  VIEW DETAILS
                </button>
              </form>
            </div>
          );
        })
      ) : (
        <h1 className={Class.heading}>NO REQUEST FOUND</h1>
      )}
    </div>
  );
}
export default Verification;
