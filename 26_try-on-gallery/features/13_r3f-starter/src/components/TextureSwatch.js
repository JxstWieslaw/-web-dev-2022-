import "../App";
import "../index";

function TextureSwatch() {
  return (
    <>
      <div className="controls">
        {/* This tray will be filled with colors via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
        <div id="js-tray" className="tray">
          <div id="js-tray-slide" className="tray__slide"></div>
        </div>
      </div>
    </>
  );
}

export default TextureSwatch;