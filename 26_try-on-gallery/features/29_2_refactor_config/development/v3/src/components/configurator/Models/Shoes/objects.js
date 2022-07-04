import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
// export function Shoes1({ ...props }) {
//   console.log(props);
//   const name = "SH1";
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/shoes.glb");
//   return (
//     <group
//       name={name}
//       ref={group}
//       {...props}
//       dispose={null}
//       scale={200}
//       position={[0, -2, 0]}
//     >
//       <mesh geometry={nodes.L_shoes.geometry} material={materials._Shoes} />
//       <mesh geometry={nodes.R_shoes.geometry} material={materials._Shoes} />
//     </group>
//   );
// }

export function Shoes1({ ...props }) {
  console.log(props);
  const name = "SH1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.glb");
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
        geometry={nodes.L_shoes.geometry}
        material={materials.aiStandardSurface8}
      />
      <mesh
        geometry={nodes.R_shoes.geometry}
        material={materials.aiStandardSurface8}
      />
    </group>
  );
}
