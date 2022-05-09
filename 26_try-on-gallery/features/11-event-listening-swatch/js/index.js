/**********************************************************************************************/
//Imports and dependencies
import {
  rightHand1,
  rightLeg1,
  leftHand1,
  leftLeg1,
  body_1,
  head_1,
} from "./model-1.js";
import {
  body_2,
  head_2,
  rightLeg2,
  rightHand2,
  leftLeg2,
  leftHand2,
} from "./model-2.js";
import { colors, TRAY, buildColors } from "./colors-textures-swatch.js";
import {
  buildCushionSwatch,
  buildLegSwatch,
  rightHand_Objects,
  leftHand_Objects,
} from "./objects-swatch.js";

/**********************************************************************************************/
//Environment and Set Up

var cameraFar = 5;

var initialModel = false;

const BACKGROUND_COLOR = 0xf1f1f1;

// Init the scene
const scene = new THREE.Scene();

//Set background
scene.background = new THREE.Color(BACKGROUND_COLOR);
scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);

const canvas = document.querySelector("#c");

// Init the renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

// Add a camera
var camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = cameraFar;
camera.position.x = 0;

/**********************************************************************************************/
// Add lights

var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
hemiLight.position.set(0, 50, 0);
// Add hemisphere light to scene
scene.add(hemiLight);

var dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
dirLight.position.set(-8, 12, 8);
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
// Add directional Light to scene
scene.add(dirLight);

// Floor
var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
var floorMaterial = new THREE.MeshPhongMaterial({
  color: 0xeeeeee,
  shininess: 0,
});

var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -0.5 * Math.PI;
floor.receiveShadow = true;
floor.position.y = -1;
scene.add(floor);

/**********************************************************************************************/

const currentConfig = {
  right_hand: 0,
  left_hand: 0,
};

let appliedRightHand = rightHand2();
// console.log(appliedRightHand)
let appliedLeftHand = leftHand2();
// console.log(appliedLeftHand)
let appliedHead = head_2();
// console.log(appliedHead)
let appliedBody = body_2();
// console.log(appliedBody)

/**********************************************************************************************/

var activeOption = "legs";

buildCushionSwatch(leftHand_Objects);
buildLegSwatch(rightHand_Objects);

const leg_swatch = document.querySelectorAll(".leg__objects__swatch");
const cushion_swatch = document.querySelectorAll(".cushion__objects__swatch");
const objects_swatch = document.querySelectorAll(".objects__slide");
console.log(leg_swatch);
console.log(cushion_swatch);
console.log(objects_swatch);
/**********************************************************************************************/
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
  if (activeOption === "cushions")
    objects_swatch[1].style.display = "flex";
  else if (activeOption === "legs") objects_swatch[0].style.display = "flex";

  for (const otherOption of options) {
    otherOption.classList.remove("--is-active");
  }
  option.classList.add("--is-active");
}

/**********************************************************************************************/
buildColors(colors);
// Color and Texture Swatches
const color_swatches = document.querySelectorAll(".tray__swatch");

for (const swatch of color_swatches) {
  swatch.addEventListener("click", selectColorSwatch);
}

function selectColorSwatch(e) {
  let color = colors[parseInt(e.target.dataset.key)];
  let new_mtl;

  if (color.texture) {
    let txt = new THREE.TextureLoader().load(color.texture);

    txt.repeat.set(color.size[0], color.size[1], color.size[2]);
    txt.wrapS = THREE.RepeatWrapping;
    txt.wrapT = THREE.RepeatWrapping;

    new_mtl = new THREE.MeshPhongMaterial({
      map: txt,
      shininess: color.shininess ? color.shininess : 10,
    });
  } else {
    new_mtl = new THREE.MeshPhongMaterial({
      color: parseInt("0x" + color.color),
      shininess: color.shininess ? color.shininess : 10,
    });
    console.log(new_mtl.color)
  }
  
  setMaterial(activeOption, new_mtl);
}

//setMaterial for setting material on current model configuration
function setMaterial(selectedObject, mtl) {
  var parent;
  if (selectedObject === "legs") parent = appliedRightHand;
  else if (selectedObject === "cushions") parent = appliedLeftHand;
  parent.traverse((o) => {
    if (o.isMesh) {
      o.material = mtl;
    }
  });
}

/**********************************************************************************************/
// Model swatches

for (const swatch of leg_swatch) {
  swatch.addEventListener("click", selectModelSwatches);
}

for (const swatch of cushion_swatch) {
    swatch.addEventListener("click", selectModelSwatches);
}

function selectModelSwatches(e) {
  const value = parseInt(e.target.dataset.key);
  console.log(parseInt(e.target.dataset.key));

  if (activeOption === "legs") setRightHands(value);
  else if (activeOption === "cushions") setLeftHands(value);
}

/**********************************************************************************************/

function setRightHands(value) {
  const rightHands = {
    0: rightHand2(),
    1: rightHand1(),
  };

  console.log(scene.children);
  if (currentConfig.right_hand !== value) {
    appliedRightHand.parent.remove(appliedRightHand);
    appliedRightHand = rightHands[value];
    currentConfig.right_hand = value;
    addRightHand();
  }
  console.log(scene.children);
}

function addRightHand() {
  appliedRightHand.name = "right-hand";
  console.log(appliedLeftHand);
  scene.add(appliedRightHand);
}

/**********************************************************************************************/

function setLeftHands(value) {
  const leftHands = {
    0: leftHand2(),
    1: leftHand1(),
  };

  console.log(scene.children);
  if (currentConfig.left_hand !== value) {
    appliedLeftHand.parent.remove(appliedLeftHand);
    appliedLeftHand = leftHands[value];
    currentConfig.left_hand = value;
    addLeftHand();
  }
  console.log(scene.children);
}

function addLeftHand() {
  appliedLeftHand.name = "left-hand";
  scene.add(appliedLeftHand);
}

/**********************************************************************************************/

function addHead() {
  appliedHead.name = "head";
  scene.add(appliedHead);
}

function addBody() {
  appliedBody.name = "body";
  scene.add(appliedBody);
}
console.log(appliedRightHand)

/**********************************************************************************************/

// function addObjectsSwatch(selectedParts) {
//   buildParts(selectedParts);
// }

function initialLoad() {
  console.log(initialModel);
  if (!initialModel) {
    addRightHand();
    addLeftHand();
    addHead();
    addBody();
    // addObjectsSwatch(rightHand_Objects);
    // const model = document.querySelectorAll(".objects__swatch");
    // console.log(model)
  }
  initialModel = true;
  console.log(initialModel);
}
initialLoad();

/**********************************************************************************************/
// Add controls

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 3;
controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.1;
controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
controls.autoRotateSpeed = 0.2; // 30

/**********************************************************************************************/

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
}

// Function - New resizing
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

animate();

/**********************************************************************************************/
