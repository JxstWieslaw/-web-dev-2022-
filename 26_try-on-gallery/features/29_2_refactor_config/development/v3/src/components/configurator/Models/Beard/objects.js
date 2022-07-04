import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function Beard1({ ...props }) {
  console.log(props);
  const name = "BE1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/beard_01.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.beard_01.geometry} material={materials.lambert13} />
    </group>
  );
}

// export function Beard2({ ...props }) {
//   console.log(props);
//   const name = "BE2";
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/beard_02.glb");
//   return (
//     <group
//       name={name}
//       ref={group}
//       {...props}
//       dispose={null}
//       scale={200}
//       position={[0, -2, 0]}
//     >
//       <mesh geometry={nodes.beard_02.geometry} material={materials.lambert14} />
//     </group>
//   );
// }

export function Beard2({ ...props }) {
  console.log(props);
  const name = "BE2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/beard.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.beard_02.geometry} material={materials.lambert14} />
    </group>
  );
}

export function Beard3({ ...props }) {
  console.log(props);
  const name = "BE3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/beard_03.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.beard_03.geometry} material={materials.lambert15} />
    </group>
  );
}

export function Beard4({ ...props }) {
  console.log(props);
  const name = "BE4";
  const group = useRef();
  const { nodes, materials } = useGLTF("/beard_04.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.beard_04.geometry} material={materials.lambert12} />
    </group>
  );
}

export function Beard5({ ...props }) {
  console.log(props);
  const name = "BE5";
  const group = useRef();
  const { nodes, materials } = useGLTF("/beard_05.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.beard_05.geometry} material={materials.lambert10} />
    </group>
  );
}
