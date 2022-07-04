import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function Cheek1({ ...props }) {
  console.log(props);
  const name = "CK1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheeks_01.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes._10.geometry} material={materials._14}>
        <mesh geometry={nodes._4.geometry} material={materials._14} />
      </mesh>
    </group>
  );
}

export function Cheek2({ ...props }) {
  console.log(props);
  const name = "CK2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheeks_02.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes._10.geometry} material={materials._12}>
        <mesh geometry={nodes._4.geometry} material={materials._12} />
      </mesh>
    </group>
  );
}

export function Cheek3({ ...props }) {
  console.log(props);
  const name = "CK3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheeks_03.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes._3.geometry} material={materials._13}>
        <mesh geometry={nodes._4.geometry} material={materials._13} />
      </mesh>
    </group>
  );
}

export function Cheek4({ ...props }) {
  console.log(props);
  const name = "CK4";
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheeks_04.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes._10.geometry} material={materials._15}>
        <mesh geometry={nodes._4.geometry} material={materials._15} />
      </mesh>
    </group>
  );
}

export function Cheek5({ ...props }) {
  console.log(props);
  const name = "CK5";
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheeks_05.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes._10.geometry} material={materials._16}>
        <mesh geometry={nodes._4.geometry} material={materials._16} />
      </mesh>
    </group>
  );
}

export function Cheek6({ ...props }) {
  console.log(props);
  const name = "CK6";
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheeks_06.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes._10.geometry} material={materials._17}>
        <mesh geometry={nodes._4.geometry} material={materials._17} />
      </mesh>
    </group>
  );
}

export function Cheek7({ ...props }) {
  console.log(props);
  const name = "CK7";
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheeks_07.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes._10.geometry} material={materials._18}>
        <mesh geometry={nodes._4.geometry} material={materials._18} />
      </mesh>
    </group>
  );
}

export function Cheek8({ ...props }) {
  console.log(props);
  const name = "CK8";
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheeks_08.glb");
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
        geometry={nodes.pasted___10.geometry}
        material={materials.pasted___17}
      >
        <mesh
          geometry={nodes.pasted___4.geometry}
          material={materials.pasted___17}
        />
      </mesh>
    </group>
  );
}

// export function Cheek9({ ...props }) {
//   console.log(props);
//   const name = "CK9";
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/cheeks_09.glb");
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
//         geometry={nodes.pasted___9.geometry}
//         material={materials.pasted___09}
//       >
//         <mesh
//           geometry={nodes.pasted___4.geometry}
//           material={materials.pasted___09}
//         />
//       </mesh>
//     </group>
//   );
// }

export function Cheek9({ ...props }) {
  console.log(props);
  const name = "CK9";
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheecks.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes._9.geometry} material={materials._09}>
        <mesh geometry={nodes._4.geometry} material={materials._09} />
      </mesh>
    </group>
  );
}

export function Cheek10({ ...props }) {
  console.log(props);
  const name = "CK9";
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheeks_10.glb");
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
        geometry={nodes.pasted__cheeks3.geometry}
        material={materials.pasted__cheeks}
      />
      <mesh
        geometry={nodes.pasted__cheeks2.geometry}
        material={materials.pasted__cheeks}
      />
    </group>
  );
}
