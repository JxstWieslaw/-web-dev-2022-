import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function Seat({ ...props }) {
  const group = useRef();
  const name = "ST";
  const { nodes, materials } = useGLTF("/seat.glb");
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
        geometry={nodes.seat.geometry}
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

export function Seat1({ ...props }) {
  const group = useRef();
  const name = "ST1";
  const { nodes, materials } = useGLTF("/seat1.glb");
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
        geometry={nodes.seat1.geometry}
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

export function Seat2({ ...props }) {
  const group = useRef();
  const name = "LA1";
  const { nodes, materials } = useGLTF("/seat2.glb");
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
        geometry={nodes.seat2.geometry}
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
