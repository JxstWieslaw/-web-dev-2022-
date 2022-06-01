var cameraFar = 5;
var raycaster, mouse;
const objsToTest = [];
let selectState = false;
let meshContainer, meshes, currentMesh;
const BACKGROUND_COLOR = 0xf1f1f1;
const scene = new THREE.Scene();
scene.background = new THREE.Color(BACKGROUND_COLOR);
scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);
var camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = cameraFar;
camera.position.x = 0;
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

raycaster = new THREE.Raycaster();
mouse = new THREE.Vector2();

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarA
ngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 3;
controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.1;
controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
controls.autoRotateSpeed = 0.2; // 30

// **************************************************************
window.addEventListener("pointermove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener("pointerdown", () => {
  selectState = true;
});

window.addEventListener("pointerup", () => {
  selectState = false;
});

window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener("mousedown", () => {
  selectState = true;
});

window.addEventListener("mouseup", () => {
  selectState = false;
});

window.addEventListener("touchstart", (event) => {
  selectState = true;
  mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener("touchend", () => {
  selectState = false;
  mouse.x = null;
  mouse.y = null;
});

//////////
// Light
//////////

// const light = ShadowedLight( {
// 	z: 10,
// 	width: 6,
// 	bias: -0.0001
// } );

const hemLight = new THREE.HemisphereLight(0x808080, 0x606060);

// scene.add( light, hemLight );
scene.add(hemLight);

////////////////
// Controllers
////////////////

// ********************************************************************

////////////////////
// Primitive Meshes
////////////////////

meshContainer = new THREE.Group();
meshContainer.position.set(0, 0.6, -0);
scene.add(meshContainer);

//

const sphere = new THREE.Mesh(
  new THREE.IcosahedronBufferGeometry(0.3, 1),
  new THREE.MeshStandardMaterial({ color: 0x3de364, flatShading: true })
);

const box = new THREE.Mesh(
  new THREE.BoxBufferGeometry(0.45, 0.45, 0.45),
  new THREE.MeshStandardMaterial({ color: 0x643de3, flatShading: true })
);

const cone = new THREE.Mesh(
  new THREE.ConeBufferGeometry(0.28, 0.5, 10),
  new THREE.MeshStandardMaterial({ color: 0xe33d4e, flatShading: true })
);

sphere.visible = box.visible = cone.visible = false;

meshContainer.add(sphere, box, cone);

meshes = [sphere, box, cone];
currentMesh = 0;

showMesh(currentMesh);

// var sports;
// function sports_2() {
//   const group = new THREE.Group();
//   // Init the object loader
//   var loader = new THREE.GLTFLoader();
//   const MODEL_PATH =
//     "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/Sports%20Hall1.glb?v=1653658828442";
//   loader.load(
//     MODEL_PATH,
//     function (gltf) {
//       sports = gltf.scene;
//       // traverse and add ability to cast and receive shadows to each object in 3D model
//       sports.traverse((o) => {
//         if (o.isMesh) {
//           o.castShadow = true;
//           o.receiveShadow = true;
//         }
//       });

//       // Set the models initial scale
//       sports.scale.set(15, 15, 15);

//       // Offset the y position a bit
//       sports.position.set(1, -1, 0);
//       // // Add the model to the Three.Group()
//       group.add(sports);
//     },
//     undefined,
//     function (error) {
//       console.error(error);
//     }
//   );
//   // console.log(group)
//   return group;
// }

// scene.add(sports_2)

var head2;
function head_2() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/red_ball.glb?v=1653656793087";
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
      head2.scale.set(15, 15, 15);

      // Offset the y position a bit
      head2.position.set(1, -1, 0);
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

var right_hand2;
function rightHand2() {
  const group = new THREE.Group();
  // Init the object loader
  var loader = new THREE.GLTFLoader();
  const MODEL_PATH =
    "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/blue_ball.glb?v=1653656789474";
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
      right_hand2.scale.set(15, 15, 15);

      // Offset the y position a bit
      right_hand2.position.set(-1, -1, 0);
      // // Add the model to the Three.Group()
      group.add(right_hand2);
      group.name = "right-hand";
      // console.log(group)
      // console.log(group.name)
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // console.log(group)
  return group;
}

// ***********************************************************************

// /////////
// // Room
// /////////

// const room = new THREE.LineSegments(
// 	new BoxLineGeometry( 6, 6, 6, 10, 10, 10 ).translate( 0, 3, 0 ),
// 	new THREE.LineBasicMaterial( { color: 0x808080 } )
// );

// const roomMesh = new THREE.Mesh(
// 	new THREE.BoxGeometry( 6, 6, 6, 10, 10, 10 ).translate( 0, 3, 0 ),
// 	new THREE.MeshBasicMaterial( { side: THREE.BackSide } )
// );

// scene.add( room );
// objsToTest.push( roomMesh );

// ************************************************************************
const textBlock = new ThreeMeshUI.Block({
  height: 0.4,
  width: 0.8,
  margin: 0.05,
});

makeUI();
var container;
function makeUI() {
  container = new ThreeMeshUI.Block({
    height: 1.5,
    width: 1,
    backgroundOpacity: 0,
  });
  container.visible = false;
  //   container.position.set(-1.8, 1.5, 0);
  //   container.position.set(1, 1, 0);
  //   container.rotation.x = -;
  scene.add(container);

  //

  const imageBlock = new ThreeMeshUI.Block({
    height: 1,
    width: 1,
  });

  const textBlock = new ThreeMeshUI.Block({
    height: 0.4,
    width: 0.8,
    margin: 0.05,
  });

  const buttonBlock = new ThreeMeshUI.Block({
    justifyContent: "center",
    contentDirection: "row-reverse",
    fontFamily: "../assets/Roboto-msdf.json",
    fontTexture: "../assets/Roboto-msdf.png",
    fontSize: 0.07,
    padding: 0.02,
    borderRadius: 0.11,
  });

  container.add(imageBlock, textBlock, buttonBlock);

  // BUTTONS

  // We start by creating objects containing options that we will use with the two buttons,
  // in order to write less code.

  const buttonOptions = {
    width: 0.4,
    height: 0.15,
    justifyContent: "center",
    offset: 0.05,
    margin: 0.02,
    borderRadius: 0.075,
  };

  // Options for component.setupState().
  // It must contain a 'state' parameter, which you will refer to with component.setState( 'name-of-the-state' ).

  const hoveredStateAttributes = {
    state: "hovered",
    attributes: {
      offset: 0.035,
      backgroundColor: new THREE.Color(0x999999),
      backgroundOpacity: 1,
      fontColor: new THREE.Color(0xffffff),
    },
  };

  const idleStateAttributes = {
    state: "idle",
    attributes: {
      offset: 0.035,
      backgroundColor: new THREE.Color(0x666666),
      backgroundOpacity: 0.3,
      fontColor: new THREE.Color(0xffffff),
    },
  };

  // Buttons creation, with the options objects passed in parameters.

  const buttonNext = new ThreeMeshUI.Block(buttonOptions);
  const buttonPrevious = new ThreeMeshUI.Block(buttonOptions);

  // Add text to buttons

  buttonNext.add(new ThreeMeshUI.Text({ content: "next" }));

  buttonPrevious.add(new ThreeMeshUI.Text({ content: "previous" }));

  // Create states for the buttons.
  // In the loop, we will call component.setState( 'state-name' ) when mouse hover or click

  const selectedAttributes = {
    offset: 0.02,
    backgroundColor: new THREE.Color(0x777777),
    fontColor: new THREE.Color(0x222222),
  };

  buttonNext.setupState({
    state: "selected",
    attributes: selectedAttributes,
    onSet: () => {
      currentMesh = (currentMesh + 1) % 3;
      showMesh(currentMesh);
    },
  });
  buttonNext.setupState(hoveredStateAttributes);
  buttonNext.setupState(idleStateAttributes);

  //

  buttonPrevious.setupState({
    state: "selected",
    attributes: selectedAttributes,
    onSet: () => {
      currentMesh -= 1;
      if (currentMesh < 0) currentMesh = 2;
      showMesh(currentMesh);
    },
  });
  buttonPrevious.setupState(hoveredStateAttributes);
  buttonPrevious.setupState(idleStateAttributes);

  //

  buttonBlock.add(buttonNext, buttonPrevious);
  objsToTest.push(buttonNext, buttonPrevious);

  const loader = new THREE.TextureLoader();

  loader.load("../assets/spiny_bush_viper.jpg", (texture) => {
    imageBlock.set({ backgroundTexture: texture });
  });

  //

  container.set({
    fontFamily: "../assets/Roboto-msdf.json",
    fontTexture: "../assets/Roboto-msdf.png",
  });

  const text = new ThreeMeshUI.Text({
    content:
      "The spiny bush viper is known for its extremely keeled dorsal scales.",
  });

  textBlock.add(text);

  //

  text.set({
    fontColor: new THREE.Color(0xd2ffbd),
    fontSize: 0.06,
  });

  textBlock.set({
    textAlign: "right",
    justifyContent: "end",
    padding: 0.03,
  });

  //

  textBlock.add(
    new ThreeMeshUI.Text({
      content: " Mind your fingers.",
      fontSize: 0.07,
      fontColor: new THREE.Color(0xefffe8),
    })
  );
}

// Shows the primitive mesh with the passed ID and hide the others

function showMesh(id) {
  meshes.forEach((mesh, i) => {
    mesh.visible = i === id ? true : false;
  });
}

renderer.domElement.addEventListener("click", onClick, false);

function onClick(event) {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    if (intersects[0].object.name === "red_ball") {
      container.position.set(1, 0.5, 0);
      container.visible = true;
    }

    if (intersects[0].object.name === "blue_ball") {
      container.position.set(-1, 0.5, 0);
      container.visible = true;
    }

    // window.removeEventListener("pointermove", (event) => {
    //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    //   });

    //   window.removeEventListener("pointerdown", () => {
    //     selectState = true;
    //   });

    //   window.removeEventListener("pointerup", () => {
    //     selectState = false;
    //   });

    //   window.removeEventListener("touchstart", (event) => {
    //     selectState = true;
    //     mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
    //     mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
    //   });

    //   window.removeEventListener("touchend", () => {
    //     selectState = false;
    //     mouse.x = null;
    //     mouse.y = null;
    //   });
    console.log(intersects);
    // console.log(scene.children);
  }
}

// **********************************************************************
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

function addHead() {
  scene.add(head_2());
  scene.add(rightHand2());
}

function animate() {
  controls.update();

  meshContainer.rotation.z += 0.01;
  meshContainer.rotation.y += 0.01;

  ThreeMeshUI.update();
  renderer.render(scene, camera);

  updateButtons();

  //   stats.update();
  requestAnimationFrame(animate);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
}

// Called in the loop, get intersection with either the mouse or the VR controllers,
// then update the buttons states according to result

function updateButtons() {
  // Find closest intersecting object

  let intersect;

  if (renderer.xr.isPresenting) {
    vrControl.setFromController(0, raycaster.ray);

    intersect = raycast();

    // Position the little white dot at the end of the controller pointing ray
    if (intersect) vrControl.setPointerAt(0, intersect.point);
  } else if (mouse.x !== null && mouse.y !== null) {
    raycaster.setFromCamera(mouse, camera);

    intersect = raycast();
  }

  // Update targeted button state (if any)

  if (intersect && intersect.object.isUI) {
    if (selectState) {
      // Component.setState internally call component.set with the options you defined in component.setupState
      intersect.object.setState("selected");
    } else {
      // Component.setState internally call component.set with the options you defined in component.setupState
      intersect.object.setState("hovered");
    }
  }

  // Update non-targeted buttons state

  objsToTest.forEach((obj) => {
    if ((!intersect || obj !== intersect.object) && obj.isUI) {
      // Component.setState internally call component.set with the options you defined in component.setupState
      obj.setState("idle");
    }
  });
}

//

function raycast() {
  return objsToTest.reduce((closestIntersection, obj) => {
    const intersection = raycaster.intersectObject(obj, true);

    if (!intersection[0]) return closestIntersection;

    if (
      !closestIntersection ||
      intersection[0].distance < closestIntersection.distance
    ) {
      intersection[0].object = obj;

      return intersection[0];
    }

    return closestIntersection;
  }, null);
}

addHead();
animate();
