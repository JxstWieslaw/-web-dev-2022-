const OBJECTS = document.getElementById("js-objects-slide");

const elements = [
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

function buildParts(elements) {
    for (let [i, element] of elements.entries()) {
      let swatch = document.createElement("div");
      swatch.classList.add("objects__swatch");
  
      if (element.icon)
        swatch.style.backgroundImage = "url(" + element.icon + ")";
  
      swatch.setAttribute("data-key", i);
      OBJECTS.append(swatch);
    }
  }

export {OBJECTS,elements,buildParts}