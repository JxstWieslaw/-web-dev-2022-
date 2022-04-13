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

export {body_2, head_2, rightLeg2, rightHand2, leftLeg2, leftHand2}