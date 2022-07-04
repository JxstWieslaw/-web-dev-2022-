import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function Nose1({ ...props }) {
  console.log(props);
  const name = "NE1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/nose_01.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.nose_01.geometry} material={materials.nose7} />
    </group>
  );
}

export function Nose2({ ...props }) {
  console.log(props);
  const name = "NE2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/nose_02.glb");
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
        geometry={nodes.nose_02.geometry}
        material={materials.nose}
        position={[0, -0.06, 0]}
      />
    </group>
  );
}

export function Nose3({ ...props }) {
  console.log(props);
  const name = "NE3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/nose_03.glb");
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
        geometry={nodes.nose_03.geometry}
        material={materials.nose8}
        position={[0, -0.06, 0]}
      />
    </group>
  );
}

export function Nose4({ ...props }) {
  console.log(props);
  const name = "NE4";
  const group = useRef();
  const { nodes, materials } = useGLTF("/nose_04.glb");
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
        geometry={nodes.nose_04.geometry}
        material={materials.nose17}
        position={[0, -0.06, 0]}
      />
    </group>
  );
}

export function Nose5({ ...props }) {
  console.log(props);
  const name = "NE5";
  const group = useRef();
  const { nodes, materials } = useGLTF("/nose_05.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.nose_05.geometry} material={materials.nose18} />
    </group>
  );
}

export function Nose6({ ...props }) {
  console.log(props);
  const name = "NE6";
  const group = useRef();
  const { nodes, materials } = useGLTF("/nose_06.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.nose_06.geometry} material={materials.nose12} />
    </group>
  );
}
