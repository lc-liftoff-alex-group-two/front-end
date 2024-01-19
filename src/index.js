import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Routes from './routes/Routes';
import NavScrollExample from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <App />
        <NavScrollExample />
        <Routes />
      </div>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();