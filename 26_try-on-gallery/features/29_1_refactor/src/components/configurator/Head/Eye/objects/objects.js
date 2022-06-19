import * as THREE from "three";

//Objects will be declared inside these particular files. And then imported to the main home file.

// 1. The array for the pictorial representation of objects

const eyeObjects = [
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
      id: "back",
      alt_text: "BK",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
      id: "back1",
      alt_text: "BK1",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
      id: "back2",
      alt_text: "BK2",
    },
  ];

  //Actual Objects 
function Eye1({ ...props }) {
    const group = useRef();
    const name = "EYE1";
    const { nodes, materials } = useGLTF("/Eye.glb");
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
          geometry={nodes.Eye.geometry}
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
  function Eye2({ ...props }) {
    const group = useRef();
    const name = "EYE2";
    const { nodes, materials } = useGLTF("/Eye1.glb");
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
          geometry={nodes.Eye1.geometry}
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
  
  function Eye3({ ...props }) {
    const group = useRef();
    const name = "EYE3";
    const { nodes, materials } = useGLTF("/Eye2.glb");
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
          geometry={nodes.Eye2.geometry}
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