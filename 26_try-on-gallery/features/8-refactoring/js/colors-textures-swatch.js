const TRAY = document.getElementById("js-tray-slide");

const colors = [
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/wood_.jpg?v=1649144910756",
    size: [2, 2, 2],
    shininess: 60,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/fabric_.jpg?v=1649144905001",
    size: [4, 4, 4],
    shininess: 0,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/pattern_.jpg?v=1649144906757",
    size: [8, 8, 8],
    shininess: 10,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/denim_.jpg?v=1649144904412",
    size: [3, 3, 3],
    shininess: 0,
  },
  {
    texture:
      "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/quilt_.jpg?v=1649144908805",
    size: [6, 6, 6],
    shininess: 0,
  },
  {
    color: "131417",
  },
  {
    color: "374047",
  },
  {
    color: "5f6e78",
  },
  {
    color: "7f8a93",
  },
  {
    color: "97a1a7",
  },
  {
    color: "acb4b9",
  },
  {
    color: "DF9998",
  },
  {
    color: "7C6862",
  },
  {
    color: "A3AB84",
  },
  {
    color: "D6CCB1",
  },
  {
    color: "F8D5C4",
  },
  {
    color: "A3AE99",
  },
  {
    color: "EFF2F2",
  },
  {
    color: "B0C5C1",
  },
  {
    color: "8B8C8C",
  },
  {
    color: "565F59",
  },
  {
    color: "CB304A",
  },
  {
    color: "FED7C8",
  },
  {
    color: "C7BDBD",
  },
  {
    color: "3DCBBE",
  },
  {
    color: "264B4F",
  },
  {
    color: "389389",
  },
  {
    color: "85BEAE",
  },
  {
    color: "F2DABA",
  },
  {
    color: "F2A97F",
  },
  {
    color: "D85F52",
  },
  {
    color: "D92E37",
  },
  {
    color: "FC9736",
  },
  {
    color: "F7BD69",
  },
  {
    color: "A4D09C",
  },
  {
    color: "4C8A67",
  },
  {
    color: "25608A",
  },
  {
    color: "75C8C6",
  },
  {
    color: "F5E4B7",
  },
  {
    color: "E69041",
  },
  {
    color: "E56013",
  },
  {
    color: "11101D",
  },
  {
    color: "630609",
  },
  {
    color: "C9240E",
  },
  {
    color: "EC4B17",
  },
  {
    color: "281A1C",
  },
  {
    color: "4F556F",
  },
  {
    color: "64739B",
  },
  {
    color: "CDBAC7",
  },
  {
    color: "946F43",
  },
  {
    color: "66533C",
  },
  {
    color: "173A2F",
  },
  {
    color: "153944",
  },
  {
    color: "27548D",
  },
  {
    color: "438AAC",
  },
];

// Function - Build Colors
function buildColors(colors) {
    for (let [i, color] of colors.entries()) {
      let swatch = document.createElement("div");
      swatch.classList.add("tray__swatch");
  
      if (color.texture) {
        swatch.style.backgroundImage = "url(" + color.texture + ")";
      } else {
        swatch.style.background = "#" + color.color;
      }
  
      swatch.setAttribute("data-key", i);
      TRAY.append(swatch);
    }
  }


  
export {colors,TRAY,buildColors}