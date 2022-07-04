import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function BoyHairstyle1({ ...props }) {
  console.log(props);
  const name = "BHS1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/boy_hair_01.glb");
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
        geometry={nodes.hair_01.geometry}
        material={materials["hair_1:hair_base1:hair"]}
      />
    </group>
  );
}

export function BoyHairstyle2({ ...props }) {
  console.log(props);
  const name = "BHS2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/boy_hair_02.glb");
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
        geometry={nodes.hair_02.geometry}
        material={materials["hair_4:phong1"]}
      />
    </group>
  );
}

export function BoyHairstyle3({ ...props }) {
  console.log(props);
  const name = "BHS3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/boy_hair_03.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.hair_03.geometry} material={materials.lambert27} />
    </group>
  );
}

export function BoyHairstyle4({ ...props }) {
  console.log(props);
  const name = "BHS4";
  const group = useRef();
  const { nodes, materials } = useGLTF("/boy_hair_04.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.hair_04.geometry} material={materials.lambert28} />
    </group>
  );
}

export function BoyHairstyle6({ ...props }) {
  console.log(props);
  const name = "BHS6";
  const group = useRef();
  const { nodes, materials } = useGLTF("/boy_hair_06.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.hair_06.geometry} material={materials.lambert33} />
    </group>
  );
}

export function BoyHairstyle7({ ...props }) {
  console.log(props);
  const name = "BHS7";
  const group = useRef();
  const { nodes, materials } = useGLTF("/boy_hair_07.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.hair_07.geometry} material={materials.lambert29} />
    </group>
  );
}

export function BoyHairstyle8({ ...props }) {
  console.log(props);
  const name = "BHS8";
  const group = useRef();
  const { nodes, materials } = useGLTF("/boy_hair_08.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.hair_08.geometry} material={materials.lambert30} />
    </group>
  );
}

export function BoyHairstyle9({ ...props }) {
  console.log(props);
  const name = "BHS9";
  const group = useRef();
  const { nodes, materials } = useGLTF("/boy_hair_09.glb");
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
        geometry={nodes.hair_09.geometry}
        material={materials["sculpt9:defaultMat1"]}
      />
    </group>
  );
}

export function BoyHairstyle11({ ...props }) {
  console.log(props);
  const name = "BHS11";
  const group = useRef();
  const { nodes, materials } = useGLTF("/boy_hair_11.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.hair_11.geometry} material={materials.lambert35} />
    </group>
  );
}

export function BoyHairstyle12({ ...props }) {
  console.log(props);
  const name = "BHS12";
  const group = useRef();
  const { nodes, materials } = useGLTF("/boy_hair_12.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.hair_12.geometry} material={materials.lambert21} />
    </group>
  );
}
