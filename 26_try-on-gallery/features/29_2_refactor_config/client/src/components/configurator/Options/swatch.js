import { useState, useRef, useEffect } from "react";
import "../index.css";
import "../../../index.css";

//Images for options
export const optionImages = [
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/cushions.svg?v=1649144499363",
      alt_text: "RA",
      data_option: "rightarm",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/legs.svg?v=1649144515701",
      alt_text: "LA",
      data_option: "leftarm",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/base.svg?v=1649144479039",
      alt_text: "BS",
      data_option: "base",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/back.svg?v=1649144459372",
      alt_text: "BACK",
      data_option: "back",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/back.svg?v=1649144459372",
      alt_text: "H",
      data_option: "head",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/cushions.svg?v=1649144499363",
      alt_text: "ST",
      data_option: "seat",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/supports.svg?v=1649144531018",
      alt_text: "SP",
      data_option: "support",
    },
  ];


export const Option = ({options,active, id ,onClick}) => {
  const className = `option ${id === active ? '--is-active' : ''}`;
  return (
    <>
      {/* These toggle the the different parts of the body that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
        <div className={className} data-option={options.data_option} onClick={onClick}>
          <img
            src={options.url}
            alt={options.alt_text}
          />
        </div>
    </>
  );
}