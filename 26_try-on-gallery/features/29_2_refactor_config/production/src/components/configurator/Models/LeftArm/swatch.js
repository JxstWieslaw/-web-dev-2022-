import { useState, useRef, useEffect } from "react";
import "../../index.css";
import "../../../../index.css";

export const leftArm_Objects = [
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
    id: "L_arm",
    alt_text: "LA",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
    id: "L_arm1",
    alt_text: "LA1",
  },
  {
    icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
    id: "L_arm2",
    alt_text: "LA2",
  },
];

export const LeftArmObject = ({ options, onClick }) => {
  const divBackgroundImage = {
    backgroundImage: "url(" + options.icon + ")",
  };

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
