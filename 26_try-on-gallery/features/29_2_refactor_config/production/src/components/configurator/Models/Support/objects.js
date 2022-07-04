import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.
export function Support({ ...props }) {
    console.log(props.color + " " + props.texture);
    const group = useRef();
    const name = "SP";
    const { nodes, materials } = useGLTF("/support.glb");
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
          geometry={nodes.support.geometry}
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