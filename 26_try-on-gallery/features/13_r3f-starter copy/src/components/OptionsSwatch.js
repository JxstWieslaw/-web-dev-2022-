import "../App";
import "../index";

function OptionsSwatch() {
    return (
      <>
        {/* These toggle the the different parts of the chair that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
        <div className="options">
          <div className="option --is-active" data-option="legs">
            <img
              src="https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/legs.svg?v=1649144515701"
              alt=""
            />
          </div>
          <div className="option" data-option="cushions">
            <img
              src="https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/cushions.svg?v=1649144499363"
              alt=""
            />
          </div>
          <div className="option" data-option="base">
            <img
              src="https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/base.svg?v=1649144479039"
              alt=""
            />
          </div>
          <div className="option" data-option="supports">
            <img
              src="https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/supports.svg?v=1649144531018"
              alt=""
            />
          </div>
          <div className="option" data-option="back">
            <img
              src="https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/back.svg?v=1649144459372"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }

  export default OptionsSwatch;