import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Routes from "./routes/Routes";
import NavScrollExample from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./components/context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <div>
          <App />
          <NavScrollExample />
          <Routes />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
