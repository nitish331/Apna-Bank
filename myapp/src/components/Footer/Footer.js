import React from "react";
import Footerdiv from "./Footerdiv";
import style from "./Footer.module.css";

function Footer() {
  const foot = [
    {
      value1: "AB SALARY ACCOUNTS",
      value2: "AB GENERAL INSURANCE",
      value3: "CONSUMER COMPLAINT Form",
      value4: "CONSUMER REQUEST FORM",
    },

    {
      value1: "LINKING OF PAN WITH AADHAR",
      value2: "AB FASTAG",
      value3: "AB INDIAN SECURITIES",
      value4: "AB LIFE INSURANCE",
    },
    {
      value1: "REGISTRATION FOR DOOSTEP BANKING",
      value2: "AB MUTUAL FUND",
      value3: "AB INDIAN SECURITIES TRUSTEES COMPANIES LIMITED",
      value4: "AB CARD",
    },
    {
      value1: "FAIR LENDING PRACTICE CODE",
      value2: "NRI SERVICES",
      value3: "AB EXPRESS REMIT",
      value4: "ONLINE AB GLOBAL",
    },
  ];
  return (
    <>
      <div className={style.footerbox}>
        {foot.map((values) => (
          <div>
            <Footerdiv
              value1={values.value1}
              value2={values.value2}
              value3={values.value3}
              value4={values.value4}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Footer;
