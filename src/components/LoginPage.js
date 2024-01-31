import React, { useState } from "react";
import "./Register.css"; // Import your CSS file

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [credentialError, setCredentialError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/auth/loginSubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data);
        if (data.error) {
          // Set the error message if the server indicates an error
          setCredentialError("Invalid credentials. Please try again.");
        } else {
          // Clear the error message if login is successful
          setCredentialError("");
          console.log("User created:", data);
          // Redirect or perform other actions on successful login
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        // Handle other errors if needed
      });
  };

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
              value={credentials.email}
              onChange={handleChange}
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
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div id="credentialError" style={{ color: "red" }}>
            {credentialError}
          </div>
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
