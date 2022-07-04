import { useState, useRef, useEffect } from "react";
import "../index.css";
import "../../../index.css";
import { Color, colors } from "./Color/swatch";

export const colors = [
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/wood_.jpg?v=1649144910756",
    color: null,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/fabric_.jpg?v=1649144905001",
    color: null,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/pattern_.jpg?v=1649144906757",
    color: null,
  },

  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/denim_.jpg?v=1649144904412",
    color: null,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/quilt_.jpg?v=1649144908805",
    color: null,
  },
  {
    color: "#131417",
    texture: null,
  },
  {
    color: "#374047",
    texture: null,
  },
  {
    color: "#5f6e78",
    texture: null,
  },
  {
    color: "#7f8a93",
    texture: null,
  },
  {
    color: "#97a1a7",
    texture: null,
  },
  {
    color: "#acb4b9",
    texture: null,
  },
  {
    color: "#DF9998",
    texture: null,
  },
  {
    color: "#7C6862",
    texture: null,
  },
  {
    color: "#A3AB84",
    texture: null,
  },
  {
    color: "#D6CCB1",
    texture: null,
  },
  {
    color: "#F8D5C4",
    texture: null,
  },
  {
    color: "#A3AE99",
    texture: null,
  },
  {
    color: "#EFF2F2",
    texture: null,
  },
  {
    color: "#B0C5C1",
    texture: null,
  },
  {
    color: "#8B8C8C",
    texture: null,
  },
  {
    color: "#565F59",
    texture: null,
  },
  {
    color: "#CB304A",
    texture: null,
  },
  {
    color: "#FED7C8",
    texture: null,
  },
  {
    color: "#C7BDBD",
    texture: null,
  },
  {
    color: "#3DCBBE",
    texture: null,
  },
  {
    color: "#264B4F",
    texture: null,
  },
  {
    color: "#389389",
    texture: null,
  },
  {
    color: "#F2DABA",
    texture: null,
  },
  {
    color: "#F2A97F",
    texture: null,
  },
  {
    color: "#D85F52",
    texture: null,
  },
  {
    color: "#D92E37",
    texture: null,
  },
  {
    color: "#FC9736",
    texture: null,
  },
  {
    color: "#F7BD69",
    texture: null,
  },
  {
    color: "#A4D09C",
    texture: null,
  },
  {
    color: "#4C8A67",
    texture: null,
  },
  {
    color: "#25608A",
    texture: null,
  },
  {
    color: "#75C8C6",
    texture: null,
  },
  {
    color: "#F5E4B7",
    texture: null,
  },
  {
    color: "#E69041",
    texture: null,
  },
  {
    color: "#E56013",
    texture: null,
  },
  {
    color: "#11101D",
    texture: null,
  },
  {
    color: "#630609",
    texture: null,
  },
  {
    color: "#C9240E",
    texture: null,
  },
  {
    color: "#EC4B17",
    texture: null,
  },
  {
    color: "#281A1C",
    texture: null,
  },
  {
    color: "#4F556F",
    texture: null,
  },
  {
    color: "#64739B",
    texture: null,
  },
  {
    color: "#CDBAC7",
    texture: null,
  },
  {
    color: "#946F43",
    texture: null,
  },
  {
    color: "#66533C",
    texture: null,
  },
  {
    color: "#173A2F",
    texture: null,
  },
  {
    color: "#153944",
    texture: null,
  },
  {
    color: "#27548D",
    texture: null,
  },
  {
    color: "#438AAC",
    texture: null,
  },
];

export const Color = ({ background, onClick }) => {
  const divBackgroundImage = {
    backgroundImage: "url(" + background.texture + ")",
  };

  const divBackgroundColor = {
    background: background.color,
  };

  return (
    <>
      <div
        className="tray__swatch"
        style={background.texture ? divBackgroundImage : divBackgroundColor}
        onClick={onClick}
      ></div>
    </>
  );
};

