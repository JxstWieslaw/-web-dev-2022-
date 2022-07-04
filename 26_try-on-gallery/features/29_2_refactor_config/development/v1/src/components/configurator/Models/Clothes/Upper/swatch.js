import { useState, useRef, useEffect } from "react";
import "../../../index.css";
import "../../../../../index.css";

export const upperClothes_Objects = [
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
    id: "upperClothes1",
    alt_text: "UCS1",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
    id: "upperClothes2",
    alt_text: "UCS2",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
    id: "upperClothes3",
    alt_text: "UCS3",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/4.png?v=1655720888186",
    id: "upperClothes4",
    alt_text: "UCS4",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/5.png?v=1655720900958",
    id: "upperClothes5",
    alt_text: "UCS5",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/6.png?v=1655720906119",
    id: "upperClothes6",
    alt_text: "UCS6",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/7.jpg?v=1655720909722",
    id: "upperClothes7",
    alt_text: "UCS7",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/8.png?v=1655720913761",
    id: "upperClothes8",
    alt_text: "UCS8",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/9.jpg?v=1655720916969",
    id: "upperClothes9",
    alt_text: "UCS9",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/10.png?v=1655720926489",
    id: "upperClothes10",
    alt_text: "UCS10",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/11.png?v=1655720930453",
    id: "upperClothes11",
    alt_text: "UCS11",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/12.png?v=1655720933612",
    id: "upperClothes12",
    alt_text: "UCS12",
  },
];

export const UpperClothObject = ({ options, onClick }) => {
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
