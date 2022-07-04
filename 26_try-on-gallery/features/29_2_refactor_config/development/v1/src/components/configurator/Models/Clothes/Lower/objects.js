import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function LowerCloth1({ ...props }) {
  console.log(props);
  const name = "LCS1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/lower_clothes_01.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.lower_clothes_01.geometry}
        material={materials.Pent_2}
      />
    </group>
  );
}

export function LowerCloth2({ ...props }) {
  console.log(props);
  const name = "LCS2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/lower_clothes_02.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.lower_clothes_02.geometry}
        material={materials.jean_short}
      />
    </group>
  );
}

export function LowerCloth3({ ...props }) {
  console.log(props);
  const name = "LCS3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/lower_clothes_03.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.lower_clothes_03.geometry}
        material={materials.pasted__jean_tall}
      />
    </group>
  );
}

export function LowerCloth5({ ...props }) {
  console.log(props);
  const name = "LCS5";
  const group = useRef();
  const { nodes, materials } = useGLTF("/lower_clothes_05.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.lower_clothes_05.geometry}
        material={materials.Pant_5}
      />
    </group>
  );
}

export function LowerCloth6({ ...props }) {
  console.log(props);
  const name = "LCS6";
  const group = useRef();
  const { nodes, materials } = useGLTF("/lower_clothes_06.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.lower_clothes_06_1.geometry}
        material={materials.Pant_6}
      />
      <mesh
        geometry={nodes.lower_clothes_06_2.geometry}
        material={materials.Buccle}
      />
    </group>
  );
}

export function LowerCloth7({ ...props }) {
  console.log(props);
  const name = "LCS7";
  const group = useRef();
  const { nodes, materials } = useGLTF("/lower_clothes_07.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.lower_clothes_07.geometry}
        material={materials.jean_short3}
      />
    </group>
  );
}

export function LowerCloth8({ ...props }) {
  console.log(props);
  const name = "LCS8";
  const group = useRef();
  const { nodes, materials } = useGLTF("/lower_clothes_08.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.lower_clothes_08.geometry}
        material={materials.Pant_8}
      />
    </group>
  );
}
