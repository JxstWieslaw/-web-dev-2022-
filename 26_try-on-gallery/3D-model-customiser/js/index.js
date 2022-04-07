var theModel;
const MODEL_PATH =
  "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/chair.glb?v=1649140664720";

const BACKGROUND_COLOR = 0xf1f1f1;
var cameraFar = 5;
const scene = new THREE.Scene();
// Set background
scene.background = new THREE.Color(BACKGROUND_COLOR);
scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);
const canvas = document.querySelector("#c");
// Init the renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
document.body.appendChild(renderer.domElement);

const CHILD_OBJECTS = ["back", "base", "cushions", "legs", "supports"];

var cupModel;
const CUP_MODEL_PATH =
  "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/cup_01.glb?v=1649153966297";

// Init the object loader
var loader = new THREE.GLTFLoader();

// Init the object loader
var cupLoader = new THREE.GLTFLoader();

cupLoader.load(
  CUP_MODEL_PATH,
  function (gltf) {
    cupModel = gltf.scene;

    // Set the models initial scale
    cupModel.scale.set(2, 2, 2);

    // Offset the y position a bit
    cupModel.position.y = -1;

    removeCupObjects(replace);

    // Add the model to the scene
    scene.add(cupModel);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

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

    for (let object of CHILD_OBJECTS) {
      removeChairObjects(theModel, cupModel, object);
    }
    // Set the models initial scale
    theModel.scale.set(2, 2, 2);

    // The model should face front-wards, so roatate it
    theModel.rotation.y = Math.PI;

    // Offset the y position a bit
    theModel.position.y = -1;

    // Add the model to the scene
    scene.add(theModel);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

function removeCupObjects(replace) {
  replace.traverse((o) => {
    if (o.isMesh) {
      o.visible = true;
    }
  });
}


function removeChairObjects(parent, replace, element) {
  parent.traverse((o) => {
    if (o.isMesh) {
      if (o.name === "cushions") {
        const x_pos = o.position.x;
        const y_pos = o.position.y;
        const z_pos = o.position.z;

        // replace.position.x = x_pos;
        // replace.position.y = y_pos;
        // replace.position.z = z_pos;

        // replace.visible = true

        // replace.traverse((r) => {
        //     if(r.isMesh) {
        //         if(r.name === "saucer") {
        //             r.visible = true
        //         }               
        //     }
        // });
        console.log("element exists", element); // runs a call to remove the legs
        o.visible = false;
      }
    }
  });
}

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
