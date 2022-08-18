import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./Input.module.css";

function Input(props) {
  const [married, setmarried] = useState(false);
  const wifeInput = (event) => {
    if (event.target.value === "yes") {
      setmarried(true);
    } else {
      setmarried(false);
    }
  };
  const navigate = useHistory();
  const firstNameInputref = useRef("");
  const LastNameInputref = useRef("");
  const MiddleNameInputref = useRef("");
  const DateInputref = useRef("");
  const PanInputref = useRef("");
  const AadharInputref = useRef("");
  const occupationref = useRef("");
  const qualificationref = useRef("");
  const FatherInputref = useRef("");
  const MotherInputref = useRef("");
  const WifeInputref = useRef("");
  const NationalityInputref = useRef("Indian");
  const StateInputref = useRef("");
  const PinInputref = useRef("");
  let userInput;
  const onSubmitHandler = (e) => {
    e.preventDefault();
    userInput = {
      firstName: firstNameInputref.current.value,
      middleName: MiddleNameInputref.current.value,
      lastName: LastNameInputref.current.value,
      DOB: DateInputref.current.value,
      Pan: PanInputref.current.value,
      Aadhar: AadharInputref.current.value,
      Occupation: occupationref.current.value,
      qualification: qualificationref.current.value,
      FatherName: FatherInputref.current.value,
      Mother: MotherInputref.current.value,
      Wife: WifeInputref.current.value,
      Nationality: NationalityInputref.current.value,
      State: StateInputref.current.value,
      Pin: PinInputref.current.value,
      ID: Math.trunc(Math.random() * 100),
    };
    props.manageData(userInput);
    navigate.push(`/submitfiles:${userInput.ID}`);
  };
  return (
    <>
      <div>
        <h1 className={style.heading}>FILL OUT THE DETAILS BELOW</h1>
        <div className={style.card}>
          <form onSubmit={onSubmitHandler}>
            <div className={style.flex}>
              <div>
                <label htmlFor="input">FIRST NAME</label>
                <input
                  ref={firstNameInputref}
                  id="input"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="input">Middle NAME</label>
                <input
                  ref={MiddleNameInputref}
                  id="inputMiddle"
                  type="text"
                  placeholder="Michel"
                />
              </div>
              <div>
                <label htmlFor="inputLast">Last Name</label>
                <input
                  ref={LastNameInputref}
                  id="inputLast"
                  type="text"
                  placeholder="Deo"
                />
              </div>
            </div>
            <div className={style.flex}>
              <div>
                <label htmlFor="DOB">DATE OF BIRTH</label>
                <input ref={DateInputref} id="DOB" type="date" required />
              </div>
              <div>
                <label htmlFor="PAN">PAN NUMBER(IN CAPITAL LETTERS)</label>
                <input ref={PanInputref} id="PAN" max="10" required />
              </div>
              <div>
                <label htmlFor="AADHAR">ADHAAR CARD NUMBER</label>
                <input ref={AadharInputref} id="AADHAR" max="12" required />
              </div>
            </div>
            <div className={style.flex}>
              <div>
                <label htmlFor="maritalstatus">ARE YOU MARRIED:</label>
                <select onChange={wifeInput} id="maritalstatus" required>
                  <option value="">select</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </div>
              <div>
                <label htmlFor="occupation">YOUR OCCUPATION</label>
                <select ref={occupationref} id="occupation" required>
                  <option value="">select</option>
                  <option value="buisness">BUISNESS</option>
                  <option value="employed">EMPLOYED</option>
                  <option value="freelancer">FREELANCER</option>
                  <option value="student">STUDENT</option>
                  <option value="none">NONE</option>
                </select>
              </div>
              <div>
                <label htmlFor="qualification">YOUR QUALIFICATION</label>
                <select ref={qualificationref} id="qualification" required>
                  <option value="">select</option>
                  <option value="PG">POSTGRADUATE</option>
                  <option value="UG">UNDERGRADUATE</option>
                  <option value="CA">CHATERED ACCOUNTANT</option>
                  <option value="ENGINEER">ENGINEER</option>
                  <option value="none">NONE</option>
                </select>
              </div>
            </div>
            <div className={style.flex}>
              <div>
                <label htmlFor="father">FATHER NAME</label>
                <input
                  ref={FatherInputref}
                  id="father"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="mother">MOTHER NAME</label>
                <input
                  ref={MotherInputref}
                  id="mother"
                  type="text"
                  placeholder="Michel"
                />
              </div>
              <div>
                <label htmlFor="wife">WIFE Name(if married)</label>
                <input
                  disabled={!married}
                  ref={WifeInputref}
                  id="wife"
                  type="text"
                  placeholder="Deo"
                />
              </div>
            </div>
            <div className={style.flex}>
              <div>
                <label htmlFor="nationality">NATIONALITY</label>
                <input
                  id="nationality"
                  ref={NationalityInputref}
                  type="text"
                  placeholder="INDIAN"
                  required
                />
              </div>
              <div>
                <label htmlFor="state">STATE</label>
                <input
                  ref={StateInputref}
                  id="state"
                  type="text"
                  placeholder="PUNJAB"
                />
              </div>
              <div>
                <label htmlFor="PIN CODE">PLEASE ENTER YOUR PIN CODE</label>
                <input
                  ref={PinInputref}
                  id="PIN CODE"
                  type="text"
                  placeholder="123456"
                />
              </div>
            </div>
            <div>
              <button type="submit" className={style.btn}>
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Input;
