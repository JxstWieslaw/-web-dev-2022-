import "../../App";
import "../../index";
import { Option } from "./ActiveOption";

function OptionsSwatch() {
  const optionImages = [
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/legs.svg?v=1649144515701",
      alt_text: "LH",
      data_option: "lefthand",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/cushions.svg?v=1649144499363",
      alt_text: "RH",
      data_option: "righthand",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/base.svg?v=1649144479039",
      alt_text: "BODY",
      data_option: "body",
    },
  ];

  function DoSomething() {console.log("clicked")}

  return (
    <>
      {/* These toggle the the different parts of the chair that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
      <div className="options">
        {optionImages.map((options, index) => (
          <Option key={index} options={options} onClick={DoSomething} />
        ))}
      </div>
    </>
  );
}

export default OptionsSwatch;
