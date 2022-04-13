import {rightHand1, rightLeg1, leftHand1, leftLeg1, body_1, head_1} from './model-1.js'
import {body_2, head_2, rightLeg2, rightHand2, leftLeg2, leftHand2} from './model-2.js'
import {colors,TRAY,buildColors} from './colors-textures-swatch.js';
import {OBJECTS,elements,buildParts} from './objects-swatch.js';

var cameraFar = 5;

var activeOption = "legs";
var loaded = false;

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


// Initial material
const INITIAL_MTL = new THREE.MeshPhongMaterial({
  color: 0xf1f1f1,
  shininess: 10,
});

const INITIAL_MAP = [
  { childID: "back", mtl: INITIAL_MTL },
  { childID: "base", mtl: INITIAL_MTL },
  { childID: "cushions", mtl: INITIAL_MTL },
  { childID: "legs", mtl: INITIAL_MTL },
  { childID: "supports", mtl: INITIAL_MTL },
];



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
  }

  setMaterial(activeOption, new_mtl);
}

let appliedRightHand = rightHand2();
let appliedLeftHand = leftHand2();
// let appliedLeftLeg = leftLeg1();
// let appliedRightLeg = rightLeg1();
let appliedHead = head_2();
let appliedBody = body_2();
// let appliedClothes = clothes1();
// let appliedTop = top_2();
// let appliedBottom = bottom_2();
// let appliedHair = hair_2();


function addRightHand() {
  scene.add(appliedRightHand);
}

function addLeftHand() {
  scene.add(appliedLeftHand);
}

// function addRightLeg() {
//   scene.add(appliedRightLeg);
// }

// function addLeftLeg() {
//   scene.add(appliedLeftLeg);
// }

function addHead() {
  scene.add(appliedHead);
}

function addBody() {
  scene.add(appliedBody);
}

// function addClothes() {
//   scene.add(appliedClothes);
// }

// function addTop() {
//   scene.add(appliedTop);
// }

// function addBottom() {
//   scene.add(appliedBottom);
// }

// function addHair() {
//   scene.add(appliedHair);
// }


function draw() {
  scene.remove.apply(scene, scene.children);
  addLights();
  addFloor();
  addLeftHand();
  addRightHand();
  // addLeftLeg();
  // addRightLeg();
  addHead();
  addBody();
  // addClothes();
  // addTop();
  // addBottom();
  // addHair();
}

// // Function - Add the textures to the models
// function initColor(parent, type, mtl) {
//   parent.traverse((o) => {
//     if (o.isMesh) {
//       if (o.name.includes(type)) {
//         o.material = mtl;
//         o.nameID = type; // Set a new property to identify this object
//       }
//     }
//   });
// }

function addLights() {
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
}

function addFloor() {
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
}

// Add controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 3;
controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.1;
controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
controls.autoRotateSpeed = 0.2; // 30

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

animate();
draw();

// Function - New resizing method
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

//Model Swatches Begins Here

buildParts(elements);
// console.log(OBJECTS)

// Model swatches
const model_swatches = document.querySelectorAll(".objects__swatch");
// console.log(model_swatches)

for (const swatch of model_swatches) {
  swatch.addEventListener("click", selectModelSwatches);
}

function selectModelSwatches(e) {
  const value = parseInt(e.target.dataset.key);
  console.log(parseInt(e.target.dataset.key));

  setObject(value, activeOption);
}

function setObject(value, objectSelected) {
  console.log(objectSelected);
  const leftHands = {
    0: leftHand1(),
    1: leftHand2(),
  };

  const rightHands = {
    0: rightHand2(),
    1: rightHand1(),
  };

  const heads = {
    0: head_2(),
    1: head_1(),
  }

  const rightLegs ={
    0: rightLeg2(),
    1: rightLeg1(),
  }

  const leftLegs ={
    0: leftLeg2(),
    1: leftLeg1(),
  }

  const bodies = {
    0: body_2(),
    1: body_1(),
  }

  // const top = {
  //   0: top_2(),
  //   1: top_1(),
  // }

  // const bottoms = {
  //   0: bottom_2(),
  //   1: bottom_1(),
  // }

  // const hairs = {
  //   0: hair_2(),
  //   1: hair_1(),
  // }

  // const clothes = {
  //   0: clothes_2(),
  //   1: clothes_1(),
  // }

  if (objectSelected === "legs") appliedLeftHand = leftHands[value];
  else if (objectSelected ==="cushions")appliedRightHand = rightHands[value];
  else if (objectSelected ==="base")appliedRightLeg = rightLegs[value];
  else if (objectSelected ==="supports")appliedLeftleg = leftLegs[value];
  else if (objectSelected ==="body")appliedBody = bodies[value];
  else if (objectSelected ==="hair")appliedHair = hair[value];
  else if (objectSelected ==="top")appliedTop = top[value];
  else if (objectSelected ==="clothes")appliedClothes = clothes[value];
  else appliedHead = heads[value];
  draw();
}

// Select Option
const options = document.querySelectorAll(".option");

for (const option of options) {
  // console.log(option);
  option.addEventListener("click", selectOption);
}

function selectOption(e) {
  let option = e.target;
  activeOption = e.target.dataset.option;
  console.log(scene.children[3]);
  // console.log(activeOption)
  for (const otherOption of options) {
    otherOption.classList.remove("--is-active");
  }
  option.classList.add("--is-active");
}

//Model Swatches Log End Here

//setMaterial for setting material on current model configuration
function setMaterial(selectedObject, mtl) {
  var parent;
  if (selectedObject === "legs") {
    parent = scene.children[3];
  } else parent = scene.children[4];
  console.log(parent);
  parent.traverse((o) => {
    if (o.isMesh) {
      o.material = mtl;
    }
  });
}
