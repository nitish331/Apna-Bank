import React, { useRef } from "react";
import Class from "./ProfilePassword.module.css";

function ProfilePassword(props) {
  const userPassword = useRef();
  const userConfirmPassword = useRef();
  const oldPassword = useRef();
  const newPassword = useRef();
  const data = props.userdata[0];
  function PasswordHandler(e) {
    e.preventDefault();
    const ProfilePassword = userPassword.current.value;
    const confirmPassword = userConfirmPassword.current.value;
    if (
      ProfilePassword.trim() !== " " &&
      confirmPassword.trim() !== " " &&
      ProfilePassword.length > 6 &&
      ProfilePassword === confirmPassword
    ) {
      data.profilePassword = confirmPassword;
      props.saveUserData([data, props.userdata[1]]);
      alert("PROFILE PASSWORD CREATED SUCCESFULLY");
      userConfirmPassword.current.value = "";
      userPassword.current.value = "";
    } else {
      alert(
        "PLEASE ENTER A VALID PROFILE PASSWORD: KEEP THE FOLLOWING POINTS IN MIND: PASSWORD SHOULD CONTAINS AT LEAST 7 CHARACTERS AND CONFIRM PASSWORD SHOULD BE EQUAL TO THE PROFILE PASSWORD"
      );
    }
  }
  const RESETHandler = (e) => {
    e.preventDefault();
    const oldpassword = oldPassword.current.value;
    const newpassword = newPassword.current.value;
    if (oldpassword !== data.profilePassword) {
      return alert("PLEASE ENTER THE VALID OLD PASSWORD");
    }
    if (oldpassword === newpassword) {
      return alert("PLEASE ENTER A VALID NEW PASSWORD");
    }
    if (oldpassword === data.profilePassword && newpassword.length > 6) {
      data.profilePassword = newpassword;
      props.saveUserData([data, props.userdata[1]]);
      oldPassword.current.value = "";
      newPassword.current.value = "";
      return alert("PASSWORD RESSETED SUCCESSFULLY");
    }
    alert(
      "PLEASE ENTER A VALID PROFILE PASSWORD: KEEP THE FOLLOWING POINTS IN MIND: PASSWORD SHOULD CONTAINS AT LEAST 7 CHARACTERS AND New PASSWORD SHOULD Not BE EQUAL TO THE Old PASSWORD"
    );
  };

  return data.profilePassword.length === 0 ? (
    <div>
      <div className={Class.card}>
        <form>
          <div>
            <label className={Class.label} id="Password">
              ENTER YOUR PROFILE PASSWORD
            </label>
            <input
              className={Class.input}
              type={"text"}
              htmlFor="Password"
              minLength="8"
              ref={userPassword}
            />
          </div>
          <div>
            <label className={Class.label} id="confirm">
              CONFIRM YOUR PASSWORD
            </label>
            <input
              className={Class.input}
              htmlFor="confirm"
              type={"text"}
              minLength="8"
              ref={userConfirmPassword}
            />
          </div>
          <button onClick={PasswordHandler} type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div>
      <div className={Class.card}>
        <form>
          <div>
            <label className={Class.label} id="Password">
              ENTER YOUR OLD PROFILE PASSWORD
            </label>
            <input
              className={Class.input}
              type={"text"}
              htmlFor="Password"
              minLength="8"
              ref={oldPassword}
            />
          </div>
          <div>
            <label className={Class.label} id="confirm">
              ENTER YOUR NEW PASSWORD
            </label>
            <input
              className={Class.input}
              htmlFor="confirm"
              type={"text"}
              minLength="8"
              ref={newPassword}
            />
          </div>
          <button onClick={RESETHandler} type="submit">
            RESET PASSWORD
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePassword;
