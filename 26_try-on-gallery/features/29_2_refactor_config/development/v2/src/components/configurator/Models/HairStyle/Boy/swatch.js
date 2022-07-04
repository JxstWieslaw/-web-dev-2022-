import { useState, useRef, useEffect } from "react";
import "../../../index.css";
import "../../../../../index.css";

export const boyHairStyle_Objects = [
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
    id: "boyHairStyle1",
    alt_text: "BHS1",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
    id: "boyHairStyle2",
    alt_text: "BHS2",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
    id: "boyHairStyle3",
    alt_text: "BHS3",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/4.png?v=1655720888186",
    id: "boyHairStyle4",
    alt_text: "BHS4",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/5.png?v=1655720900958",
    id: "boyHairStyle5",
    alt_text: "BHS5",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/6.png?v=1655720906119",
    id: "boyHairStyle6",
    alt_text: "BHS6",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/7.jpg?v=1655720909722",
    id: "boyHairStyle7",
    alt_text: "BHS7",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/8.png?v=1655720913761",
    id: "boyHairStyle8",
    alt_text: "BHS8",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/9.jpg?v=1655720916969",
    id: "boyHairStyle9",
    alt_text: "BHS9",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/10.png?v=1655720926489",
    id: "boyHairStyle10",
    alt_text: "BHS10",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/11.png?v=1655720930453",
    id: "boyHairStyle11",
    alt_text: "BHS11",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/12.png?v=1655720933612",
    id: "boyHairStyle12",
    alt_text: "BHS12",
  },
];

export const BoyHairStyleObject = ({ options, onClick }) => {
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
