import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function LeftArm({ ...props }) {
  const group = useRef();
  const name = "LA";
  const { nodes, materials } = useGLTF("/L_arm.glb");
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
        geometry={nodes.L_arm.geometry}
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

export function LeftArm1({ ...props }) {
  const group = useRef();
  const name = "LA1";
  const { nodes, materials } = useGLTF("/L_arm1.glb");
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
        geometry={nodes.L_arm1.geometry}
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

export function LeftArm2({ ...props }) {
  const group = useRef();
  const name = "LA2";
  const { nodes, materials } = useGLTF("/L_arm2.glb");
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
        geometry={nodes.L_arm2.geometry}
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
