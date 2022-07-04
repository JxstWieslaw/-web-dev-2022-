import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
// export function Body({ ...props }) {
//   console.log(props);
//   const name = "BD";
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/body.glb");
//   return (
//     <group
//       name={name}
//       ref={group}
//       {...props}
//       dispose={null}
//       scale={200}
//       position={[0, -2, 0]}
//     >
//       <mesh geometry={nodes.body.geometry} material={materials._lambert8} />
//     </group>
//   );
// }

export function Body({ ...props }) {
  console.log(props);
  const name = "BD";
  const group = useRef();
  const { nodes, materials } = useGLTF("/body_01.glb");
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
        geometry={nodes.body.geometry}
        material={materials.aiStandardSurface1}
      />
    </group>
  );
}
