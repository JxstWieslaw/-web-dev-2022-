import "../../../App";
import "../../../index";
import { RightHand } from "./RightHand";

export const  RightHandOptions = ()=> {
  const rightHand_Objects = [
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/left-hand-pic.jpg?v=1650274908577",
      id: "hand1",
      alt_text: "RH1",
    },
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/robot_arm.png?v=1649487682124",
      id: "hand2",
      alt_text: "RH2",
    },
  ];
    
  return (
    <>
      {/* These toggle the the different parts of the chair that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
      <div id="rightHand" className="objects__slide">
        {rightHand_Objects.map((options, index) => (
          <RightHand key={index} options={options} />
        ))}
      </div>
    </>
  );
}