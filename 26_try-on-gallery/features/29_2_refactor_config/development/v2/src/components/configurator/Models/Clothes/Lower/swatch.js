import { useState, useRef, useEffect } from "react";
import "../../../index.css";
import "../../../../../index.css";

export const lowerClothes_Objects = [
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
    id: "lowerClothes1",
    alt_text: "LCS1",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
    id: "lowerClothes1",
    alt_text: "LCS2",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
    id: "lowerClothes3",
    alt_text: "LCS3",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/4.png?v=1655720888186",
    id: "lowerClothes4",
    alt_text: "LCS4",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/5.png?v=1655720900958",
    id: "lowerClothes5",
    alt_text: "LCS5",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/6.png?v=1655720906119",
    id: "lowerClothes6",
    alt_text: "LCS6",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/7.jpg?v=1655720909722",
    id: "lowerClothes7",
    alt_text: "LCS7",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/8.png?v=1655720913761",
    id: "lowerClothes8",
    alt_text: "LCS8",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/9.jpg?v=1655720916969",
    id: "lowerClothes9",
    alt_text: "LCS9",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/10.png?v=1655720926489",
    id: "lowerClothes10",
    alt_text: "LCS10",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/11.png?v=1655720930453",
    id: "lowerClothes11",
    alt_text: "LCS11",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/12.png?v=1655720933612",
    id: "lowerClothes12",
    alt_text: "LCS12",
  },
];

export const LowerClothObject = ({ options, onClick }) => {
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
