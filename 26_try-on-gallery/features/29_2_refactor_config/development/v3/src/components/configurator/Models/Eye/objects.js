import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function Eye1({ ...props }) {
  console.log(props);
  const name = "ES1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eye_01.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.L_eye.geometry} material={materials.body7} />
      <mesh geometry={nodes.R_eye.geometry} material={materials.body7} />
    </group>
  );
}

export function Eye2({ ...props }) {
  console.log(props);
  const name = "ES2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eye_02.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.L_eye.geometry} material={materials.body8} />
      <mesh geometry={nodes.R_eye.geometry} material={materials.body8} />
    </group>
  );
}

export function Eye3({ ...props }) {
  console.log(props);
  const name = "ES3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eye_03.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.L_eye.geometry} material={materials.body9} />
      <mesh geometry={nodes.R_eye.geometry} material={materials.body9} />
    </group>
  );
}

export function Eye4({ ...props }) {
  console.log(props);
  const name = "ES4";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eye_04.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.L_eye.geometry} material={materials.body10} />
      <mesh geometry={nodes.R_eye.geometry} material={materials.body10} />
    </group>
  );
}

export function Eye5({ ...props }) {
  console.log(props);
  const name = "ES5";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eye_05.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.L_eye.geometry} material={materials.body11} />
      <mesh geometry={nodes.R_eye.geometry} material={materials.body11} />
    </group>
  );
}

export function Eye6({ ...props }) {
  console.log(props);
  const name = "ES6";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eye_06.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.L_eye.geometry} material={materials.body12} />
      <mesh geometry={nodes.R_eye.geometry} material={materials.body12} />
    </group>
  );
}

// export function Eye7({ ...props }) {
//   console.log(props);
//   const name = "ES7";
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/eye_07.glb");
//   return (
//     <group
//       name={name}
//       ref={group}
//       {...props}
//       dispose={null}
//       scale={200}
//       position={[0, -2, 0]}
//     >
//       <mesh geometry={nodes.L_eye.geometry} material={materials.body13} />
//       <mesh geometry={nodes.R_eye.geometry} material={materials.body13} />
//     </group>
//   );
// }

export function Eye7({ ...props }) {
  console.log(props);
  const name = "ES7";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eyes.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.L_eye.geometry} material={materials.lambert36} />
      <mesh geometry={nodes.R_eye.geometry} material={materials.lambert36} />
    </group>
  );
}

export function Eye8({ ...props }) {
  console.log(props);
  const name = "ES7";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eye_08.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.L_eye.geometry} material={materials.body14} />
      <mesh geometry={nodes.R_eye.geometry} material={materials.body14} />
    </group>
  );
}
