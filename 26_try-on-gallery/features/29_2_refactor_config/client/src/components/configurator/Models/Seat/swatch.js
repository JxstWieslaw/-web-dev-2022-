import { useState, useRef, useEffect } from "react";
import "../../index.css";
import "../../../../index.css";

export const seatObjects = [
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
      id: "seat",
      alt_text: "ST",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
      id: "seat1",
      alt_text: "ST1",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
      id: "seat2",
      alt_text: "ST2",
    },
  ];

  export const SeatObject = ({ options, onClick }) => {
    const divBackgroundImage = {
        backgroundImage: 'url(' + options.icon + ')'    
      };
      function DoSomething() {console.log("clicked ",options.alt_text +" "+  options.id)}
      return (
        <>
          <div id={options.id}className="tray__swatch" style={divBackgroundImage} onClick={onClick}></div>
        </>
      );
};

  