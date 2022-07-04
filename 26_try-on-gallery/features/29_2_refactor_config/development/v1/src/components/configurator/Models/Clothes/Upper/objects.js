import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function UpperCloth1({ ...props }) {
  console.log(props);
  const name = "UCS1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/upper_clothes_01.glb");
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
        geometry={nodes.upper_clothes_01.geometry}
        material={materials.phong6}
      />
    </group>
  );
}

export function UpperCloth3({ ...props }) {
  console.log(props);
  const name = "UCS3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/upper_clothes_03.glb");
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
        geometry={nodes.upper_clothes_03.geometry}
        material={materials.phong7}
      />
    </group>
  );
}

export function UpperCloth4({ ...props }) {
  console.log(props);
  const name = "UCS4";
  const group = useRef();
  const { nodes, materials } = useGLTF("/upper_clothes_04.glb");
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
        geometry={nodes.upper_clothes_04.geometry}
        material={materials.phong8}
      />
    </group>
  );
}

export function UpperCloth7({ ...props }) {
  console.log(props);
  const name = "UCS7";
  const group = useRef();
  const { nodes, materials } = useGLTF("/upper_clothes_07.glb");
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
        geometry={nodes.upper_clothes_07.geometry}
        material={materials.lambert9}
      />
    </group>
  );
}

export function UpperCloth8({ ...props }) {
  console.log(props);
  const name = "UCS8";
  const group = useRef();
  const { nodes, materials } = useGLTF("/upper_clothes_08.glb");
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
        geometry={nodes.upper_clothes_08.geometry}
        material={materials.lambert31}
      />
    </group>
  );
}

export function UpperCloth9({ ...props }) {
  console.log(props);
  const name = "UCS9";
  const group = useRef();
  const { nodes, materials } = useGLTF("/upper_clothes_09.glb");
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
        geometry={nodes.upper_clothes_09.geometry}
        material={materials.lambert32}
      />
    </group>
  );
}
