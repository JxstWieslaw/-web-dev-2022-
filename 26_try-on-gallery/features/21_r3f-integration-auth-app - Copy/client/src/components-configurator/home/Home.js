import "./Home.css";
import * as THREE from "three";
import React,{ Suspense, useRef, useState } from "react";
import { saveAs } from "file-saver";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

//import Swatch components
import { RightHand } from "../objects/RightHand/RightHand";
import { LeftHand } from "../objects/LeftHand/LeftHand";
import { Body } from "../objects/Body/Body";
import { Option } from "../options/ActiveOption";
import { Color } from "../colors/Color";
import { GLTFExporter } from "../exporter/GLTFExporter";
import { Button } from "@material-ui/core";

function Foo({ download, updateClick }) {
  const { scene } = useThree();
  const handleClick = (value) => {
    updateClick(value);
  };
  console.log(download);
  if (download) {
    handleClick(false);
    const exporter = new GLTFExporter();
    exporter.parse(
      scene,
      function (result) {
        saveArrayBuffer(result, scene);
      },
      {
        binary: true, //should be false if you need a GLTF Format file
      }
    );
    console.log(download);
  }
}


function saveArrayBuffer(buffer) {
  const blobURL = URL.createObjectURL(
    new Blob([buffer], { type: "application/octet-stream" })
  );
  const saveFile = () => {
    saveAs(blobURL, "ThreejsScene.glb");
  };
  saveFile();
}
function DownloadBtn({onClick}) {

  return (
    <>
      <Button onClick={onClick} variant="contained" color="primary" >Download GLB</Button>
    </>
  );
}

//Model 1 Objects
function Body1Model({ ...props }) {
  const group = useRef();
  const name = "B1";
  const { nodes, materials } = useGLTF("/body1.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.188}
      position={[0.2, -0.7, 0.1]}
    >
      <mesh
        geometry={nodes.pCube1.geometry}
        material={nodes.pCube1.material}
        position={[-1.05, 5.83, -0.63]}
        material-color={props.color}
      >
        {props.texture !== null && (
          <meshPhongMaterial
            attachArray="material"
            map={props.texture.map}
            shininess={props.texture.shininess}
          />
        )}
        {props.color != null && (
          <meshPhongMaterial
            attachArray="material"
            color={props.color.color}
            shininess={props.color.shininess}
          />
        )}
      </mesh>
    </group>
  );
}

function LeftHand1Model({ ...props }) {
  const group = useRef();
  const name = "LH1";
  const { nodes, materials } = useGLTF("/left_hand1.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.188}
      position={[0.2, -0.8, 0.05]}
    >
      <mesh
        geometry={nodes.polySurface1.geometry}
        material={nodes.polySurface1.material}
        material-color={props.color}
      >
        {props.texture !== null && (
          <meshPhongMaterial
            attachArray="material"
            map={props.texture.map}
            shininess={props.texture.shininess}
          />
        )}
        {props.color != null && (
          <meshPhongMaterial
            attachArray="material"
            color={props.color.color}
            shininess={props.color.shininess}
          />
        )}
      </mesh>
    </group>
  );
}

function RightHand1Model({ ...props }) {
  const group = useRef();
  const name = "RH1";
  const { nodes, materials } = useGLTF("/right_hand1.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.188}
      position={[0.2, -0.8, 0.05]}
    >
      <mesh
        geometry={nodes.polySurface2.geometry}
        material={nodes.polySurface2.material}
        material-color={props.color}
      >
        {props.texture !== null && (
          <meshPhongMaterial
            attachArray="material"
            map={props.texture.map}
            shininess={props.texture.shininess}
          />
        )}
        {props.color != null && (
          <meshPhongMaterial
            attachArray="material"
            color={props.color.color}
            shininess={props.color.shininess}
          />
        )}
      </mesh>
    </group>
  );
}

//Model 2 Objects
function LeftHand2Model({ ...props }) {
  console.log(props.texture + " " + props.color);

  //put the textures and colors into one object
  //full implementation will consist of an exact replica of the logic in the Vanilla App

  const group = useRef();
  const name = "LH2";
  const { nodes, materials } = useGLTF("/left_hand2.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={3}
      position={[0, -2, 0]}
    >
      <group position={[0, -0.24, 0]}>
        <group position={[0, 0.24, 0]}>
          <mesh
            geometry={nodes.polySurface3.geometry}
            material={materials.pasted__lambert11}
            // material-color={props.color && colors[props.color].color}
          >
            {props.texture !== null && (
              <meshPhongMaterial
                attachArray="material"
                map={props.texture.map}
                shininess={props.texture.shininess}
              />
            )}
            {props.color != null && (
              <meshPhongMaterial
                attachArray="material"
                color={props.color.color}
                shininess={props.color.shininess}
              />
            )}
          </mesh>
        </group>
      </group>
    </group>
  );
}

