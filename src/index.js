import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Aboutus from './Aboutus';
import DataFromWeb from './DataFromWeb';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <h1><center> Welcome to Nationwide</center></h1>
    <BrowserRouter>
    <nav>
      <ul>
        <li> <Link to="/aboutus"> About Us</Link></li>
        <li> <Link to="/comments"> Comments</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/comments" element={<DataFromWeb/>} />
      
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
