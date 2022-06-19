// The corresponding color arrays will be defined inside these files
//Each will be its own function with states accordingly
//Two arrays will be required

const [colorBK, setColorBK] = useState(null);
const [textureBK, setTextureBK] = useState(null);
const [colorBK1, setColorBK1] = useState(null);
const [textureBK1, setTextureBK1] = useState(null);
const [colorBK2, setColorBK2] = useState(null);
const [textureBK2, setTextureBK2] = useState(null);
//The array containing tne actual values of textures to be loaded and OR colors
// 1. Pictures for front-end
const colors = [
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
      color: "#85BEAE",
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

//   2. Actual values for the textures and colors
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
      color: "#281A1C",
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
//Plenty of conditonal rendering will be availed.