import "../App";
import "../index";

function ObjectsSwatch() {
    return (
      <>
        <div className="change-objects">
          {/* This tray will be filled with the different parts via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
          {/* choices  */}
          <div id="js-objects" className="objects">
            <div id="legs-objects" className="objects__slide"></div>
            <div id="cushions-objects" className="objects__slide"></div>
            <div id="base-objects" className="objects__slide"></div>
            <div id="supports-objects" className="objects__slide"></div>
            <div id="base-objects" className="objects__slide"></div>
          </div>
        </div>
      </>
    );
  }

  export default ObjectsSwatch;