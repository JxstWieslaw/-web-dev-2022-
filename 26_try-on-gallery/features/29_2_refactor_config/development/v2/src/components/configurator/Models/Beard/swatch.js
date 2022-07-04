import { useState, useRef, useEffect } from "react";
import "../../index.css";
import "../../../../index.css";

export const beard_Objects = [
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
    id: "beard1",
    alt_text: "BE1",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
    id: "beard2",
    alt_text: "BE2",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
    id: "beard3",
    alt_text: "BE3",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/4.png?v=1655720888186",
    id: "beard4",
    alt_text: "BE4",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/5.png?v=1655720900958",
    id: "beard5",
    alt_text: "BE5",
  }
];

export const BeardObject = ({ options, onClick }) => {
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
