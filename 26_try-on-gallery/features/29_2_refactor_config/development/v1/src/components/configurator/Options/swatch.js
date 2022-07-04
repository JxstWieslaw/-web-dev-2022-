import { useState, useRef, useEffect } from "react";
import "../index.css";
import "../../../index.css";

//Images for options
export const optionImages = [
    {
      url: "https://cdn.glitch.global/541f2442-8529-4d4f-9d16-9d259d5ea433/face.JPG?v=1655977273744",
      alt_text: "F",
      data_option: "face",
    },
    {
      url: "https://cdn.glitch.global/541f2442-8529-4d4f-9d16-9d259d5ea433/beard.JPG?v=1655977215803",
      alt_text: "BE",
      data_option: "beard",
    },
    {
      url: "https://cdn.glitch.global/541f2442-8529-4d4f-9d16-9d259d5ea433/cheeks.JPG?v=1655977218180",
      alt_text: "CK",
      data_option: "cheek",
    },
    {
      url: "https://cdn.glitch.global/541f2442-8529-4d4f-9d16-9d259d5ea433/eye.JPG?v=1655977220578",
      alt_text: "ES",
      data_option: "eyes",
    },
    {
      url: "https://cdn.glitch.global/541f2442-8529-4d4f-9d16-9d259d5ea433/eyebrow.JPG?v=1655977269506",
      alt_text: "EBS",
      data_option: "eyeBrow",
    },
    {
      url: "https://cdn.glitch.global/541f2442-8529-4d4f-9d16-9d259d5ea433/hair.PNG?v=1655977232076",
      alt_text: "BHS",
      data_option: "boyHairStyle",
    },
    {
      url: "https://cdn.glitch.global/541f2442-8529-4d4f-9d16-9d259d5ea433/mouth.JPG?v=1655977225366",
      alt_text: "MH",
      data_option: "mouth",
    },
    {
      url: "https://cdn.glitch.global/541f2442-8529-4d4f-9d16-9d259d5ea433/nose.JPG?v=1655977256394",
      alt_text: "NE",
      data_option: "nose",
    },
    {
      url: "https://cdn.glitch.global/541f2442-8529-4d4f-9d16-9d259d5ea433/upper.JPG?v=1655977228017",
      alt_text: "UCS",
      data_option: "upperClothes",
    },
    {
      url: "https://cdn.glitch.global/541f2442-8529-4d4f-9d16-9d259d5ea433/lower.JPG?v=1655977236603",
      alt_text: "LCS",
      data_option: "lowerClothes",
    }
  ]


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