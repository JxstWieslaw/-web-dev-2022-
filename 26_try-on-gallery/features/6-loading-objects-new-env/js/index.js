const TRAY = document.getElementById("js-tray-slide");

const OBJECTS = document.getElementById("js-objects-slide");

const colors = [
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/wood_.jpg?v=1649144910756",
    size: [2, 2, 2],
    shininess: 60,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/fabric_.jpg?v=1649144905001",
    size: [4, 4, 4],
    shininess: 0,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/pattern_.jpg?v=1649144906757",
    size: [8, 8, 8],
    shininess: 10,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/denim_.jpg?v=1649144904412",
    size: [3, 3, 3],
    shininess: 0,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/quilt_.jpg?v=1649144908805",
    size: [6, 6, 6],
    shininess: 0,
  },
  {
    color: "131417",
  },
  {
    color: "374047",
  },
  {
    color: "5f6e78",
  },
  {
    color: "7f8a93",
  },
  {
    color: "97a1a7",
  },
  {
    color: "acb4b9",
  },
  {
    color: "DF9998",
  },
  {
    color: "7C6862",
  },
  {
    color: "A3AB84",
  },
  {
    color: "D6CCB1",
  },
  {
    color: "F8D5C4",
  },
  {
    color: "A3AE99",
  },
  {
    color: "EFF2F2",
  },
  {
    color: "B0C5C1",
  },
  {
    color: "8B8C8C",
  },
  {
    color: "565F59",
  },
  {
    color: "CB304A",
  },
  {
    color: "FED7C8",
  },
  {
    color: "C7BDBD",
  },
  {
    color: "3DCBBE",
  },
  {
    color: "264B4F",
  },
  {
    color: "389389",
  },
  {
    color: "85BEAE",
  },
  {
    color: "F2DABA",
  },
  {
    color: "F2A97F",
  },
  {
    color: "D85F52",
  },
  {
    color: "D92E37",
  },
  {
    color: "FC9736",
  },
  {
    color: "F7BD69",
  },
  {
    color: "A4D09C",
  },
  {
    color: "4C8A67",
  },
  {
    color: "25608A",
  },
  {
    color: "75C8C6",
  },
  {
    color: "F5E4B7",
  },
  {
    color: "E69041",
  },
  {
    color: "E56013",
  },
  {
    color: "11101D",
  },
  {
    color: "630609",
  },
  {
    color: "C9240E",
  },
  {
    color: "EC4B17",
  },
  {
    color: "281A1C",
  },
  {
    color: "4F556F",
  },
  {
    color: "64739B",
  },
  {
    color: "CDBAC7",
  },
  {
    color: "946F43",
  },
  {
    color: "66533C",
  },
  {
    color: "173A2F",
  },
  {
    color: "153944",
  },
  {
    color: "27548D",
  },
  {
    color: "438AAC",
  },
];

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

// Init the object loader
var loader = new THREE.GLTFLoader();

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


//Objects for model 1
var left_hand1;
function leftHand1() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/left%20hand1.glb?v=1649414718432";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      left_hand1 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      left_hand1.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      left_hand1.scale.set(0.188, 0.188, 0.188);

      // Offset the y position a bit
      left_hand1.position.set(0.102, -1, 0.055);

      // for (let object of INITIAL_MAP) {
      //   initColor(left_hand1, object.childID, object.mtl);
      // }
      // // Add the model to the Three.Group()
      group.add(left_hand1);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

var right_hand1;
function rightHand1() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/right%20hand1.glb?v=1649414724271";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      right_hand1 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      right_hand1.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      right_hand1.scale.set(0.188, 0.188, 0.188);

      // Offset the y position a bit
      right_hand1.position.set(0.102, -1, 0.055);
      // // Add the model to the Three.Group()
      group.add(right_hand1);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

//Remaining objects for the model
var left_leg1;
function leftLeg1() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/left%20leg1.glb?v=1649414721554";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      left_leg1 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      left_leg1.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      left_leg1.scale.set(0.188, 0.188, 0.188);

      // Offset the y position a bit
      left_leg1.position.set(0.102, -1, 0.055);
      // // Add the model to the Three.Group()
      group.add(left_leg1);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

