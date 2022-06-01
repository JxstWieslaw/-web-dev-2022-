const BACKGROUND_COLOR = 0x242424; //0xf1f1f1
var cameraFar = 5;
const scene = new THREE.Scene();
// Set background
scene.background = new THREE.Color(BACKGROUND_COLOR);
scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);
const canvas = document.querySelector("#c");
// Init the renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
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

// Add controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 3;
controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.1;
controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
controls.autoRotateSpeed = 0.2; // 30

// loading the mesh objects

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
      head1.position.set(0.102, -1, 0.055)
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
      body1.position.set(0.102, -1, 0.055)
      // // Add the model to the Three.Group()
      group.add(body1);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}
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
      left_hand1.position.set(0.102, -1, 0.055)
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
      left_leg1.position.set(0.102, -1, 0.055)
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
      right_hand1.position.set(0.102, -1, 0.055)
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
      right_leg1.position.set(0.102, -1, 0.055)
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

//loading the character objects

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
      head2.scale.set(0.094, 0.094, 0.094);

      // Offset the y position a bit
      head2.position.set(0.102, 0, 0.055)
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

var hairs2;
function hairs_2() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hairs2.glb?v=1649415810572";
  loader.load(
    MODEL_PATH,
    function (gltf) {
        hairs2 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      hairs2.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      hairs2.scale.set(0.094, 0.094, 0.094);

      // Offset the y position a bit
      hairs2.position.set(0.102, 0, 0.055)
      // // Add the model to the Three.Group()
      group.add(hairs2);
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
      body2.scale.set(0.094, 0.094, 0.094);

      // Offset the y position a bit
      body2.position.set(0.102, 0, 0.055)
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
var clothes2;
function clothes_2() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/clothes2.glb?v=1649415817136";
  loader.load(
    MODEL_PATH,
    function (gltf) {
        clothes2 = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      clothes2.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      clothes2.scale.set(0.094, 0.094, 0.094);

      // Offset the y position a bit
      clothes2.position.set(0.102, 0, 0.055)
      // // Add the model to the Three.Group()
      group.add(clothes2);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}
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
      right_hand2.position.set(0, -1, 0)
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
      left_hand2.position.set(0, -1, 0)
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


var theModel;
function chair() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/char_black.glb?v=1649400966533";
  loader.load(
    MODEL_PATH,
    function (gltf) {
      theModel = gltf.scene;
      // traverse and add ability to cast and receive shadows to each object in 3D model
      theModel.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      theModel.scale.set(2, 2, 2);

      // The model should face front-wards, so roatate it
      // theModel.rotation.y = Math.PI;

      // Offset the y position a bit
      theModel.position.y = -1;
      // // Add the model to the Three.Group()
      group.add(theModel);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

function cup() {
  var cupModel;
  const group = new THREE.Group()
  const CUP_MODEL_PATH =
    "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/char.glb?v=1649400965633";
  // Init the object loader
  var cupLoader = new THREE.GLTFLoader();

  cupLoader.load(
    CUP_MODEL_PATH,
    function (gltf) {
      cupModel = gltf.scene;
      // console.log(cupModel)

      // Set the models initial scale
      cupModel.scale.set(2, 2, 2);

      // Offset the y position a bit
      cupModel.position.y = -1;

      // Add the model to the Three.Group()
      group.add(cupModel);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  return group;
}



// Customisations
let legOptionsOpen = false;
// let weaponOptionsOpen = false;

//applyedLeg will be default loaded element
// let applyedLeg = chair();
let appliedRightHand = rightHand1();
let appliedLeftHand = leftHand1();
let appliedHead = head_1();
let appliedBody = body_1();
let appliedLeftLeg = leftLeg1();
let appliedRightLeg = rightLeg1();
let appliedClothes = clothes_2();
let appliedHairs = hairs_2();







function toggleLegsMenu() {
  const element = document.querySelector(".leg-choices");
  const signElement = document.querySelector(".add-sign-legs");

  legOptionsOpen = !legOptionsOpen;

  element.style.visibility = legOptionsOpen ? "visible" : "hidden";
  element.style.opacity = legOptionsOpen ? 1 : 0;
  signElement.style.transform = legOptionsOpen
    ? "rotate(45deg)"
    : "rotate(0deg)";
}

// function addLegs() {
//   scene.add(applyedLeg);
// }
function addRightHand() {
  scene.add(appliedRightHand);
}

function addLeftHand() {
  scene.add(appliedLeftHand);
}

function addLeftLeg() {
  scene.add(appliedLeftLeg);
}

function addRightLeg() {
  scene.add(appliedRightLeg);
}

function addHead() {
  scene.add(appliedHead);
}

function addHairs() {
  scene.add(appliedHead);
}

function addClothes() {
  scene.add(appliedClothes);
}

function addBody() {
  scene.add(appliedBody);
}

function applyLegs(value) {
  const legs = {
    0: leftHand1(),
    1: leftHand2(),
  };

  appliedLeftHand = legs[value];
  draw();
}

function draw() {
  scene.remove.apply(scene, scene.children);
  addLights();
  // addLegs();
  addBody();
  addHead();
  addClothes();
  addHairs();
  addLeftHand();
  addRightHand();
  addLeftLeg();
  addRightLeg();
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
