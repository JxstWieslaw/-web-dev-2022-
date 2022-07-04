import { useState, useRef, useEffect } from "react";
import "../index.css";
import "../../../index.css";

export const colors = [
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/wood_.jpg?v=1649144910756",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/fabric_.jpg?v=1649144905001",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/pattern_.jpg?v=1649144906757",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/denim_.jpg?v=1649144904412",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/quilt_.jpg?v=1649144908805",
      color: null,
    },
    {
      color: "#131417",
      texture: null,
    },
    {
      color: "#374047",
      texture: null,
    },
    {
      color: "#5f6e78",
      texture: null,
    },
    {
      color: "#7f8a93",
      texture: null,
    },
    {
      color: "#97a1a7",
      texture: null,
    },
    {
      color: "#acb4b9",
      texture: null,
    },
    {
      color: "#DF9998",
      texture: null,
    },
    {
      color: "#7C6862",
      texture: null,
    },
    {
      color: "#A3AB84",
      texture: null,
    },
    {
      color: "#D6CCB1",
      texture: null,
    },
    {
      color: "#F8D5C4",
      texture: null,
    },
    {
      color: "#A3AE99",
      texture: null,
    },
    {
      color: "#EFF2F2",
      texture: null,
    },
    {
      color: "#B0C5C1",
      texture: null,
    },
    {
      color: "#8B8C8C",
      texture: null,
    },
    {
      color: "#565F59",
      texture: null,
    },
    {
      color: "#CB304A",
      texture: null,
    },
    {
      color: "#FED7C8",
      texture: null,
    },
    {
      color: "#C7BDBD",
      texture: null,
    },
    {
      color: "#3DCBBE",
      texture: null,
    },
    {
      color: "#264B4F",
      texture: null,
    },
    {
      color: "#389389",
      texture: null,
    },
    {
      color: "#F2DABA",
      texture: null,
    },
    {
      color: "#F2A97F",
      texture: null,
    },
    {
      color: "#D85F52",
      texture: null,
    },
    {
      color: "#D92E37",
      texture: null,
    },
    {
      color: "#FC9736",
      texture: null,
    },
    {
      color: "#F7BD69",
      texture: null,
    },
    {
      color: "#A4D09C",
      texture: null,
    },
    {
      color: "#4C8A67",
      texture: null,
    },
    {
      color: "#25608A",
      texture: null,
    },
    {
      color: "#75C8C6",
      texture: null,
    },
    {
      color: "#F5E4B7",
      texture: null,
    },
    {
      color: "#E69041",
      texture: null,
    },
    {
      color: "#E56013",
      texture: null,
    },
    {
      color: "#11101D",
      texture: null,
    },
    {
      color: "#630609",
      texture: null,
    },
    {
      color: "#C9240E",
      texture: null,
    },
    {
      color: "#EC4B17",
      texture: null,
    },
    {
      color: "#281A1C",
      texture: null,
    },
    {
      color: "#4F556F",
      texture: null,
    },
    {
      color: "#64739B",
      texture: null,
    },
    {
      color: "#CDBAC7",
      texture: null,
    },
    {
      color: "#946F43",
      texture: null,
    },
    {
      color: "#66533C",
      texture: null,
    },
    {
      color: "#173A2F",
      texture: null,
    },
    {
      color: "#153944",
      texture: null,
    },
    {
      color: "#27548D",
      texture: null,
    },
    {
      color: "#438AAC",
      texture: null,
    },
  ];

  
  export const Color = ({ background, onClick }) => {
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
          onClick={onClick}
        ></div>
      </>
    );
  };