import { useState, useRef, useEffect, Component } from "react";
import "../../App.css";
import "../../index.css";
export const Color = ({ background }) => {
  const divBackgroundImage = {
    backgroundImage: "url(" + background.texture + ")",
  };

  const divBackgroundColor = {
    background: background.color,
  };

  return (
    <>
      <div
        className="tray__swatch"
        style={background.texture ? divBackgroundImage : divBackgroundColor}
      ></div>
    </>
  );
};