const ColorChange = () => {
  //SKIN COLOR OPTIONS (1 object)
  const [colorSN, setColorSN] = useState(null);
  const [textureSN, setTextureSN] = useState(null);

  //EYES COLOR OPTIONS (5 objects)
  const [colorES1, setColorES1] = useState(null);
  const [colorES2, setColorES2] = useState(null);
  const [colorES3, setColorES3] = useState(null);
  const [colorES4, setColorES4] = useState(null);
  const [colorES5, setColorES5] = useState(null);
  const [textureES1, setTextureES1] = useState(null);
  const [textureES2, setTextureES2] = useState(null);
  const [textureES3, setTextureES3] = useState(null);
  const [textureES4, setTextureES4] = useState(null);
  const [textureES5, setTextureES5] = useState(null);

  //UPPER BODY DRESSES (12 Objects)
  const [colorBK1, setColorBK1] = useState(null);
  const [textureBK1, setTextureBK1] = useState(null);

  //LOWER BODY DRESSES (12 Objects)
  const [colorBK2, setColorBK2] = useState(null);
  const [textureBK2, setTextureBK2] = useState(null);

  //SHOES (4 Objects)
  const [colorBS, setColorBS] = useState(null);
  const [textureBS, setTextureBS] = useState(null);

  const colorChange = [
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/wood_.jpg?v=1649144910756"
      ),
      size: [2, 2, 2],
      shininess: 60,
      color: null,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/fabric_.jpg?v=1649144905001"
      ),
      size: [4, 4, 4],
      shininess: 0,
      color: null,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/pattern_.jpg?v=1649144906757"
      ),
      size: [8, 8, 8],
      shininess: 10,
      color: null,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/denim_.jpg?v=1649144904412"
      ),
      size: [3, 3, 3],
      shininess: 0,
      color: null,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/quilt_.jpg?v=1649144908805"
      ),
      size: [6, 6, 6],
      shininess: 0,
      color: null,
    },
    {
      color: "#131417",
    },
    {
      color: "#374047",
    },
    {
      color: "#5f6e78",
    },
    {
      color: "#7f8a93",
    },
    {
      color: "#97a1a7",
    },
    {
      color: "#acb4b9",
    },
    {
      color: "#DF9998",
    },
    {
      color: "#7C6862",
    },
    {
      color: "#A3AB84",
    },
    {
      color: "#D6CCB1",
    },
    {
      color: "#F8D5C4",
    },
    {
      color: "#A3AE99",
    },
    {
      color: "#EFF2F2",
    },
    {
      color: "#B0C5C1",
    },
    {
      color: "#8B8C8C",
    },
    {
      color: "#565F59",
    },
    {
      color: "#CB304A",
    },
    {
      color: "#FED7C8",
    },
    {
      color: "#C7BDBD",
    },
    {
      color: "#3DCBBE",
    },
    {
      color: "#264B4F",
    },
    {
      color: "#389389",
    },
    {
      color: "#85BEAE",
    },
    {
      color: "#F2DABA",
    },
    {
      color: "#F2A97F",
    },
    {
      color: "#D85F52",
    },
    {
      color: "#D92E37",
    },
    {
      color: "#FC9736",
    },
    {
      color: "#F7BD69",
    },
    {
      color: "#A4D09C",
    },
    {
      color: "#4C8A67",
    },
    {
      color: "#25608A",
    },
    {
      color: "#75C8C6",
    },
    {
      color: "#F5E4B7",
    },
    {
      color: "#E69041",
    },
    {
      color: "#E56013",
    },
    {
      color: "#11101D",
    },
    {
      color: "#630609",
    },
    {
      color: "#C9240E",
    },
    {
      color: "#EC4B17",
    },
    {
      color: +"#281A1C",
    },
    {
      color: "#4F556F",
    },
    {
      color: "#64739B",
    },
    {
      color: "#CDBAC7",
    },
    {
      color: "#946F43",
    },
    {
      color: "#66533C",
    },
    {
      color: "#173A2F",
    },
    {
      color: "#153944",
    },
    {
      color: "#27548D",
    },
    {
      color: "#438AAC",
    },
  ];

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

  return {
    /* {appliedBack === "BK" && (
              <Back texture={textureBK} color={colorBK} />
            )} */

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
  };
};
