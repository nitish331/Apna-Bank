import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Loginform from "../Login/Loginform";

function SetPassword(props) {
  const userId = useParams();
  const Id = userId.userId.slice(1);
  const navigate = useHistory();

  function Authenticate(Email, Password) {
    if (
      (Number.isInteger(Password) && Password.length === 6,
      Number(Password) > 0)
    ) {
      props.PasswordHandler({ Email, Password });
      navigate.push(`/accountOpened:${Id}`);
    } else {
      alert("please enter a valid password of 6-digit long");
    }
  }
  return (
    <>
      <div>
        <Loginform
          isLogin={false}
          button={"CREATE PASSWORD"}
          Handler={Authenticate}
        />
      </div>
    </>
  );
}
export default SetPassword;
