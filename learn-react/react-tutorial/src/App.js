import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const [value, setValue] = useState(10);

  const handleClick = (who) => () =>console.log("clicked the button", who)
  
  return (
    <>
      <button onClick={handleClick("world")}> button</button>
      <button onClick={handleClick("react")}> button</button>
      <button onClick={handleClick("function")}>button</button>
    </>
  );
};

export default App;
