const OBJECTS = document.getElementById("js-objects-slide");

const rightHand_Objects = [
  {
    icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/shoulder_arm.png?v=1649487678196",
    size: [6, 6, 6],
    shininess: 0,
  },
  {
    icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/robot_arm.png?v=1649487682124",
    size: [6, 6, 6],
    shininess: 0,
  },
];

const leftHand_Objects = [
  {
    icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/left-hand-pic.jpg?v=1650274908577",
    size: [6, 6, 6],
    shininess: 0,
  },
  {
    icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm.png?v=1649487674922",
    size: [6, 6, 6],
    shininess: 0,
  },
];

const model_swatches = document.querySelectorAll(".objects__swatch");
function buildParts(elements) {
  // console.log(OBJECTS)
  for (let [i, element] of elements.entries()) {
    let swatch = document.createElement("div");
    swatch.classList.add("objects__swatch");

    if (element.icon)
      swatch.style.backgroundImage = "url(" + element.icon + ")";

    swatch.setAttribute("data-key", i);
    OBJECTS.append(swatch);
    // console.log(OBJECTS)
  }
}

function clearObjects() {
  while (OBJECTS.firstChild) {
    OBJECTS.removeChild(OBJECTS.firstChild);
  }
}
export {
  OBJECTS,
  rightHand_Objects,
  leftHand_Objects,
  buildParts,
  clearObjects,
  model_swatches,
};