function RightHand2Model({ ...props }) {
  const group = useRef();
  const name = "RH2";
  const { nodes, materials } = useGLTF("/right_hand2.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={3}
      position={[0, -2, 0]}
    >
      <group position={[0, -0.24, 0]}>
        <group position={[0, 0.24, 0]}>
          <mesh
            geometry={nodes.polySurface1.geometry}
            material={materials.pasted__lambert11}
            material-color={props.color}
          >
            {props.texture !== null && (
              <meshPhongMaterial
                attachArray="material"
                map={props.texture.map}
                shininess={props.texture.shininess}
              />
            )}
            {props.color != null && (
              <meshPhongMaterial
                attachArray="material"
                color={props.color.color}
                shininess={props.color.shininess}
              />
            )}
          </mesh>
        </group>
      </group>
    </group>
  );
}

function Body2Model({ ...props }) {
  const group = useRef();
  const name = "B2";
  const { nodes, materials } = useGLTF("/body2.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={3}
      position={[0, -2, 0]}
    >
      <group position={[0, -0.24, 0]}>
        <group position={[0, 0.24, 0]}>
          <mesh
            geometry={nodes.polySurface8.geometry}
            material={materials.pasted__lambert11}
            material-color={props.color}
          >
            {props.texture !== null && (
              <meshPhongMaterial
                attachArray="material"
                map={props.texture.map}
                shininess={props.texture.shininess}
              />
            )}
            {props.color != null && (
              <meshPhongMaterial
                attachArray="material"
                color={props.color.color}
                shininess={props.color.shininess}
              />
            )}
          </mesh>
        </group>
      </group>
    </group>
  );
}