var right_leg1;
function rightLeg1() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/right%20leg1.glb?v=1649414728156";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      right_leg1 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      right_leg1.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      right_leg1.scale.set(0.188, 0.188, 0.188);

      // Offset the y position a bit
      right_leg1.position.set(0.102, -1, 0.055);
      // // Add the model to the Three.Group()
      group.add(right_leg1);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

var head1;
function head_1() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/head%201.glb?v=1649414715714";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      head1 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      head1.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      head1.scale.set(0.188, 0.188, 0.188);

      // Offset the y position a bit
      head1.position.set(0.102, -1, 0.055);
      // // Add the model to the Three.Group()
      group.add(head1);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

var body1;
function body_1() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/body1.glb?v=1649414698793";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      body1 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      body1.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      body1.scale.set(0.188, 0.188, 0.188);

      // Offset the y position a bit
      body1.position.set(0.102, -1, 0.055);
      // // Add the model to the Three.Group()
      group.add(body1);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(goup)
  return group;
}

//End of remaining objects

//Objects for model 2
var right_hand2;
function rightHand2() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/right_hand2.glb?v=1649415822079";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      right_hand2 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      right_hand2.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      right_hand2.scale.set(2, 2, 2);

      // Offset the y position a bit
      right_hand2.position.set(0, -1, 0);
      // // Add the model to the Three.Group()
      group.add(right_hand2);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}


var left_hand2;
function leftHand2() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/left_hand2.glb?v=1649415836910";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      left_hand2 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      left_hand2.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      left_hand2.scale.set(2, 2, 2);

      // Offset the y position a bit
      left_hand2.position.set(0, -1, 0);
      // // Add the model to the Three.Group()
      group.add(left_hand2);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

//Remaining objects for the model
var left_leg2;
function leftLeg2() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/left_leg2.glb?v=1649415836910";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      left_leg2 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      left_leg2.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      left_leg2.scale.set(2, 2, 2);

      // Offset the y position a bit
      left_leg2.position.set(0, -1, 0);
      // // Add the model to the Three.Group()
      group.add(left_leg2);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

var right_leg2;
function rightLeg2() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/right_leg2.glb?v=1649415836910";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      right_leg2 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      right_leg2.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      right_leg2.scale.set(2, 2, 2);

      // Offset the y position a bit
      right_leg2.position.set(0, -1, 0);
      // // Add the model to the Three.Group()
      group.add(right_leg2);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

var head2;
function head_2() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/head2.glb?v=1649415811382";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      head2 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      head2.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      head2.scale.set(2, 2, 2);

      // Offset the y position a bit
      head2.position.set(0, -1, 0);
      // // Add the model to the Three.Group()
      group.add(head2);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

var body2;
function body_2() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/body2.glb?v=1649415813230";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      body2 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      body2.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      body2.scale.set(2, 2, 2);

      // Offset the y position a bit
      body2.position.set(0, -1, 0);
      // // Add the model to the Three.Group()
      group.add(body2);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

//End of remaining objects

// Function - Build Colors
function buildColors(colors) {
  for (let [i, color] of colors.entries()) {
    let swatch = document.createElement("div");
    swatch.classList.add("tray__swatch");

    if (color.texture) {
      swatch.style.backgroundImage = "url(" + color.texture + ")";
    } else {
      swatch.style.background = "#" + color.color;
    }

    swatch.setAttribute("data-key", i);
    TRAY.append(swatch);
  }
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
  appliedRightHand.name="right-hand"
  scene.add(appliedRightHand);
}

function addLeftHand() {
  appliedLeftHand.name="light-hand"
  scene.add(appliedLeftHand);
}

// function addRightLeg() {
//   scene.add(appliedRightLeg);
// }

// function addLeftLeg() {
//   scene.add(appliedLeftLeg);
// }

function addHead() {
  appliedHead.name="head"
  scene.add(appliedHead);
}

function addBody() {
  appliedBody.name="body"
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
  console.log(scene.children)
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
  console.log(scene.children)
}

animate();
draw();
console.log(scene.children)

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
