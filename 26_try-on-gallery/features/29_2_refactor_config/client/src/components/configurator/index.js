import "./index.css";
import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { saveAs } from "file-saver";
import { Canvas, useThree} from "@react-three/fiber";
// import {signout} from "../../helpers/auth"
import { ToastContainer, toast } from 'react-toastify';
import { OrbitControls, useGLTF} from "@react-three/drei";

//import Swatch components
import { RightArmObject,rightArm_Objects } from "./Models/RightArm/swatch";
import { LeftArmObject,leftArm_Objects } from "./Models/LeftArm/swatch";
import { BaseObject,baseObjects } from "./Models/Base/swatch";
import { BackObject,backObjects } from "./Models/Back/swatch";
import { HeadObject,headObjects } from "./Models/Head/swatch";
import { SeatObject,seatObjects } from "./Models/Seat/swatch";
import { Option,optionImages } from "./Options/swatch";
import { Color,colors,colorChange } from "./Color/swatch";
import { GLTFExporter } from "./Exporter/GLTFExporter";
import { Button } from "@material-ui/core";

//Models / GLB files outside the Configurator function.
import { Support } from "./Models/Support/objects";
import { Back,Back1,Back2 } from "./Models/Back/objects";
import { Base,Base1,Base2 } from "./Models/Base/objects";
import { Head,Head1 } from "./Models/Head/objects";
import { LeftArm,LeftArm1,LeftArm2 } from "./Models/LeftArm/objects";
import { RightArm1,RightArm2,RightArm3 } from "./Models/RightArm/objects";
import { Seat,Seat1,Seat2 } from "./Models/Seat/objects";

function Foo({ download, updateClick }) {
  const { scene } = useThree();
  const handleClick = (value) => {
    updateClick(value);
  };
  console.log(download);
  if (download) {
    handleClick(false);
    const exporter = new GLTFExporter();
    exporter.parse(
      scene,
      function (result) {
        saveArrayBuffer(result, scene);
      },
      {
        binary: true, //should be false if you need a GLTF Format file
      }
    );
    console.log(download);
  }
}

function saveArrayBuffer(buffer) {
  const blobURL = URL.createObjectURL(
    new Blob([buffer], { type: "application/octet-stream" })
  );
  const saveFile = () => {
    saveAs(blobURL, "ThreejsScene.glb");
  };
  saveFile();
}

function DownloadBtn({ onClick }) {
  return (
    <>
      <Button onClick={onClick} variant="contained" color="primary">
        Download GLB
      </Button>
    </>
  );
}

function SignoutBtn({ onClick }) {
  return (
    <>
      <Button onClick={onClick} variant="contained" color="primary">
        Sign Out
      </Button>
    </>
  );
}

function ProfileBtn({ onClick }) {
  return (
    <>
      <Button onClick={onClick} variant="contained" color="primary">
        Profile
      </Button>
    </>
  );
}

