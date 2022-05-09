import "../../App";
import "../../index";
import { BodyOptions } from "./body/BodyOptions";
import { LeftHandOptions } from "./lefthand/LeftHandOptions";
import { RightHandOptions } from "./righthand/RightHandOptions";

function ObjectsSwatch() {
  // const objects = [{name: "lefthand"}];
  return (
    <>
      <div className="change-objects">
        {/* This tray will be filled with the different parts via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
        {/* choices  */}
        <div id="js-objects" className="objects">
          <RightHandOptions />
          <LeftHandOptions />
          <BodyOptions />
        </div>
      </div>
    </>
  );
}

export default ObjectsSwatch;
