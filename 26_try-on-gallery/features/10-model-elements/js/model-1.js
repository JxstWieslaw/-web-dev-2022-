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

export {rightHand1, rightLeg1, leftHand1, leftLeg1, body_1, head_1}