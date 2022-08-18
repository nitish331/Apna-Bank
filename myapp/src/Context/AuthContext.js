import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isloggedIn: false,
  email: "",
  login: (token, email) => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const [Token, setToken] = useState(null);
  const [Email, setEmail] = useState("");
  const userLoggedIn = !!Token;
  const loginHandler = (token, email) => {
    setEmail(email);
    setToken(token);
  };
  const logoutHandler = () => {
    setEmail("");
    setToken(null);
  };
  const context = {
    token: Token,
    isloggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email: Email,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
