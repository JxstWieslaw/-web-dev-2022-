import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function Base({ ...props }) {
  console.log(props);
  const group = useRef();
  const name = "BS";
  const { nodes, materials } = useGLTF("/base.glb");
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
        geometry={nodes.base.geometry}
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

export function Base1({ ...props }) {
  const group = useRef();
  const name = "BS1";
  const { nodes, materials } = useGLTF("/base1.glb");
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
        geometry={nodes.base1.geometry}
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

export function Base2({ ...props }) {
  const group = useRef();
  const name = "BS2";
  const { nodes, materials } = useGLTF("/base2.glb");
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
        geometry={nodes.base2.geometry}
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
