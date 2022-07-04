import { useState, useRef, useEffect } from "react";
import "../../index.css";
import "../../../../index.css";

export const eyeBrow_Objects = [
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
    id: "eyeBrow1",
    alt_text: "EBS1",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
    id: "eyeBrow2",
    alt_text: "EBS2",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
    id: "eyeBrow3",
    alt_text: "EBS3",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/4.png?v=1655720888186",
    id: "eyeBrow4",
    alt_text: "EBS4",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/5.png?v=1655720900958",
    id: "eyeBrow5",
    alt_text: "EBS5",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/6.png?v=1655720906119",
    id: "eyeBrow6",
    alt_text: "EBS6",
  },
];

export const EyeBrowObject = ({ options, onClick }) => {
  const divBackgroundImage = {
    backgroundImage: "url(" + options.icon + ")",
  };
  function DoSomething() {
    console.log("clicked ", options.alt_text + " " + options.id);
  }
  return (
    <>
      <div
        id={options.id}
        className="tray__swatch"
        style={divBackgroundImage}
        onClick={onClick}
      ></div>
    </>
  );
};
