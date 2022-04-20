import {
  buildCushionSwatch,
  buildLegSwatch,
  rightHand_Objects,
  leftHand_Objects,
} from "./objects-swatch.js";

buildCushionSwatch(leftHand_Objects);
buildLegSwatch(rightHand_Objects);


var activeOption = "legs";

const leg_swatch = document.querySelectorAll(".leg__objects__swatch");
const cushion_swatch = document.querySelectorAll(".cushion__objects__swatch");
const objects_swatch = document.querySelectorAll(".objects__slide");
console.log(leg_swatch);
console.log(cushion_swatch);
console.log(objects_swatch);

// Select Option
const options = document.querySelectorAll(".option");

for (const option of options) {
  // console.log(option);
  option.addEventListener("click", selectOption);
}

function selectOption(e) {
  let option = e.target;
  activeOption = e.target.dataset.option;
  console.log(activeOption);
  //   console.log(OBJECTS);
  objects_swatch.forEach((node) => {
    console.log(node.dataset.key);
    node.style.display = "none";
  });
  if (activeOption === "cushions") objects_swatch[1].style.display = "flex";
  else if (activeOption === "legs") objects_swatch[0].style.display = "flex";

  for (const otherOption of options) {
    otherOption.classList.remove("--is-active");
  }
  option.classList.add("--is-active");
}


for (const swatch of leg_swatch) {
  swatch.addEventListener("click", selectModelSwatches);
}

for (const swatch of cushion_swatch) {
    swatch.addEventListener("click", selectModelSwatches);
}

function selectModelSwatches(e) {
  const value = parseInt(e.target.dataset.key);
  console.log(parseInt(e.target.dataset.key));

//   if (activeOption === "legs") setRightHands(value);
//   else if (activeOption === "cushions") setLeftHands(value);
}
