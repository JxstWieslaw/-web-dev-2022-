import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.

export function Face1({ ...props }) {
  console.log(props);
  const name = "F1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/face_cow.glb");
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
        geometry={nodes.COW4COW3pSphere1.geometry}
        material={materials["COW4:COW3:EYE"]}
      />
      <mesh
        geometry={nodes.COW4COW3pSphere2.geometry}
        material={materials["COW4:COW3:EYE"]}
      />
      <mesh
        geometry={nodes.COW4polySurface1.geometry}
        material={materials["COW4:FACE"]}
      />
    </group>
  );
}

export function Face2({ ...props }) {
  console.log(props);
  const name = "F2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/face_dog.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <group
        position={[0, 0.01, 0]}
        rotation={[-0.19, -0.06, 0.08]}
        scale={0.47}
      >
        <mesh
          geometry={nodes.COW4pSphere1.geometry}
          material={materials.phong5}
          position={[0, -0.04, -0.03]}
          rotation={[0.41, -0.01, -0.05]}
        />
        <mesh
          geometry={nodes.pSphere1.geometry}
          material={materials.phong5}
          position={[-0.01, -0.04, -0.03]}
          rotation={[-2.71, -0.06, -2.99]}
          scale={[1, 1, -1]}
        />
        <mesh
          geometry={nodes.polySurface4.geometry}
          material={materials.dog_phong2}
          rotation={[0.2, 0.04, -0.09]}
          scale={[1, 1.08, 1]}
        />
        <mesh
          geometry={nodes.polySurface5.geometry}
          material={materials.phong5}
          rotation={[0.2, 0.04, -0.09]}
          scale={[0.87, 0.94, 1.07]}
        />
      </group>
    </group>
  );
}

export function Face3({ ...props }) {
  console.log(props);
  const name = "F3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/face_elephant.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <group scale={0.28}>
        <mesh
          geometry={nodes.pSphere2.geometry}
          material={materials["COW5:EYE"]}
          rotation={[-3.07, -0.65, -3.1]}
          scale={[1, 1, -1]}
        />
        <mesh
          geometry={nodes.group2_pCylinder5.geometry}
          material={materials.phong9}
        />
        <mesh
          geometry={nodes.pSphere1.geometry}
          material={materials["COW5:EYE"]}
          rotation={[-3.09, 0.08, 3.14]}
          scale={[1, 1, -1]}
        />
      </group>
    </group>
  );
}

export function Face4({ ...props }) {
  console.log(props);
  const name = "F4";
  const group = useRef();
  const { nodes, materials } = useGLTF("/face_normal.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh geometry={nodes.face.geometry} material={materials._lambert8} />
    </group>
  );
}

export function Face5({ ...props }) {
  console.log(props);
  const name = "F5";
  const group = useRef();
  const { nodes, materials } = useGLTF("/face_panda.glb");
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
        geometry={nodes.panda_face.geometry}
        material={materials.face_panda}
        position={[0, 0.01, 0]}
        scale={0.4}
      />
    </group>
  );
}

export function Face6({ ...props }) {
  console.log(props);
  const name = "F6";
  const group = useRef();
  const { nodes, materials } = useGLTF("/face_pig.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <group position={[0, -0.02, -0.01]} scale={0.4}>
        <mesh
          geometry={nodes.pig_5SMILEpig_5SMILEEYE1.geometry}
          material={materials["pig_5SMILE:pig_5SMILE:EYE"]}
        />
        <mesh
          geometry={nodes.pig_5SMILEpig_5SMILEEYE2.geometry}
          material={materials["pig_5SMILE:pig_5SMILE:EYE"]}
        />
        <mesh
          geometry={nodes.pig_5SMILEpig_5SMILEpolySurface1.geometry}
          material={materials["pig_5SMILE:SMILEE"]}
        />
      </group>
    </group>
  );
}
