import React, { useState } from "react";
import "./Register.css"; // Import your CSS file
import { useAuth } from "./context/AuthContext";
import { giveWiseApi } from "./GiveWise";
import { handleLogError } from "./Helper";
import { useNavigate } from "react-router-dom";
import { Message } from "semantic-ui-react";

const LoginForm = () => {
  const navigate = useNavigate();
  const Auth = useAuth();
  const isLoggedIn = Auth.userIsAuthenticated();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(email && password)) {
      setIsError(true);
      return;
    }

    try {
      const response = await giveWiseApi.authenticate(email, password);
      const { id, name, role } = response.data;
      console.log("ID: " + id);
      console.log("Username: " + name);
      console.log("Role: " + role);
      const authdata = window.btoa(name + ":" + password);
      const authenticatedUser = { id, name, role, authdata };

      Auth.userLogin(authenticatedUser);

      setEmail("");
      setPassword("");
      setIsError(false);
    } catch (error) {
      handleLogError(error);
      setIsError(true);
    }
  };

  if (isLoggedIn) {
    navigate("/home");
  }
  return (
    <body id="register_body">
      <div className="register_container">
        <form onSubmit={handleSubmit} id="login">
          <h1 className="form_title">Login</h1>
          <div className="form__input-group">
            <input
              type="text"
              id="email"
              className="form__input"
              autoFocus
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form__input-group">
            <input
              id="password"
              type="password"
              className="form__input"
              autoFocus
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          {isError && (
            <Message negative>
              The username or password provided are incorrect!
            </Message>
          )}
          <br />
          <button id="loginBtn" className="form__button" type="submit">
            Continue
          </button>
          <p className="form__text">
            <a className="form__link" href="/register" id="linkCreateAccount">
              Don't have an account? Create account
            </a>
          </p>
        </form>
      </div>
    </body>
  );
};

export default LoginForm;
