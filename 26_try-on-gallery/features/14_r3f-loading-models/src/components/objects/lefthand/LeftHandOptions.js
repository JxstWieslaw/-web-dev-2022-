import "../../../App";
import "../../../index";
import { LeftHand } from "./LeftHand";

export const  LeftHandOptions = ()=> {
  const leftHand_Objects = [
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm-colorless.png?v=1650368906398",
      id: "hand1",
      alt_text: "LH1",
    },
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm.png?v=1649487674922",
      id: "hand2",
      alt_text: "LH2",
    },
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/shoulder_arm.png?v=1649487678196",
      id: "hand3",
      alt_text: "LH3",
    },
  ];

  return (
    <>
      {/* These toggle the the different parts of the chair that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
      <div id="leftHand" className="objects__slide">
        {leftHand_Objects.map((options, index) => (
          <LeftHand key={index} options={options} />
        ))}
      </div>
    </>
  );
}
