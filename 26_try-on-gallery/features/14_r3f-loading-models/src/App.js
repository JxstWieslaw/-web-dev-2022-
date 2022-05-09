import "./App.css";
import "./index.css";
import { Suspense, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

//import Swatch components
import ObjectsSwatch from "./components/objects/ObjectsSwatch";
import OptionsSwatch from "./components/options/ActiveOptionsSwatch";
import ColorsSwatch from "./components/colors/ColorsSwatch";

function Foo() {
  const { scene } = useThree();
  // console.log(scene);
}

//Model 1 Objects
function Body1Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/body1.glb");
  return (
    <group
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
      />
    </group>
  );
}

function LeftHand1Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/left_hand1.glb");
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.188}
      position={[0.2, -0.8, 0.05]}
    >
      <mesh
        geometry={nodes.polySurface1.geometry}
        material={nodes.polySurface1.material}
      />
    </group>
  );
}

function RightHand1Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/right_hand1.glb");
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.188}
      position={[0.2, -0.8, 0.05]}
    >
      <mesh
        geometry={nodes.polySurface2.geometry}
        material={nodes.polySurface2.material}
      />
    </group>
  );
}

//Model 2 Objects
function LeftHand2Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/left_hand2.glb");
  return (
    <group
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
          />
        </group>
      </group>
    </group>
  );
}

function RightHand2Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/right_hand2.glb");
  return (
    <group
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
          />
        </group>
      </group>
    </group>
  );
}

function Body2Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/body2.glb");
  return (
    <group
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
          />
        </group>
      </group>
    </group>
  );
}

function App() {
  const [activeOption, setActiveOption] = useState("legs");
  const [appliedRightHand, setAppliedRghtHand] = useState("righthand_2");
  const [appliedLeftHand, setAppliedLeftHand] = useState("lefthand_2");
  const [appliedBody, setAppliedBody] = useState("body_2");
  return (
    <div className="App">
      <ObjectsSwatch />
      <OptionsSwatch active={activeOption} />
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
            {appliedRightHand === "righthand_2" ? (
              <RightHand2Model />
            ) : (
              <RightHand1Model />
            )}

            {appliedLeftHand === "lefthand_2" ? (
              <LeftHand2Model />
            ) : (
              <LeftHand1Model />
            )}
            {appliedBody === "body_2" ? <Body2Model /> : <Body1Model />}

            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
      <ColorsSwatch />
    </div>
  );
}

export default App;
