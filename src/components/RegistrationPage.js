import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  
  const navigate = useNavigate();
  const [user, setUserData] = useState({
    id: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Basic validation
    let error = "";
    if (name === "userName" && value.length < 3) {
      error = "User name must be at least 3 characters long";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email address";
    } else if (name === "phone" && !/^\d{10}$/.test(value)) {
      error = "Phone number must be 10 digits long";
    } else if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters long";
    } else if (name === "confirmpassword" && value !== user.password) {
      error = "Passwords do not match";
    }

    setErrors({
      ...errors,
      [name]: error,
    });

    setUserData({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional validation for required fields
    const requiredFields = ["userName", "email", "phone", "password"];
    const newErrors = {};
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!user[field]) {
        newErrors[field] = "This field is required";
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log("User created:", user);

        if (user) {
          setUserData(user); // Set user state with the received user information
          navigate("/login"); // Set redirect state to true
        } else {
          console.log("Error creating user:", user);
          // Handle error scenarios or display a message to the user
        }
      })
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
              placeholder="User name"
            />
          </div>
          {errors.userName && (
            <div style={{ color: "red" }}>{errors.userName}</div>
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
              placeholder="Email"
            />
          </div>
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          <div className="form__input-group">
            <input
              type="number"
              className="form__input"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              autoFocus
              placeholder="Phone number"
            />
          </div>
          {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}

          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              autoFocus
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              id="confirmpassword"
              name="confirmpassword"
              onChange={handleChange}
              autoFocus
              placeholder="Confirm Password"
            />
          </div>
          {errors.confirmpassword && (
            <div style={{ color: "red" }}>{errors.confirmpassword}</div>
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
