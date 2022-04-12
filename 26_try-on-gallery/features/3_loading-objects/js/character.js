var head2;
function head2() {
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
function hairs2() {
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
function body2() {
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
function clothes2() {
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
function right_hand2() {
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
      right_hand2.scale.set(0.094, 0.094, 0.094);

      // Offset the y position a bit
      right_hand2.position.set(0.102, 0, 0.055)
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
function left_hand2() {
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
      left_hand2.scale.set(0.094, 0.094, 0.094);

      // Offset the y position a bit
      left_hand2.position.set(0.102, 0, 0.055)
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