function Configurator() {
  const [activeOption, setActiveOption] = useState(0);
  const [appliedRightHand, setAppliedRightHand] = useState("RH2");
  const [appliedLeftHand, setAppliedLeftHand] = useState("LH2");
  const [appliedBody, setAppliedBody] = useState("B2");
  const [colorLH2, setColorLH2] = useState(null);
  const [textureLH2, setTextureLH2] = useState(null);
  const [colorRH2, setColorRH2] = useState(null);
  const [textureRH2, setTextureRH2] = useState(null);
  const [colorB2, setColorB2] = useState(null);
  const [textureB2, setTextureB2] = useState(null);
  const [colorRH1, setColorRH1] = useState(null);
  const [textureRH1, setTextureRH1] = useState(null);
  const [colorLH1, setColorLH1] = useState(null);
  const [textureLH1, setTextureLH1] = useState(null);
  const [colorB1, setColorB1] = useState(null);
  const [textureB1, setTextureB1] = useState(null);

  const [clicked, setClicked] = useState(false);
  const updateClick = (value) => {
    setClicked(value);
  };

  const leftHand_Objects = [
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm-colorless.png?v=1650368906398",
      id: "hand1",
      alt_text: "LH1",
    },
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm.png?v=1649487674922",
      id: "hand2",
      alt_text: "LH2",
    },
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/shoulder_arm.png?v=1649487678196",
      id: "hand3",
      alt_text: "LH3",
    },
  ];

  const rightHand_Objects = [
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/left-hand-pic.jpg?v=1650274908577",
      id: "hand1",
      alt_text: "RH1",
    },
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/robot_arm.png?v=1649487682124",
      id: "hand2",
      alt_text: "RH2",
    },
  ];

  const bodyObjects = [
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm.png?v=1649487674922",
      id: "body1",
      alt_text: "B1",
    },
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/shoulder_arm.png?v=1649487678196",
      id: "body2",
      alt_text: "B2",
    },
    {
      icon: "https://cdn.glitch.global/664a87a1-0e47-4a46-87e6-28153d296236/hammer_arm-colorless.png?v=1650368906398",
      id: "body3",
      alt_text: "B3",
    },
  ];

  const optionImages = [
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/legs.svg?v=1649144515701",
      alt_text: "LH",
      data_option: "lefthand",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/cushions.svg?v=1649144499363",
      alt_text: "RH",
      data_option: "righthand",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/base.svg?v=1649144479039",
      alt_text: "BODY",
      data_option: "body",
    },
  ];

  const colors = [
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/wood_.jpg?v=1649144910756",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/fabric_.jpg?v=1649144905001",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/pattern_.jpg?v=1649144906757",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/denim_.jpg?v=1649144904412",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/quilt_.jpg?v=1649144908805",
      color: null,
    },
    {
      color: "#131417",
      texture: null,
    },
    {
      color: "#374047",
      texture: null,
    },
    {
      color: "#5f6e78",
      texture: null,
    },
    {
      color: "#7f8a93",
      texture: null,
    },
  ];

  const colorChange = [
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/wood_.jpg?v=1649144910756"
      ),
      size: [2, 2, 2],
      shininess: 60,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/fabric_.jpg?v=1649144905001"
      ),
      size: [4, 4, 4],
      shininess: 0,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/pattern_.jpg?v=1649144906757"
      ),
      size: [8, 8, 8],
      shininess: 10,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/denim_.jpg?v=1649144904412"
      ),
      size: [3, 3, 3],
      shininess: 0,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/quilt_.jpg?v=1649144908805"
      ),
      size: [6, 6, 6],
      shininess: 0,
    },
    {
      color: "#131417",
    },
    {
      color: "#374047",
    },
    {
      color: "#5f6e78",
    },
    {
      color: "#7f8a93",
    },
  ];

  function handleColorChange(index) {
    let color = colorChange[index];
    let new_mtl;

    if (color.texture) {
      let cur = color.texture;
      cur.repeat.set(color.size[0], color.size[1], color.size[2]);
      cur.wrapS = THREE.RepeatWrapping;
      cur.wrapT = THREE.RepeatWrapping;
      new_mtl = {
        map: cur,
        shininess: color.shininess ? color.shininess : 10,
      };
      if (activeOption === 0) {
        if (appliedRightHand === "RH2") {
          setTextureRH2(new_mtl);
          setColorRH2(null);
        } else if (appliedRightHand === "RH1") {
          setTextureRH1(new_mtl);
          setColorRH1(null);
        }
      } else if (activeOption === 1) {
        if (appliedLeftHand === "LH2") {
          setTextureLH2(new_mtl);
          setColorLH2(null);
        } else if (appliedLeftHand === "LH1") {
          setTextureLH1(new_mtl);
          setColorLH1(null);
        }
      } else if (activeOption === 2) {
        if (appliedBody === "B2") {
          setTextureB2(new_mtl);
          setColorB2(null);
        } else if (appliedBody === "B1") {
          setTextureB1(new_mtl);
          setColorB1(null);
        }
      }
    } else {
      new_mtl = {
        color: color.color,
        shininess: color.shininess ? color.shininess : 10,
      };
      if (activeOption === 0) {
        if (appliedRightHand === "RH2") {
          setColorRH2(new_mtl);
          setTextureRH2(null);
        } else if (appliedRightHand === "RH1") {
          setColorRH1(new_mtl);
          setTextureRH1(null);
        }
      } else if (activeOption === 1) {
        if (appliedLeftHand === "LH2") {
          setColorLH2(new_mtl);
          setTextureLH2(null);
        } else if (appliedLeftHand === "LH1") {
          setColorLH1(new_mtl);
          setTextureLH1(null);
        }
      } else if (activeOption === 2) {
        if (appliedBody === "B2") {
          setColorB2(new_mtl);
          setTextureB2(null);
        } else if (appliedBody === "B1") {
          setColorB1(new_mtl);
          setTextureB1(null);
        }
      }
    }
    console.log(new_mtl);
  }

  const colorMap = function DoSomething() {
    console.log("clicked");
  };

  return (
    <div className="App">
      <div className="change-objects">
        {/* This tray will be filled with the different parts via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
        {/* choices  */}
        <div id="js-objects" className="objects">
          <div id="rightHand" className="objects__slide">
            {/* These toggle the the different parts of the chair that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
            {activeOption === 0 &&
              rightHand_Objects.map((options, index) => (
                <RightHand
                  key={index}
                  options={options}
                  onClick={() => setAppliedRightHand(options.alt_text)}
                />
              ))}
          </div>
          <div id="leftHand" className="objects__slide">
            {activeOption === 1 &&
              leftHand_Objects.map((options, index) => (
                <LeftHand
                  key={index}
                  options={options}
                  onClick={() => setAppliedLeftHand(options.alt_text)}
                />
              ))}
          </div>
          <div id="body" className="objects__slide">
            {activeOption === 2 &&
              bodyObjects.map((options, index) => (
                <Body
                  key={index}
                  options={options}
                  onClick={() => setAppliedBody(options.alt_text)}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="options">
        {optionImages.map((options, index) => (
          <Option
            key={index}
            id={index}
            options={options}
            active={activeOption}
            onClick={() => setActiveOption(index)}
          />
        ))}
      </div>

      <div className="download-btn">
        <DownloadBtn onClick={() => setClicked(true)} />
      </div>

      {/* The Canvas element is used to draw the 3D scene  */}
      <div className="product-canvas">
        <Canvas linear flat>
          <Suspense fallback={null}>
            <Foo updateClick={updateClick} download={clicked} />
            <ambientLight />
            <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            {appliedRightHand === "RH2" ? (
              <RightHand2Model texture={textureRH2} color={colorRH2} />
            ) : (
              <RightHand1Model texture={textureRH1} color={colorRH1} />
            )}
            {appliedLeftHand === "LH2" ? (
              <LeftHand2Model texture={textureLH2} color={colorLH2} />
            ) : (
              <LeftHand1Model texture={textureLH1} color={colorLH1} />
            )}
            {appliedBody === "B2" ? (
              <Body2Model texture={textureB2} color={colorB2} />
            ) : (
              <Body1Model texture={textureB1} color={colorB1} />
            )}

            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="controls">
        {/* This tray will be filled with colors via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
        <div id="js-tray" className="tray">
          <div id="js-tray-slide" className="tray__slide">
            {colors.map((colorOrTexture, index) => (
              <Color
                key={index}
                background={colorOrTexture}
                onClick={() => handleColorChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configurator;
