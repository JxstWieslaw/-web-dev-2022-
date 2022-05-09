import "../../App";
import "../../index";
import { useEffect, useState } from "react";
import { Color } from "./Color";

function TextureSwatch() {
  // const [background, setBackground] = useState([]);

  // useEffect(){
  //   setBackground(colors)
  // }
  const colors = [
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
  ];

  // const [colors, setColors] = useState([])
  // setColors(arr)
  return (
    <>
      <div className="controls">
        {/* This tray will be filled with colors via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
        <div id="js-tray" className="tray">
          <div id="js-tray-slide" className="tray__slide">
            {colors.map((colorOrTexture, index) => (
              <Color key={index} background={colorOrTexture} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TextureSwatch;
