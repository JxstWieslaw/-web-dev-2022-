import "./index.css";
import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { saveAs } from "file-saver";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
// import {signout} from "../../helpers/auth"
import { ToastContainer, toast } from "react-toastify";
import { OrbitControls, useGLTF } from "@react-three/drei";
import {} from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

//import Swatch components
import {FaceObject, face_Objects } from "./Models/Face/swatch";
import { BeardObject, beard_Objects } from "./Models/Beard/swatch";
import { CheekObject, cheek_Objects } from "./Models/Cheek/swatch";
import { EyesObject, eyes_Objects } from "./Models/Eye/swatch";
import { EyeBrowObject, eyeBrow_Objects } from "./Models/EyeBrow/swatch";
import { NoseObject, nose_Objects } from "./Models/Nose/swatch";
import { MouthObject, mouth_Objects } from "./Models/Mouth/swatch";
import { BoyHairStyleObject, boyHairStyle_Objects } from "./Models/HairStyle/Boy/swatch";
import { ShoeObject, shoes_Objects } from "./Models/Shoes/swatch";
import { LowerClothObject, lowerClothes_Objects } from "./Models/Clothes/Lower/swatch";
import { UpperClothObject, upperClothes_Objects } from "./Models/Clothes/Upper/swatch";
import {LowerCloth1, LowerCloth2, LowerCloth3, LowerCloth5, LowerCloth6, LowerCloth7, LowerCloth8 } from "./Models/Clothes/Lower/objects";
import {UpperCloth1, UpperCloth3, UpperCloth4, UpperCloth7, UpperCloth8, UpperCloth9 } from "./Models/Clothes/Upper/objects";

// import { GirlHairStyleObject, girlHairStyle_Objects } from "./Models/Hairstyle/Girl/swatch";

import { Option, optionImages } from "./Options/swatch";
import { GLTFExporter } from "./Exporter/GLTFExporter";
import { Button } from "@material-ui/core";

//Models / GLB files outside the Configurator function.
import { Body } from "./Models/Body/objects";
import { Face1, Face2, Face3, Face4, Face5, Face6 } from "./Models/Face/objects";
import { Beard1, Beard2, Beard3, Beard4, Beard5 } from "./Models/Beard/objects";
import { Cheek1, Cheek2, Cheek3, Cheek4, Cheek5, Cheek6, Cheek7, Cheek8, Cheek9, Cheek10 } from "./Models/Cheek/objects";
import { Eye1, Eye2, Eye3, Eye4, Eye5, Eye6, Eye7, Eye8 } from "./Models/Eye/objects";
import { EyeBrow1, EyeBrow2, EyeBrow3, EyeBrow4, EyeBrow5, EyeBrow6 } from "./Models/EyeBrow/objects";
import { BoyHairstyle1, BoyHairstyle2, BoyHairstyle3, BoyHairstyle4, BoyHairstyle6, BoyHairstyle7, BoyHairstyle8, BoyHairstyle9, BoyHairstyle11, BoyHairstyle12 } from "./Models/HairStyle/Boy/objects";
import { Mouth1, Mouth2, Mouth3, Mouth4, Mouth5, Mouth6, Mouth7, Mouth8 } from "./Models/Mouth/objects";
import { Nose1, Nose2, Nose3, Nose4, Nose5, Nose6 } from "./Models/Nose/objects";
import { Shoes1 } from "./Models/Shoes/objects";



