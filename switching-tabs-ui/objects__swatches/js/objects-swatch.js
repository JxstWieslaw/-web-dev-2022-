const legObjects = document.getElementById("legs-objects");
const cushionObjects = document.getElementById("cushions-objects");
const baseObjects = document.getElementById("base-objects");
const supportsObjects = document.getElementById("supports-objects");
const backObjects = document.getElementById("back-objects");

const rightHand_Objects = [
  {
    icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/left-hand-pic.jpg?v=1650274908577",
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
    icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm-colorless.png?v=1650368906398",
    size: [6, 6, 6],
    shininess: 0,
  },
  {
    icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm.png?v=1649487674922",
    size: [6, 6, 6],
    shininess: 0,
  },
];

const leg_swatch = document.querySelectorAll(".leg__objects__swatch");
const cushion_swatch = document.querySelectorAll(".cushion__objects__swatch");

function buildLegSwatch(rightHand_Objects) {
  // console.log(legObjects)
  for (let [i, element] of rightHand_Objects.entries()) {
    let swatch = document.createElement("div");
    swatch.classList.add("leg__objects__swatch");

    if (element.icon)
      swatch.style.backgroundImage = "url(" + element.icon + ")";

    swatch.setAttribute("data-key", i);
    legObjects.append(swatch);
    // console.log(legObjects)
  }
  legObjects.setAttribute("data-key",0);
}

function buildCushionSwatch(leftHand_Objects) {
  // console.log(legObjects)
  for (let [i, element] of leftHand_Objects.entries()) {
    let swatch = document.createElement("div");
    swatch.classList.add("cushion__objects__swatch");

    if (element.icon)
      swatch.style.backgroundImage = "url(" + element.icon + ")";

    swatch.setAttribute("data-key", i+1);
    cushionObjects.append(swatch);
    // console.log(cushionObjects)
  }
  cushionObjects.setAttribute("data-key",1);
}

export {
  buildCushionSwatch,
  buildLegSwatch,
  rightHand_Objects,
  leftHand_Objects,
};
