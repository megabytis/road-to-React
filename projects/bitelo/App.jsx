import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-box">
      <img
        className="logo"
        src="https://as2.ftcdn.net/v2/jpg/02/20/52/39/1000_F_220523939_LLQ8aYBh0i8U3Ysyg6AV50NIHFxZwnB7.jpg"
        alt="Imgae Unvailable!"
        
      ></img>
    </div>
    <div className="nav-items">
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