function Foo({ download, updateClick }) {
  const { scene,gl } = useThree();
  // gl.outputEncoding = THREE.sRGBEncoding
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

function Configurator({ history }) {
  //currently used activeOption
  const [activeOption, setActiveOption] = useState(0);

  //Applied Object
  const [appliedFace, setAppliedFace] = useState("F4");
  const [appliedBeard, setAppliedBeard] = useState("BE1");
  const [appliedCheek, setAppliedCheek] = useState("CK1");

  const [appliedEyes, setAppliedEyes] = useState("ES1");
  const [appliedEyeBrow, setAppliedEyeBrow] = useState("EBS1");
  const [appliedBoyHairStyle, setAppliedBoyHairStyle] = useState("BHS1");
  const [appliedMouth, setAppliedMouth] = useState("MH2");
  const [appliedNose, setAppliedNose] = useState("NE1");
  const [appliedUpperClothes, setAppliedUpperClothes] = useState("UCS1");
  const [appliedLowerClothes, setAppliedLowerClothes] = useState("LCS1");
  // const [appliedBody, setAppliedBody] = useState("BO");
  // const [appliedGlasses, setAppliedGlasses] = useState("GS");
  // const [appliedGirlHairStyle, setAppliedGirlHairStyle] = useState("GHS1");
  // const [appliedMole, setAppliedMole] = useState("ME");
  // const [appliedShoes, setAppliedShoes] = useState("SS");
  // const [appliedSkin, setAppliedSkin] = useState("SN");
  
  // For the GLTF Exporter to trigger rendering of full scene
  const [clicked, setClicked] = useState(false);
  const updateClick = (value) => {
    setClicked(value);
  };

 

  const colorMap = function DoSomething() {
    console.log("clicked");
  };

  return (
    <div className="App">
      <div className="change-objects">
        {/* This tray will be filled with the different parts via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}

        {/* FaceObject
          BeardObject
          BodyObject
          CheekObject
          ClothesObject
          EyesObject
          EyeBrowObject
          GlassesObject
          HairStyleObject
          MoleObject
          MouthObject
          NoseObject
          ShoesObject
          SkinObject */}

        <div id="js-objects" className="objects">
          <div id="face" className="objects__slide">
            {activeOption === 0 &&
              face_Objects.map((options, index) => (
                <FaceObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedFace(options.alt_text)}
                />
              ))}
          </div>

          <div id="beard" className="objects__slide">
            {activeOption === 1 &&
              beard_Objects.map((options, index) => (
                <BeardObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedBeard(options.alt_text)}
                />
              ))}
          </div>

          <div id="cheek" className="objects__slide">
            {activeOption === 2 &&
              cheek_Objects.map((options, index) => (
                <CheekObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedCheek(options.alt_text)}
                />
              ))}
          </div>

          <div id="eyes" className="objects__slide">
            {activeOption === 3 &&
              eyes_Objects.map((options, index) => (
                <EyesObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedEyes(options.alt_text)}
                />
              ))}
          </div>

          <div id="eyeBrow" className="objects__slide">
            {activeOption === 4 &&
              eyeBrow_Objects.map((options, index) => (
                <EyeBrowObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedEyeBrow(options.alt_text)}
                />
              ))}
          </div>

          <div id="boyHairStyle" className="objects__slide">
            {activeOption === 5 &&
              boyHairStyle_Objects.map((options, index) => (
                <BoyHairStyleObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedBoyHairStyle(options.alt_text)}
                />
              ))}
          </div>

          {/* <div id="girlHairStyle" className="objects__slide">
            {activeOption === 6 &&
              girlHairStyle_Objects.map((options, index) => (
                <GirlHairStyleObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedGirlHairStyle(options.alt_text)}
                />
              ))}
          </div> */}

          <div id="mouth" className="objects__slide">
            {activeOption === 6 &&
              mouth_Objects.map((options, index) => (
                <MouthObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedMouth(options.alt_text)}
                />
              ))}
          </div>

          <div id="nose" className="objects__slide">
            {activeOption === 7 &&
              nose_Objects.map((options, index) => (
                <NoseObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedNose(options.alt_text)}
                />
              ))}
          </div>

          <div id="upperClothes" className="objects__slide">
            {activeOption === 8 &&
              upperClothes_Objects.map((options, index) => (
                <UpperClothObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedUpperClothes(options.alt_text)}
                />
              ))}
          </div>

          <div id="lowerClothes" className="objects__slide">
            {activeOption === 9 &&
              lowerClothes_Objects.map((options, index) => (
                <LowerClothObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedLowerClothes(options.alt_text)}
                />
              ))}
          </div>

          {/* <div id="shoes" className="objects__slide">
            {activeOption === 12 &&
              shoes_Objects.map((options, index) => (
                <ShoeObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedShoes(options.alt_text)}
                />
              ))}
          </div> */}
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
        <ProfileBtn
          onClick={() => {
            history.push("/private");
          }}
        />
      </div>

      {/* The Canvas element is used to draw the 3D scene  */}
      <div className="product-canvas">
        <Canvas linear flat onCreated={({ gl }) => { gl.toneMapping = THREE.NoToneMapping }}>
          <Suspense fallback={null}>
            <Foo updateClick={updateClick} download={clicked} />
            <ambientLight />
            <directionalLight intensity={0.1} />
            <spotLight
              intensity={0.1}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />

            <Body />

            <Shoes1 />

            {appliedFace ==="F1" && <Face1 />}
            {appliedFace ==="F2" && <Face2 />}
            {appliedFace ==="F3" && <Face3 />}
            {appliedFace ==="F4" && <Face4 />}
            {appliedFace ==="F5" && <Face5 />}
            {appliedFace ==="F6" && <Face6 />}

            {appliedBeard ==="BE1" && appliedFace ==="F4" && <Beard1 />}
            {appliedBeard ==="BE2" && appliedFace ==="F4" && <Beard2 />}
            {appliedBeard ==="BE3" && appliedFace ==="F4" &&  <Beard3 />}
            {appliedBeard ==="BE4" && appliedFace ==="F4" &&  <Beard4 />}
            {appliedBeard ==="BE5" && appliedFace ==="F4" &&  <Beard5 />}

            {appliedCheek ==="CK1" && appliedFace ==="F4" &&  <Cheek1 />}
            {appliedCheek ==="CK2" && appliedFace ==="F4" &&  <Cheek2 />}
            {appliedCheek ==="CK3" && appliedFace ==="F4" &&  <Cheek3 />}
            {appliedCheek ==="CK4" && appliedFace ==="F4" &&  <Cheek4 />}
            {appliedCheek ==="CK5" && appliedFace ==="F4" &&  <Cheek5 />}
            {appliedCheek ==="CK6" && appliedFace ==="F4" &&  <Cheek6 />}
            {appliedCheek ==="CK7" && appliedFace ==="F4" &&  <Cheek7 />}
            {appliedCheek ==="CK8" && appliedFace ==="F4" &&  <Cheek8 />}
            {appliedCheek ==="CK9" && appliedFace ==="F4" &&  <Cheek9 />}
            {appliedCheek ==="CK10" && appliedFace ==="F4" &&  <Cheek10 />}

            {appliedEyes === "ES1" && appliedFace ==="F4" &&  <Eye1 />}
            {appliedEyes === "ES2" && appliedFace ==="F4" &&  <Eye2 />}
            {appliedEyes === "ES3" && appliedFace ==="F4" &&  <Eye3 />}
            {appliedEyes === "ES4" && appliedFace ==="F4" &&  <Eye4 />}
            {appliedEyes === "ES5" && appliedFace ==="F4" &&  <Eye5 />}
            {appliedEyes === "ES6" && appliedFace ==="F4" &&  <Eye6 />}
            {appliedEyes === "ES7" && appliedFace ==="F4" &&  <Eye7 />}
            {appliedEyes === "ES8" && appliedFace ==="F4" &&  <Eye8 />}

            {appliedEyeBrow ==="EBS1" && appliedFace ==="F4" &&  <EyeBrow1 />}
            {appliedEyeBrow ==="EBS2" && appliedFace ==="F4" &&  <EyeBrow2 />}
            {appliedEyeBrow ==="EBS3" && appliedFace ==="F4" &&  <EyeBrow3 />}
            {appliedEyeBrow ==="EBS4" && appliedFace ==="F4" &&  <EyeBrow4 />}
            {appliedEyeBrow ==="EBS5" && appliedFace ==="F4" &&  <EyeBrow5 />}
            {appliedEyeBrow ==="EBS6" && appliedFace ==="F4" &&  <EyeBrow6 />}

            {appliedBoyHairStyle === "BHS1" && appliedFace ==="F4" &&  <BoyHairstyle1 />}
            {appliedBoyHairStyle === "BHS2" && appliedFace ==="F4" &&  <BoyHairstyle2 />}
            {appliedBoyHairStyle === "BHS3" && appliedFace ==="F4" &&  <BoyHairstyle3 />}
            {appliedBoyHairStyle === "BHS4" && appliedFace ==="F4" &&  <BoyHairstyle4 />}
            {/* {appliedBoyHairStyle === "BHS5" && <BoyHairstyle5 />} */}
            {appliedBoyHairStyle === "BHS6" && appliedFace ==="F4" &&  <BoyHairstyle6 />}
            {appliedBoyHairStyle === "BHS7" && appliedFace ==="F4" &&  <BoyHairstyle7 />}
            {appliedBoyHairStyle === "BHS8" && appliedFace ==="F4" &&  <BoyHairstyle8 />}
            {appliedBoyHairStyle === "BHS9" && appliedFace ==="F4" &&  <BoyHairstyle9 />}
            {/* {appliedBoyHairStyle === "BHS10" && <BoyHairstyle10 />} */}
            {appliedBoyHairStyle === "BHS11" && appliedFace ==="F4" &&  <BoyHairstyle11 />}
            {appliedBoyHairStyle === "BHS11" && appliedFace ==="F4" &&  <BoyHairstyle12 />}

            {/* {appliedGirlHairStyle === "GHS1" && <GirlHairstyle1 />}
            {appliedGirlHairStyle === "GHS2" && <GirlHairstyle2 />}
            {appliedGirlHairStyle === "GHS3" && <GirlHairstyle3 />}
            {appliedGirlHairStyle === "GHS4" && <GirlHairstyle4 />}
            {appliedGirlHairStyle === "GHS5" && <GirlHairstyle5 />}
            {appliedGirlHairStyle === "GHS6" && <GirlHairstyle6 />}
            {appliedGirlHairStyle === "GHS7" && <GirlHairstyle7 />}
            {appliedGirlHairStyle === "GHS8" && <GirlHairstyle8 />}
            {appliedGirlHairStyle === "GHS9" && <GirlHairstyle9 />}
            {appliedGirlHairStyle === "GHS10" && <GirlHairstyle10 />} */}

            {appliedMouth === "MH1" && appliedFace ==="F4" &&  <Mouth1 />}
            {appliedMouth === "MH2" && appliedFace ==="F4" &&  <Mouth2 />}
            {appliedMouth === "MH3" && appliedFace ==="F4" &&  <Mouth3 />}
            {appliedMouth === "MH4" && appliedFace ==="F4" &&  <Mouth4 />}
            {appliedMouth === "MH5" && appliedFace ==="F4" &&  <Mouth5 />}
            {appliedMouth === "MH6" && appliedFace ==="F4" &&  <Mouth6 />}
            {appliedMouth === "MH7" && appliedFace ==="F4" &&  <Mouth7 />}
            {appliedMouth === "MH8" && appliedFace ==="F4" &&  <Mouth8 />}

            {appliedNose ==="NE1" && appliedFace ==="F4" &&  <Nose1 />}
            {appliedNose ==="NE2" && appliedFace ==="F4" &&  <Nose2 />}
            {appliedNose ==="NE3" && appliedFace ==="F4" &&  <Nose3 />}
            {appliedNose ==="NE4" && appliedFace ==="F4" &&  <Nose4 />}
            {appliedNose ==="NE5" && appliedFace ==="F4" &&  <Nose5 />}
            {appliedNose ==="NE6" && appliedFace ==="F4" &&  <Nose6 />}

            {appliedUpperClothes ==="UCS1" && <UpperCloth1 />}
            {/* {appliedUpperClothes ==="UCS2" && <UpperCloth2 />} */}
            {appliedUpperClothes ==="UCS3" && <UpperCloth3 />}
            {appliedUpperClothes ==="UCS4" && <UpperCloth4 />}
            {/* {appliedUpperClothes ==="UCS5" && <UpperCloth5 />} */}
            {/* {appliedUpperClothes ==="UCS6" && <UpperCloth6 />} */}
            {appliedUpperClothes ==="UCS7" && <UpperCloth7 />}
            {appliedUpperClothes ==="UCS8" && <UpperCloth8 />}
            {appliedUpperClothes ==="UCS9" && <UpperCloth9 />}
            {/* {appliedUpperClothes ==="UCS10" && <UpperCloth10 />} */}
            {/* {appliedUpperClothes ==="UCS11" && <UpperCloth11 />} */}
            {/* {appliedUpperClothes ==="UCS12" && <UpperCloth12 />} */}

            {appliedLowerClothes ==="LCS1" && <LowerCloth1 />}
            {appliedLowerClothes ==="LCS2" && <LowerCloth2 />}
            {appliedLowerClothes ==="LCS3" && <LowerCloth3 />}
            {/* {appliedLowerClothes ==="LCS4" && <LowerCloth4 />} */}
            {appliedLowerClothes ==="LCS5" && <LowerCloth5 />}
            {appliedLowerClothes ==="LCS6" && <LowerCloth6 />}
            {appliedLowerClothes ==="LCS7" && <LowerCloth7 />}
            {appliedLowerClothes ==="LCS8" && <LowerCloth8 />}
            {/* {appliedLowerClothes ==="LCS9" && <LowerCloth9 />} */}
            {/* {appliedLowerClothes ==="LCS10" && <LowerCloth10 />} */}
            {/* {appliedLowerClothes ==="LCS11" && <LowerCloth11 />} */}
            {/* {appliedLowerClothes ==="LCS12" && <LowerCloth12 />} */}

            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default Configurator;
