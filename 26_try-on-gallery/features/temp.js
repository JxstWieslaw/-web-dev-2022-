import "./App.css";
import "./index.css";
import { Suspense, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


//import Swatch components
import { RightHand } from "./components/objects/RightHand/RightHand";
import { LeftHand } from "./components/objects/LeftHand/LeftHand";
import { Body } from "./components/objects/Body/Body";
import { Option } from "./components/options/ActiveOption";
import { Color } from "./components/colors/Color";

function Foo() {
  const { scene } = useThree();
  console.log(scene.children);
}

//Model 1 Objects
function Body1Model({ ...props }) {
  const group = useRef();
  const name="B1"
  const { nodes, materials } = useGLTF("/body1.glb");
  return (
    <group name={name}
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
      />
    </group>
  );
}


function LeftHand1Model({ ...props }) {
  const group = useRef();
  const name="LH1"
  const { nodes, materials } = useGLTF("/left_hand1.glb");
  return (
    <group name={name}
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
      />
    </group>
  );
}

function RightHand1Model({ ...props }) {
  const group = useRef();
  const name ="RH1"
  const { nodes, materials } = useGLTF("/right_hand1.glb");
  return (
    <group name={name}
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
      />
    </group>
  );
}

//Model 2 Objects
function LeftHand2Model({ ...props }) {
  const group = useRef();
  const name = "LH2"
  const { nodes, materials } = useGLTF("/left_hand2.glb");
  return (
    <group name={name}
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
            material-color={props.color}
          />
        </group>
      </group>
    </group>
  );
}


function RightHand2Model({ ...props }) {
  const group = useRef();
  const name ="RH2"
  const { nodes, materials } = useGLTF("/right_hand2.glb");
  return (
    <group name={name}
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
          />
        </group>
      </group>
    </group>
  );
}


function Body2Model({ ...props }) {
  const group = useRef();
  const name="B2"
  const { nodes, materials } = useGLTF("/body2.glb");
  return (
    <group name={name}
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
          />
        </group>
      </group>
    </group>
  );
}

function App() {
  const [activeOption, setActiveOption] = useState(0);
  const [appliedRightHand, setAppliedRightHand] = useState("RH2");
  const [appliedLeftHand, setAppliedLeftHand] = useState("LH2");
  const [appliedBody, setAppliedBody] = useState("B2");
  const [colorRH1,setColorRH1] = useState();
  const [colorLH1,setColorLH1] = useState();
  const [colorB1,setColorB1] = useState();
  const [colorRH2,setColorRH2] = useState();
  const [colorLH2,setColorLH2] = useState();
  const [colorB2,setColorB2] = useState();

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

  function DoSomething() {
    console.log("clicked");
  }
  return (
    <div className="App">
      <div className="change-objects">
        {/* This tray will be filled with the different parts via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
        {/* choices  */}
        <div id="js-objects" className="objects">
          <div id="rightHand" className="objects__slide">
            {/* These toggle the the different parts of the chair that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
            { activeOption===0 && (rightHand_Objects.map((options, index) => (
              <RightHand key={index} options={options} onClick={()=>setAppliedRightHand(options.alt_text)}/>
            )))}
          </div>
          <div id="leftHand" className="objects__slide">
            { activeOption===1 && (leftHand_Objects.map((options, index) => (
              <LeftHand key={index} options={options} onClick={()=>setAppliedLeftHand(options.alt_text)}/>
            )))}
          </div>
          <div id="body" className="objects__slide">
            {activeOption===2 && (bodyObjects.map((options, index) => (
              <Body key={index} options={options} onClick={()=>setAppliedBody(options.alt_text)}/>
            )))}
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
            onClick={()=>setActiveOption(index)}
          />
        ))}
      </div>

      {/* The Canvas element is used to draw the 3D scene  */}
      <div className="product-canvas">
        <Canvas>
          <Suspense fallback={null}>
            <Foo />
            <ambientLight />
            <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            {appliedRightHand === "RH2" ? (
              <RightHand2Model color={colorRH2}/>
            ) : (
              <RightHand1Model color={colorRH1}/>
            )}

            {appliedLeftHand === "LH2" ? (
              <LeftHand2Model color={colorLH2}/>
            ) : (
              <LeftHand1Model color={colorLH1}/>
            )}
            {appliedBody === "B2" ? <Body2Model color={colorB2} /> : <Body1Model color={colorB1} />}

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
              <Color key={index} background={colorOrTexture} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


const texture =
[
{
  colorMap: useLoader(TextureLoader, 'https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/quilt_.jpg?v=1649144908805'),
}
