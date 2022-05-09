import { useState, useRef, useEffect } from "react";
import "../../App";
import "../../index";

export const Option = ({options}) => {
  const [activeOption, setActiveOption] = useState("lefthand")

  return (
    <>
      {/* These toggle the the different parts of the body that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
        <div className="option --is-active" data-option={options.data_option}>
          <img
            src={options.url}
            alt={options.alt_text}
          />
        </div>
    </>
  );
}
// // Declare a new state variable, which we'll call "count"
// const [count, setCount] = useState(0);

// return (
//   <div>
//     <p>You clicked {count} times</p>
//     <button onClick={() => setCount(count + 1)}>
//       Click me
//     </button>
//   </div>
// );
// }