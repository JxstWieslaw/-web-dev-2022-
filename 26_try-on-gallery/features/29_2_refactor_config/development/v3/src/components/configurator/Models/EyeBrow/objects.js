import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function EyeBrow1({ ...props }) {
  console.log(props);
  const name = "EBS1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eyebrow_01.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.arched2.geometry} material={materials.arched} />
      <mesh
        geometry={nodes.arched1.geometry}
        material={materials.arched}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, -1]}
      />
    </group>
  );
}

export function EyeBrow2({ ...props }) {
  console.log(props);
  const name = "EBS2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eyebrow_02.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.rounded1.geometry} material={materials.rounded} />
      <mesh
        geometry={nodes.rounded2.geometry}
        material={materials.rounded}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, -1]}
      />
    </group>
  );
}

export function EyeBrow3({ ...props }) {
  console.log(props);
  const name = "EBS3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eyebrow_03.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.s_shaped1.geometry} material={materials.s_shaped} />
      <mesh
        geometry={nodes.s_shaped2.geometry}
        material={materials.s_shaped}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, -1]}
      />
    </group>
  );
}

export function EyeBrow4({ ...props }) {
  console.log(props);
  const name = "EBS4";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eyebrow_04.glb");
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
        geometry={nodes.s_shaped1.geometry}
        material={materials.steep_arch}
      />
      <mesh
        geometry={nodes.s_shaped2.geometry}
        material={materials.steep_arch}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, -1]}
      />
    </group>
  );
}

export function EyeBrow5({ ...props }) {
  console.log(props);
  const name = "EBS5";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eyebrow_05.glb");
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
        geometry={nodes.straight1.geometry}
        material={materials.straight2}
      />
      <mesh
        geometry={nodes.straight3.geometry}
        material={materials.straight2}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, -1]}
      />
    </group>
  );
}



// export function EyeBrow6({ ...props }) {
//   console.log(props);
//   const name = "EBS6";
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/eyebrow_06.glb");
//   return (
//     <group
//       name={name}
//       ref={group}
//       {...props}
//       dispose={null}
//       scale={200}
//       position={[0, -2, 0]}
//     >
//       <mesh geometry={nodes.upward1.geometry} material={materials.upward} />
//       <mesh
//         geometry={nodes.upward2.geometry}
//         material={materials.upward}
//         rotation={[-Math.PI, 0, -Math.PI]}
//         scale={[1, 1, -1]}
//       />
//     </group>
//   );
// }

export function EyeBrow6({ ...props }) {
  console.log(props);
  const name = "EBS6";
  const group = useRef();
  const { nodes, materials } = useGLTF("/eyebrows.glb");
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
        geometry={nodes.upward1.geometry}
        material={materials.aiStandardSurface3}
      />
      <mesh
        geometry={nodes.upward2.geometry}
        material={materials.aiStandardSurface3}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, -1]}
      />
    </group>
  );
}
