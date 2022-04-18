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
import { OBJECTS, elements, buildParts } from "./objects-swatch.js";

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

let appliedRightHand = rightHand2();
// console.log(appliedRightHand)
let appliedLeftHand = leftHand2();
// console.log(appliedLeftHand)
let appliedHead = head_2();
// console.log(appliedHead)
let appliedBody = body_2();
// console.log(appliedBody)

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


  // console.log(scene.children[4])

buildParts(elements);
console.log(scene);

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true
//   }
// ]
// console.log(notes)
// const result = notes.map(note => note.id)
// console.log(result)

// // traverse array  for Object3Ds then see
// const currentScene = scene.children;
// console.log(currentScene);

// const sceneObjects = scene.children.map(obj => obj.name)
// console.log(sceneObjects)
// console.log(sceneObjects)
// mobiles.forEach(mobile => {
//   for (let key in mobile) {
//       console.log(`${key}: ${mobile[key]}`);
//   }
// });
// const result = currentScene.map(object => object.name)
// console.log(result)
// currentScene.forEach((object) => {
//   console.log(object.name);
// });

// Model swatches
const model_swatches = document.querySelectorAll(".objects__swatch");
// console.log(model_swatches)

for (const swatch of model_swatches) {
  swatch.addEventListener("click", selectModelSwatches);
}

function selectModelSwatches(e) {
  const value = parseInt(e.target.dataset.key);
  console.log(parseInt(e.target.dataset.key));

  if (activeOption === "legs") setRightHands(value);
  else setObject(value, activeOption);
}

function setRightHands(value) {
  const rightHands = {
    0: rightHand2(),
    1: rightHand1(),
  };

  appliedRightHand = rightHands[value];
  console.log(scene);
  scene.remove.apply(appliedRightHand, appliedRightHand.children);
  addRightHand();
  console.log(scene);
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
  };

  const rightLegs = {
    0: rightLeg2(),
    1: rightLeg1(),
  };

  const leftLegs = {
    0: leftLeg2(),
    1: leftLeg1(),
  };

  const bodies = {
    0: body_2(),
    1: body_1(),
  };

  if (objectSelected === "legs") appliedLeftHand = leftHands[value];
  else if (objectSelected === "cushions") appliedRightHand = rightHands[value];
  else if (objectSelected === "body") appliedBody = bodies[value];
  else appliedHead = heads[value];
  draw();
}

function addRightHand() {
  appliedRightHand.name = "right-hand";
  console.log(appliedLeftHand)
  scene.add(appliedRightHand);
  console.log(scene.children)
}

function addLeftHand() {
  appliedLeftHand.name = "left-hand";
  scene.add(appliedLeftHand);
}

function addHead() {
  appliedHead.name = "head";
  scene.add(appliedHead);
}

function addBody() {
  appliedBody.name = "body";
  scene.add(appliedBody);
}

function draw() {
  scene.remove.apply(scene, scene.children);
  addLights();
  addFloor();
  addLeftHand();
  addRightHand();
  addHead();
  addBody();
}

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

function delete3DOBJ(objName){
    var selectedObject = scene.getObjectByName(objName);
    scene.remove( selectedObject );
    animate();
}

console.log(scene.children)
animate();
draw();
console.log(appliedLeftHand.geometry)
appliedLeftHand.parent.remove(appliedLeftHand)
appliedBody.parent.remove(appliedBody)
console.log(scene.children)
// scene.remove( scene.getObjectByName("right-hand"));
// delete3DOBJ("right-hand");
// 0
// console.log(scene.getObjectByName('right-hand'));
// scene.remove(scene.children[4])
// console.log(scene)
// scene.add(rightHand1())
// console.log(scene.getObjectByProperty('uuid',7285728))

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

// function applyWeapon(value) {
//   const weapons = {
//     0: axe(),
//     1: sword(),
//   };

//   scene.remove.apply(applyedWeapon, applyedWeapon.children);

//   applyedWeapon = weapons[value];
//   addWeapon();
// }
