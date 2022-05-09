import { useState, useRef, useEffect } from "react";
import "../../../App.css";
import "../../../index.css";

export const LeftHand = ({ options,onClick }) => {
    const divBackgroundImage = {
        backgroundImage: 'url(' + options.icon + ')'    
      };
    
      return (
        <>
          <div id={options.id}className="tray__swatch" style={divBackgroundImage} onClick={onClick}></div>
        </>
      );
};