function Configurator({history}) {
  //currently used activeOption
  const [activeOption, setActiveOption] = useState(0);

  //Applied Object
  const [appliedRightArm, setAppliedRightArm] = useState("RA1");
  const [appliedLeftArm, setAppliedLeftArm] = useState("LA");
  const [appliedBase, setAppliedBase] = useState("BS");
  const [appliedBack, setAppliedBack] = useState("BK");
  const [appliedHead, setAppliedHead] = useState("H");
  const [appliedSeat, setAppliedSeat] = useState("ST");
  const [appliedSupport, setAppliedSupport] = useState("SP");

  //Colors and Textures State
  const [colorSP, setColorSP] = useState(null);
  const [textureSP, setTextureSP] = useState(null);
  const [colorBK, setColorBK] = useState(null);
  const [textureBK, setTextureBK] = useState(null);
  const [colorBK1, setColorBK1] = useState(null);
  const [textureBK1, setTextureBK1] = useState(null);
  const [colorBK2, setColorBK2] = useState(null);
  const [textureBK2, setTextureBK2] = useState(null);
  const [colorBS, setColorBS] = useState(null);
  const [textureBS, setTextureBS] = useState(null);
  const [colorBS1, setColorBS1] = useState(null);
  const [textureBS1, setTextureBS1] = useState(null);
  const [colorBS2, setColorBS2] = useState(null);
  const [textureBS2, setTextureBS2] = useState(null);
  const [textureH, setTextureH] = useState(null);
  const [colorH, setColorH] = useState(null);
  const [colorH1, setColorH1] = useState(null);
  const [textureH1, setTextureH1] = useState(null);
  const [colorLA, setColorLA] = useState(null);
  const [textureLA, setTextureLA] = useState(null);
  const [colorLA1, setColorLA1] = useState(null);
  const [textureLA1, setTextureLA1] = useState(null);
  const [colorLA2, setColorLA2] = useState(null);
  const [textureLA2, setTextureLA2] = useState(null);
  const [colorRA3, setColorRA3] = useState(null);
  const [textureRA3, setTextureRA3] = useState(null);
  const [colorRA1, setColorRA1] = useState(null);
  const [textureRA1, setTextureRA1] = useState(null);
  const [colorRA2, setColorRA2] = useState(null);
  const [textureRA2, setTextureRA2] = useState(null);
  const [colorST, setColorST] = useState(null);
  const [textureST, setTextureST] = useState(null);
  const [colorST1, setColorST1] = useState(null);
  const [textureST1, setTextureST1] = useState(null);
  const [colorST2, setColorST2] = useState(null);
  const [textureST2, setTextureST2] = useState(null);

  // For the GLTF Exporter to trigger rendering of full scene
  const [clicked, setClicked] = useState(false);
  const updateClick = (value) => {
    setClicked(value);
  };

  function handleColorChange(index) {
    console.log(index);
    let color = colorChange[index];
    let new_mtl;
    console.log(color.texture);

    if (color.texture) {
      let cur = color.texture;
      cur.repeat.set(color.size[0], color.size[1], color.size[2]);
      cur.wrapS = THREE.RepeatWrapping;
      cur.wrapT = THREE.RepeatWrapping;
      new_mtl = {
        map: cur,
        shininess: color.shininess ? color.shininess : 10,
      };
      if (activeOption === 0) {
        console.log("In the loop");
        if (appliedRightArm === "RA1") {
          setTextureRA1(new_mtl);
          setColorRA1(null);
        } else if (appliedRightArm === "RA2") {
          setTextureRA2(new_mtl);
          setColorRA2(null);
        } else if (appliedRightArm === "RA3") {
          setTextureRA3(new_mtl);
          setColorRA3(null);
        }
      } else if (activeOption === 1) {
        if (appliedLeftArm === "LA") {
          setTextureLA(new_mtl);
          setColorLA(null);
        } else if (appliedLeftArm === "LA1") {
          setTextureLA1(new_mtl);
          setColorLA1(null);
        } else if (appliedLeftArm === "LA2") {
          setTextureLA2(new_mtl);
          setColorLA2(null);
        }
      } else if (activeOption === 2) {
        if (appliedBase === "BS") {
          setTextureBS(new_mtl);
          setColorBS(null);
        } else if (appliedBase === "BS1") {
          setTextureBS1(new_mtl);
          setColorBS1(null);
        } else if (appliedBase === "BS2") {
          setTextureBS2(new_mtl);
          setColorBS2(null);
        }
      } else if (activeOption === 3) {
        if (appliedBack === "BK") {
          setTextureBK(new_mtl);
          setColorBK(null);
        } else if (appliedBack === "BK1") {
          setTextureBK1(new_mtl);
          setColorBK1(null);
        } else if (appliedBack === "BK2") {
          setTextureBK2(new_mtl);
          setColorBK2(null);
        }
      } else if (activeOption === 4) {
        if (appliedHead === "H") {
          setTextureH(new_mtl);
          setColorH(null);
        } else if (appliedHead === "H1") {
          setTextureH1(new_mtl);
          setColorH1(null);
        }
      } else if (activeOption === 5) {
        if (appliedSeat === "ST") {
          setTextureST(new_mtl);
          setColorBS(null);
        } else if (appliedSeat === "ST1") {
          setTextureST1(new_mtl);
          setColorST1(null);
        } else if (appliedSeat === "ST2") {
          setTextureST2(new_mtl);
          setColorST2(null);
        }
      } else if (activeOption === 6) {
        console.log("reached safely");
        if (appliedSupport === "SP") {
          setTextureSP(new_mtl);
          setColorSP(null);
        }
      }
    } else {
      new_mtl = {
        color: color.color,
        shininess: color.shininess ? color.shininess : 10,
      };
      if (activeOption === 0) {
        if (appliedRightArm === "RA1") {
          setColorRA1(new_mtl);
          setTextureRA1(null);
        } else if (appliedRightArm === "RA2") {
          setColorRA2(new_mtl);
          setTextureRA2(null);
        } else if (appliedRightArm === "RA3") {
          setColorRA3(new_mtl);
          setTextureRA3(null);
        }
      } else if (activeOption === 1) {
        if (appliedLeftArm === "LA") {
          setColorLA(new_mtl);
          setTextureLA(null);
        } else if (appliedLeftArm === "LA1") {
          setColorLA1(new_mtl);
          setTextureLA1(null);
        } else if (appliedLeftArm === "LA2") {
          setColorLA2(new_mtl);
          setTextureLA2(null);
        }
      } else if (activeOption === 2) {
        if (appliedBase === "BS") {
          setColorBS(new_mtl);
          setTextureBS(null);
        } else if (appliedBase === "BS1") {
          setColorBS1(new_mtl);
          setTextureBS1(null);
        } else if (appliedBase === "BS2") {
          setColorBS2(new_mtl);
          setTextureBS2(null);
        }
      } else if (activeOption === 3) {
        if (appliedBack === "BK") {
          setColorBK(new_mtl);
          setTextureBK(null);
        } else if (appliedBack === "BK1") {
          setColorBK1(new_mtl);
          setTextureBK1(null);
        } else if (appliedBack === "BK2") {
          setColorBK2(new_mtl);
          setTextureBK2(null);
        }
      } else if (activeOption === 4) {
        if (appliedHead === "H") {
          setColorH(new_mtl);
          setTextureH(null);
        } else if (appliedHead === "H1") {
          setColorH1(new_mtl);
          setTextureH1(null);
        }
      } else if (activeOption === 5) {
        if (appliedSeat === "ST") {
          setColorST(new_mtl);
          setTextureST(null);
        } else if (appliedSeat === "ST1") {
          setColorST1(new_mtl);
          setTextureST1(null);
        } else if (appliedSeat === "ST2") {
          setColorST2(new_mtl);
          setTextureST2(null);
        }
      } else if (activeOption === 6) {
        if (appliedSupport === "SP") {
          setColorSP(new_mtl);
          setTextureSP(null);
        }
      }
    }
  }

  const colorMap = function DoSomething() {
    console.log("clicked");
  };

  return (
    <div className="App">
      <div className="change-objects">
        {/* This tray will be filled with the different parts via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
        {/* choices  */}
        <div id="js-objects" className="objects">
          <div id="rightArm" className="objects__slide">
            {/* These toggle the the different parts of the chair that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
            {activeOption === 0 &&
              rightArm_Objects.map((options, index) => (
                <RightArmObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedRightArm(options.alt_text)}
                />
              ))}
          </div>
          <div id="leftArm" className="objects__slide">
            {activeOption === 1 &&
              leftArm_Objects.map((options, index) => (
                <LeftArmObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedLeftArm(options.alt_text)}
                />
              ))}
          </div>
          <div id="base" className="objects__slide">
            {activeOption === 2 &&
              baseObjects.map((options, index) => (
                <BaseObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedBase(options.alt_text)}
                />
              ))}
          </div>
          <div id="back" className="objects__slide">
            {activeOption === 3 &&
              backObjects.map((options, index) => (
                <BackObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedBack(options.alt_text)}
                />
              ))}
          </div>
          <div id="head" className="objects__slide">
            {activeOption === 4 &&
              headObjects.map((options, index) => (
                <HeadObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedHead(options.alt_text)}
                />
              ))}
          </div>
          <div id="seat" className="objects__slide">
            {activeOption === 5 &&
              seatObjects.map((options, index) => (
                <SeatObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedSeat(options.alt_text)}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="options">
        {optionImages.map((options, index) => (
          <Option
            key={index}
            id={index}
            options={options}
            active={activeOption}
            onClick={() => setActiveOption(index)}
          />
        ))}
      </div>

      <div className="download-btn">
        <DownloadBtn onClick={() => setClicked(true)} />
      </div>
      {/* <div className="signout-btn">
        <SignoutBtn  onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                      history.push('/');
                    });
                  }}/>
      </div> */}
      <div className="update-profile">
        <ProfileBtn  onClick={()=>{
          history.push('/private')
        }}/>
      </div>

      {/* The Canvas element is used to draw the 3D scene  */}
      <div className="product-canvas">
        <Canvas linear flat>
          <Suspense fallback={null}>
            <Foo updateClick={updateClick} download={clicked} />
            <ambientLight />
            <directionalLight intensity={0.1}/>
            <spotLight
              intensity={0.1}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Support texture={textureSP} color={colorSP} />
            {appliedBack === "BK" && (
              <Back texture={textureBK} color={colorBK} />
            )}
            {appliedBack === "BK1" && (
              <Back1 texture={textureBK1} color={colorBK1} />
            )}
            {appliedBack === "BK2" && (
              <Back2 texture={textureBK2} color={colorBK2} />
            )}

            {appliedBase === "BS" && (
              <Base texture={textureBS} color={colorBS} />
            )}
            {appliedBase === "BS1" && (
              <Base1 texture={textureBS1} color={colorBS1} />
            )}
            {appliedBase === "BS2" && (
              <Base2 texture={textureBS2} color={colorBS2} />
            )}

            {appliedHead === "H" && <Head texture={textureH} color={colorH} />}
            {appliedHead === "H1" && (
              <Head1 texture={textureH1} color={colorH1} />
            )}

            {appliedLeftArm === "LA" && (
              <LeftArm texture={textureLA} color={colorLA} />
            )}
            {appliedLeftArm === "LA1" && (
              <LeftArm1 texture={textureLA1} color={colorLA1} />
            )}
            {appliedLeftArm === "LA2" && (
              <LeftArm2 texture={textureLA2} color={colorLA2} />
            )}

            {appliedRightArm === "RA1" && (
              <RightArm1 texture={textureRA1} color={colorRA1} />
            )}
            {appliedRightArm === "RA2" && (
              <RightArm2 texture={textureRA2} color={colorRA2} />
            )}
            {appliedRightArm === "RA3" && (
              <RightArm3 texture={textureRA3} color={colorRA3} />
            )}
            {appliedSeat === "ST" && (
              <Seat texture={textureST} color={colorST} />
            )}
            {appliedSeat === "ST1" && (
              <Seat1 texture={textureST1} color={colorST1} />
            )}
            {appliedSeat === "ST2" && (
              <Seat2 texture={textureST2} color={colorST2} />
            )}
         
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="controls">
        {/* This tray will be filled with colors via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
        <div id="js-tray" className="tray">
          <div id="js-tray-slide" className="tray__slide">
            {colors.map((colorOrTexture, index) => (
              <Color
                key={index}
                background={colorOrTexture}
                onClick={() => handleColorChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configurator;
