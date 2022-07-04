import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function RightArm1({ ...props }) {
    const group = useRef();
    const name = "RA1";
    const { nodes, materials } = useGLTF("/R_arm1.glb");
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
          geometry={nodes.R_arm1.geometry}
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
  
export function RightArm2({ ...props }) {
    const group = useRef();
    const name = "RA2";
    const { nodes, materials } = useGLTF("/R_arm2.glb");
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
          geometry={nodes.R_arm2.geometry}
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
export function RightArm3({ ...props }) {
    const group = useRef();
    const name = "RA3";
    const { nodes, materials } = useGLTF("/R_arm3.glb");
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
          geometry={nodes.R_arm3.geometry}
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