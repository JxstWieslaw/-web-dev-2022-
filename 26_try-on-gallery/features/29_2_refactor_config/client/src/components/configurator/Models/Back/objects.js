import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function Back({ ...props }) {
  const group = useRef();
  const name = "BK";
  const { nodes, materials } = useGLTF("/back.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.back.geometry}
        material={materials.aiStandardSurface1}
      >
        {props.texture !== null && (
          <meshPhongMaterial
            attachArray="material"
            map={props.texture.map}
            shininess={props.texture.shininess}
          />
        )}
        {props.color != null && (
          <meshPhongMaterial
            attachArray="material"
            color={props.color.color}
            shininess={props.color.shininess}
          />
        )}
      </mesh>
    </group>
  );
}

export function Back1({ ...props }) {
  const group = useRef();
  const name = "BK1";
  const { nodes, materials } = useGLTF("/back1.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.back1.geometry}
        material={materials.aiStandardSurface1}
      >
        {props.texture !== null && (
          <meshPhongMaterial
            attachArray="material"
            map={props.texture.map}
            shininess={props.texture.shininess}
          />
        )}
        {props.color != null && (
          <meshPhongMaterial
            attachArray="material"
            color={props.color.color}
            shininess={props.color.shininess}
          />
        )}
      </mesh>
    </group>
  );
}

export function Back2({ ...props }) {
  const group = useRef();
  const name = "BK2";
  const { nodes, materials } = useGLTF("/back2.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.back2.geometry}
        material={materials.aiStandardSurface1}
      >
        {props.texture !== null && (
          <meshPhongMaterial
            attachArray="material"
            map={props.texture.map}
            shininess={props.texture.shininess}
          />
        )}
        {props.color != null && (
          <meshPhongMaterial
            attachArray="material"
            color={props.color.color}
            shininess={props.color.shininess}
          />
        )}
      </mesh>
    </group>
  );
}
