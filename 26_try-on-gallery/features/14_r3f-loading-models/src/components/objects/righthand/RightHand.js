import { useState, useRef, useEffect } from "react";
import "../../../App.css";
import "../../../index.css";

export const RightHand = ({ options }) => {
    const divBackgroundImage = {
        backgroundImage: 'url(' + options.icon + ')'    
      };
      function DoSomething() {console.log("clicked ",options.alt_text +" "+ options.id)}
      return (
        <>
          <div id={options.id}className="tray__swatch" style={divBackgroundImage}  onClick={DoSomething}></div>
        </>
      );
};
