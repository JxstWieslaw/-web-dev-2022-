import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function Mouth1({ ...props }) {
  console.log(props);
  const name = "MH1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/smile_01.glb");
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
        geometry={nodes.smile_01.geometry}
        material={materials.lambert16}
        rotation={[-0.09, 0, 0]}
      />
    </group>
  );
}

export function Mouth2({ ...props }) {
  console.log(props);
  const name = "MH2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/smile_02.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.smile_02.geometry} material={materials.lambert17} />
    </group>
  );
}

export function Mouth3({ ...props }) {
  console.log(props);
  const name = "MH3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/smile_03.glb");
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
        geometry={nodes.smile_03.geometry}
        material={materials.lambert18}
        rotation={[-0.13, 0, 0]}
      />
    </group>
  );
}

// export function Mouth4({ ...props }) {
//   console.log(props);
//   const name = "MH4";
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/smile_04.glb");
//   return (
//     <group
//       name={name}
//       ref={group}
//       {...props}
//       dispose={null}
//       scale={200}
//       position={[0, -2, 0]}
//     >
//       <mesh
//         geometry={nodes.smile_04.geometry}
//         material={materials.lambert19}
//         rotation={[-0.18, 0, 0]}
//       />
//     </group>
//   );
// }

export function Mouth4({ ...props }) {
  console.log(props);
  const name = "MH4";
  const group = useRef();
  const { nodes, materials } = useGLTF("/smile.glb");
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
        geometry={nodes.smile_04.geometry}
        material={materials.lambert19}
        rotation={[-0.18, 0, 0]}
      />
    </group>
  );
}



export function Mouth5({ ...props }) {
  console.log(props);
  const name = "MH5";
  const group = useRef();
  const { nodes, materials } = useGLTF("/smile_05.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.smile_05.geometry} material={materials.lambert20} />
    </group>
  );
}

export function Mouth6({ ...props }) {
  console.log(props);
  const name = "MH6";
  const group = useRef();
  const { nodes, materials } = useGLTF("/smile_06.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.smile_06.geometry} material={materials.lambert24} />
    </group>
  );
}

export function Mouth7({ ...props }) {
  console.log(props);
  const name = "MH7";
  const group = useRef();
  const { nodes, materials } = useGLTF("/smile_07.glb");
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
        geometry={nodes.smile_07.geometry}
        material={materials.lambert25}
        rotation={[-0.16, 0, 0]}
      />
    </group>
  );
}

export function Mouth8({ ...props }) {
  console.log(props);
  const name = "MH8";
  const group = useRef();
  const { nodes, materials } = useGLTF("/smile_08.glb");
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
        geometry={nodes.smile_08.geometry}
        material={materials.lambert26}
        rotation={[-0.16, 0, 0]}
      />
    </group>
  );
}
