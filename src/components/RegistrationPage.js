import React, { useState } from "react";
import "./Register.css";
const RegisterForm = () => {
  const [user, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log("User created:", data.user))
      .catch((error) => console.error("Error creating user:", error));
  };

  return (
    <body id="register_body">
      <div className="register_container">
        <form className="form" id="createAccount" onSubmit={handleSubmit}>
          <h1 className="form_title">Create Account</h1>

          <div className="form__input-group">
            <input
              type="text"
              className="form__input"
              id="userName"
              name="userName"
              value={user.userName}
              onChange={handleChange}
              autoFocus
              placeholder="Enter user name"
            />
          </div>
          {errors.userName && (
            <div style={{ color: "red" }}>
              {errors.userName.map((error, index) => (
                <div key={index}>{error.defaultMessage}</div>
              ))}
            </div>
          )}

          <div className="form__input-group">
            <input
              type="text"
              className="form__input"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              autoFocus
              placeholder="Enter email id"
            />
          </div>
          {errors.email && (
            <div style={{ color: "red" }}>
              {errors.email.map((error, index) => (
                <div key={index}>{error.defaultMessage}</div>
              ))}
            </div>
          )}

          <div className="form__input-group">
            <input
              type="number"
              className="form__input"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              autoFocus
              placeholder="Enter phone number"
            />
          </div>
          {errors.phone && (
            <div style={{ color: "red" }}>
              {errors.phone.map((error, index) => (
                <div key={index}>{error.defaultMessage}</div>
              ))}
            </div>
          )}

          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              autoFocus
              placeholder="Enter password"
            />
          </div>
          {errors.password && (
            <div style={{ color: "red" }}>
              {errors.password.map((error, index) => (
                <div key={index}>{error.defaultMessage}</div>
              ))}
            </div>
          )}

          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              autoFocus
              placeholder="Confirm password"
            />
          </div>
          {errors.confirmPassword && (
            <div style={{ color: "red" }}>
              {errors.confirmPassword.map((error, index) => (
                <div key={index}>{error.defaultMessage}</div>
              ))}
            </div>
          )}
          <button className="form__button" type="submit">
            Continue
          </button>
          <p className="form__text">
            <a className="form__link" href="/login" id="linkLogin">
              Already have an account? Sign in
            </a>
          </p>
        </form>
      </div>
    </body>
  );
};

export default RegisterForm;
