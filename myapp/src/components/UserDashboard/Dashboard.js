import React, { useContext, useEffect, useState } from "react";
import DashboardList from "./DashboardList";
import Class from "./Dashboard.module.css";
import ProfilePassword from "./ProfilePassword";
import NewDeposit from "./NewDeposit";
import { NavLink, useHistory, useParams } from "react-router-dom";
import ContactUs from "./ContactUs";
import BreakDeposits from "./BreakDeposits";
import SendMoney from "./SendMoney";
import Account from "./Account";
import Transac from "./transactions";
import Profile from "./Profile";
import AuthContext from "../../Context/AuthContext";
import DebitCard from "./DebitCard";
import Error from "./error";

function Dashboard() {
  const ctx = useContext(AuthContext);
  const [activeState, setactiveState] = useState("ACCOUNTS");
  const [userData, setUserData] = useState(false);
  const navigate = useHistory();
  function active(state) {
    setactiveState(state);
  }
  const currentDate = new Date();
  const day = currentDate.toDateString();
  const param = useParams();
  const email = param.token;
  function saveData(data) {
    setUserData(data);
  }
  function LogoutHandler(e) {
    e.preventDefault();
    setTimeout(() => {
      fetch(
        `https://apnabank-c8f12-default-rtdb.firebaseio.com/login/${userData[1]}.json`,
        {
          method: "PUT",
          body: JSON.stringify(userData[0]),
        }
      )
        .then((res) => res.json())
        .then((result) => result)
        .catch((err) => alert("something went wrong"));
      ctx.logout();
      navigate.replace("/");
    }, 1000);
  }
  useEffect(() => {
    function FetchUsers() {
      fetch(`https://apnabank-c8f12-default-rtdb.firebaseio.com/login/.json`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const id = Object.keys(data);
          Object.values(data).map((p) => {
            if (p.email !== email) {
              return;
            }
            const userIdIndex = Object.values(data).indexOf(p);
            const userId = id[userIdIndex];

            setUserData([p, userId]);
          });
        })
        .catch((err) => alert("something went wrong"));
    }
    const logout = setTimeout(() => {
      fetch(
        `https://apnabank-c8f12-default-rtdb.firebaseio.com/login/${userData[1]}.json`,
        {
          method: "PUT",
          body: JSON.stringify(userData[0]),
        }
      )
        .then((res) => res.json())
        .then((result) => console.log(result))
        .catch((err) => alert(err));
      ctx.logout();
      navigate.replace("/");
    }, 3600000);
    FetchUsers();
    return () => {
      clearTimeout(logout);
    };
  }, []);
  return userData ? (
    userData[0].error.length > 0 ? (
      <Error userdata={userData} />
    ) : (
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
        <div>
          <div className={Class.Dash}>
            <DashboardList state={active} />
            {activeState === "PROFILEPASSWORD" && (
              <ProfilePassword saveUserData={saveData} userdata={userData} />
            )}
            {activeState === "NEWDEPOSITS" && (
              <NewDeposit userdata={userData} saveUserData={saveData} />
            )}
            {activeState === "ACCOUNTS" && (
              <Account userdata={userData} saveUserData={saveData} />
            )}
            {activeState === "CONTACT" && <ContactUs />}
            {activeState === "DEBITCARD" && <DebitCard userdata={userData} />}
            {activeState === "PROFILE" && (
              <Profile userdata={userData} saveUserData={saveData} />
            )}
            {activeState === "TRANSACTIONS" && <Transac userdata={userData} />}
            {activeState === "SENDMONEY" && (
              <SendMoney userdata={userData} saveUserData={saveData} />
            )}
            {activeState === "BREAKDEPOSITS" && (
              <BreakDeposits userdata={userData} saveUserData={saveData} />
            )}
          </div>
        </div>
      </div>
    )
  ) : (
    <h1 className={Class.heading}>LOADING DATA</h1>
  );
}

export default Dashboard;
