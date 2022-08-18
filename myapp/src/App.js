import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

// import "./App.css";
import Hero from "./components/hero/Hero";
import Accounts from "./components/Accounts/Accounts";
import Input from "./components/create-account-form/Input";
import Input2 from "./components/create-account-form/Input2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loginform from "./components/Login/Loginform";
import Footer from "./components/Footer/Footer";
import STARTER from "./components/GETSTARTED/Starter.js";
import Whyab from "./components/Whyab/Whyab";
import Faqs from "./components/help/Faqs";
import Heading from "./components/help/Heading";
import CardContainer from "./components/help/CardContainer";
import OurServiceContainer from "./components/OURSERVICES/OurServiceContainer";
import Invest from "./components/INVEST/Invest";
import SetPassword from "./components/create-account-form/SetPassword";
import Submission from "./components/create-account-form/ACCOUNTSUCCES";
import Verification from "./Logged/VERIFICATION.js";
import UserDetails from "./Logged/UserDetails";
import AuthContext from "./Context/AuthContext";
import Dashboard from "./components/UserDashboard/Dashboard";
import Invalid from "./PageNotFound/404";

function App() {
  const ctx = useContext(AuthContext);
  const [userData, setuserData] = useState(false);
  const [userPicData, setuserPicData] = useState(false);
  const [userAuthData, setuserAuthData] = useState(false);
  const userformDataHandler = (data) => {
    setuserData(data);
  };
  useEffect(() => {
    if (userData && userAuthData && userPicData) {
      const userId = userData.ID;
      const url = `https://apnabank-c8f12-default-rtdb.firebaseio.com/users/${userId}.json`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          userdata: userData,
          Authdata: userAuthData,
          PicData: userPicData,
        }),
      });
    }
  }, [userAuthData]);

  return (
    <>
      <Router>
        {ctx.isloggedIn || <Navbar />}
        <Switch>
          <Route exact path="/">
            <Hero />
            <Whyab />
            <STARTER />
            <Accounts />
            <Footer />
          </Route>
          {ctx.isloggedIn || (
            <Route exact path="/login">
              <Loginform button={"Login"} isLogin={true} />
            </Route>
          )}
          {ctx.isloggedIn || (
            <Route exact path="/createaccount">
              <Input manageData={userformDataHandler} />
            </Route>
          )}

          {ctx.isloggedIn || (
            <Route exact path="/submitfiles:userId">
              <Input2 picHandler={setuserPicData} />
            </Route>
          )}

          <Route exact path="/help">
            <Heading />
            <Faqs
              question={"HOW TO OPEN AN ACCOUNT WITH APNA BANK?"}
              answer={
                "TO OPEN AN  ACCOUNT WITH APNA BANK , GO TO CREATE ACCOUNT SHOWN ON THE NAVBAR AND FILL YOUR REQUIRED DETAILS WHICH IS SHOWN ON YOUR SCREEN AND THEN SUBMIT THE REQUIRED FILES LIKE PAN CARD AND AADHAR CARD, (PLEASE SUBMIT ONLY PHOTO) . OUR TEAM WILL VERIFY YOUR  ACCOUNT THEN GET YOU ON BOARD WITH US AS SOON AS POSSIBLE"
              }
            />
            <Faqs
              question={
                "I HAVE SUBMITTED THE DOCUMENTS BUT STILL IT DO NOT VERIFIED?"
              }
              answer={
                "ONCE YOU SUCCESFULLY SUBMITTED YOUR FILES , IT WILL TAKE TWO DAYS OF TIME TO VERIFY YOUR DOCUMENTS. IF IT TAKES MORE THAN TWO DAYS THAN YOU CAN CALL AND EMAIL AT THE CONTACT NUMBERS GIVEN BELOW."
              }
            />
            <Faqs
              question={
                "WHEN I LOGIN I GOT AN MESSAGE THAT YOUR ACCOUNT HAS NOT BEEN VERIFIED"
              }
              answer={
                "IN THAT CASE YOUR DOCUMENTS ARE NOT VERIFIED OR INCOMPLETE AND ONCE YOU LOGOUT FROM THE DASHBOARD THAN YOU CAN AGAIN SUBMIT THE DOCUMENTS AND OUR TEAM WILL VERIFIED IT "
              }
            />
            <Faqs
              question={
                "HOW TO CREATE THE FIXED DEPOSIT AND WHAT IS THE INTEREST RATE THAT I CAN EARN ON FIXED DEPOSIT"
              }
              answer={
                "LOGIN TO YOUR ACCOUNT WITH VALID CREDENTIALS AND GO TO NEW DEPOSIT, CREATE THE DEPOSIT WITH MINIMUM OF RUPEE 11000 AND YOU WILL EARN A 10% OF INTEREST RATES ON YOUR DEPOSITS"
              }
            />
            <CardContainer />
            <Footer />
          </Route>
          <Route exact path="/services">
            <OurServiceContainer />
          </Route>
          <Route exact path={"/invest"}>
            <Invest />
          </Route>
          {ctx.isloggedIn || (
            <Route exact path={"/submitfiles:userId/SetPassword"}>
              <SetPassword PasswordHandler={setuserAuthData} />
            </Route>
          )}
          {ctx.isloggedIn || (
            <Route exact path={"/accountOpened:userId"}>
              <Submission />
            </Route>
          )}
          {ctx.isloggedIn && (
            <Route exact path={"/admin/login:token"}>
              <Verification />
            </Route>
          )}
          {ctx.isloggedIn && (
            <Route exact path={"/admin/login:token/:UserId/details"}>
              <UserDetails />
            </Route>
          )}

          {ctx.isloggedIn && (
            <Route exact path={"/login:token/user-dashboard"}>
              <Dashboard />
            </Route>
          )}
          <Route path="*">
            <Invalid />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
