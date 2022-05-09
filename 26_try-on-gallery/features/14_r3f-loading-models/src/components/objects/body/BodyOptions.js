import "../../../App";
import "../../../index";
import { Body } from "./Body";

export const  BodyOptions = ()=> {
  const bodyObjects = [
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm-colorless.png?v=1650368906398",
      id: "body1",
      alt_text: "B1",
    },
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm.png?v=1649487674922",
      id: "body2",
      alt_text: "B2",
    },
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/shoulder_arm.png?v=1649487678196",
      id: "body3",
      alt_text: "B3",
    },
  ];

  return (
    <>
      {/* These toggle the the different parts of the chair that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
      <div id="body" className="objects__slide">
        {bodyObjects.map((options, index) => (
          <Body key={index} options={options} />
        ))}
      </div>
    </>
  );
}
