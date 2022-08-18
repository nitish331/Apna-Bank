import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Class from "./UserDetails.module.css";

function UserDetails() {
  const [isEmpty, setIsEmpty] = useState(false);
  const submiterror = useRef();
  const [showText, setShowText] = useState(false);
  const param = useParams();
  const navigate = useHistory();
  const userId = param.UserId;
  const [userData, setUserData] = useState([]);
  function verifiedHandler(e) {
    e.preventDefault();
    const email = userData[0].Authdata.Email;
    const date = new Date().toISOString();
    const password = userData[0].Authdata.Password;
    const accounts = [
      {
        accountNo: Math.trunc(Math.random() * 10000000),
        type: "saving",
        Balance: "100000",
      },
    ];
    const movements = ["100000"];
    const transaction = [
      { type: "CREDIT", createdAt: date, amount: Number("100000") },
    ];
    const debitCard = {
      CardNo: Math.trunc(Math.random() * 1000000),
      CVV: Math.trunc(Math.random() * 100),
    };
    const profilePassword = "";
    const firstName = userData[0].userdata.firstName;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfHsmZwzaNWIvOn85brwwqdh3PcjbqdIY",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: false,
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
        alert(result.error.message);
      })
      .catch((err) => alert("something went wrong"));
    fetch(`https://apnabank-c8f12-default-rtdb.firebaseio.com/login.json`, {
      method: "POST",
      body: JSON.stringify({
        name: firstName,
        email: email,
        password: password,
        movements: movements,
        accounts: accounts,
        transaction: transaction,
        profilePassword: profilePassword,
        debitCard: debitCard,
        error: "",
      }),
    })
      .then((res) => res.json())
      .then((result) => result)
      .catch((err) => alert("something went wrong"));
    fetch(
      `https://apnabank-c8f12-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((result) => navigate.goBack())
      .catch((err) => alert("something went wrong"));
  }
  function SubmitErrorHandler(e) {
    e.preventDefault();
    const email = userData[0].Authdata.Email;
    const password = userData[0].Authdata.Password;
    const accounts = [
      {
        accountNo: Math.trunc(Math.random() * 10000000),
        type: "saving",
        Balance: "100000",
      },
    ];
    const movements = ["100000"];
    const transaction = [];
    const debitCard = {
      CardNo: Math.trunc(Math.random() * 1000000),
      CVV: Math.trunc(Math.random() * 100),
    };
    const profilePassword = "";
    const error = submiterror.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfHsmZwzaNWIvOn85brwwqdh3PcjbqdIY",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: false,
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
        alert(result.error.message);
      })
      .catch((err) => alert("something went wrong"));
    if (error.trim() !== "") {
      fetch(`https://apnabank-c8f12-default-rtdb.firebaseio.com/login.json`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          movements: movements,
          accounts: accounts,
          transaction: transaction,
          profilePassword: profilePassword,
          debitCard: debitCard,
          error: error,
        }),
      })
        .then((res) => res.json())
        .then((result) => result)
        .catch((err) => alert("something went wrong"));
      fetch(
        `https://apnabank-c8f12-default-rtdb.firebaseio.com/users/${userId}.json`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((result) => navigate.goBack())
        .catch((err) => alert("something went wrong"));
    } else {
      setIsEmpty(true);
    }
  }
  function showtextHandler(e) {
    e.preventDefault();
    setShowText(true);
  }
  function Cancelled(e) {
    e.preventDefault();
    setShowText(false);
  }
  useEffect(() => {
    function FetchUsers() {
      fetch(
        `https://apnabank-c8f12-default-rtdb.firebaseio.com/users/${userId}.json`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUserData(Object.values(data));
        })
        .catch((err) => alert("somthing went wrong"));
    }

    FetchUsers();
  }, []);
  return (
    <div>
      {userData.length > 0 ? (
        userData.map((data) => {
          return (
            <div className={Class.background}>
              <h1 className={Class.heading}>PERSONAL DATA</h1>
              <div className={Class.display}>
                <p className={Class.detail}>
                  FirstNAME: {data.userdata.firstName}
                </p>
                <p className={Class.detail}>
                  MiddleNAME: {data.userdata.middleName}
                </p>
                <p className={Class.detail}>
                  LastNAME: {data.userdata.lastName}
                </p>
              </div>
              <div className={Class.display}>
                <p className={Class.detail}>
                  Date Of Birth: {data.userdata.DOB}
                </p>
                <p className={Class.detail}>
                  FatherName: {data.userdata.FatherName}
                </p>
                <p className={Class.detail}>
                  MotherName: {data.userdata.Mother}
                </p>
              </div>
              <div className={Class.display}>
                <p className={Class.detail}>
                  Aadhar Number: {data.userdata.Aadhar}
                </p>
                <p className={Class.detail}>Pan Number: {data.userdata.Pan}</p>
                <p className={Class.detail}>
                  Nationality: {data.userdata.Nationality}
                </p>
              </div>
              <div className={Class.display}>
                <p className={Class.detail}>
                  Occupation: {data.userdata.Occupation}
                </p>
                <p className={Class.detail}>
                  Occupation: {data.userdata.Occupation}
                </p>
                <p className={Class.detail}>
                  Wife Name:
                  {data.userdata.Wife}
                </p>
              </div>
              <div className={Class.display}>
                <p className={Class.detail}>Pin Code: {data.userdata.Pin}</p>
                <p className={Class.detail}>State: {data.userdata.State}</p>
                <p className={Class.detail}>
                  Qualification: {data.userdata.qualification}
                </p>
              </div>
              <h1 className={Class.heading}>PicData</h1>
              <div>
                <div className={Class.display}>
                  <img
                    className={Class.image}
                    src={data.PicData.AadharFront}
                    alt={"Aadhar Front"}
                  />
                  <img
                    className={Class.image}
                    src={data.PicData.AadharBack}
                    alt={"Aadhar Back"}
                  />
                </div>
                <div className={Class.display}>
                  <img
                    className={Class.image}
                    src={data.PicData.Pan}
                    alt={"Pan Card"}
                  />
                </div>
              </div>
              <h1 className={Class.heading}>AUTHENTICATION</h1>
              <div>
                <p className={Class.center}>Email: {data.Authdata.Email}</p>
              </div>
              {showText || (
                <form className={Class.display}>
                  <button
                    className={Class.button}
                    onClick={verifiedHandler}
                    type="submit"
                  >
                    VERIFY
                  </button>
                  (
                  <button
                    onClick={showtextHandler}
                    className={Class.button}
                    type="submit"
                  >
                    NOT VERIFIED
                  </button>
                  )
                </form>
              )}
              {showText && (
                <form>
                  <label className={Class.label} htmlFor="reason">
                    ENTER THE REASON FOR NOT VERIFIED
                  </label>
                  {isEmpty && (
                    <h1 className={`${Class.heading} ${Class.invalid}`}>
                      PLEASE SUBMIT AN APPROPRIATE REASON
                    </h1>
                  )}
                  <textarea
                    ref={submiterror}
                    className={Class.textarea}
                    id="reason"
                    rows={"10"}
                    cols={"20"}
                  />
                  <div className={Class.display}>
                    <button onClick={Cancelled} className={Class.button}>
                      CANCEL
                    </button>
                    <button
                      onClick={SubmitErrorHandler}
                      className={Class.button}
                      type="submit"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              )}
            </div>
          );
        })
      ) : (
        <h1 className={Class.heading}>FECTHING DATA</h1>
      )}
    </div>
  );
}

export default UserDetails;
