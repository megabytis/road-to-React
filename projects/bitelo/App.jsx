import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>This is title</h1>;

const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

const HeadingComponent = () => (
  <div className="container">
    {date}/{month}/{year}
    <Title />
    <h2 className="heading">This is H1 heading</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
