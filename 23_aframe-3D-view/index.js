// import Hammer, { DIRECTION_ALL } from "hammerjs";

var myElement = document.getElementById("main");
var myObject = document.getElementById("panObject");

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);
// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get("pan").set({ direction: DIRECTION_ALL });
// listen to events...
var distX = -45;
var distY = 45;
var distZ = 30;
var friction = 0.01;
myObject.style.webkitTransform =
  "rotateY(" +
  distX +
  "deg) rotateX(" +
  distY +
  "deg) rotateZ(" +
  distZ +
  "deg)";

mc.on("panstart", function (ev) {
  if (isExpand) {
    myObject.className = "expand";
  } else {
    myObject.className = "";
  }
});
mc.on("panmove", function (ev) {
  myObject.style.webkitTransform =
    "rotateY(" +
    distX +
    "deg) rotateX(" +
    distY +
    "deg) rotateZ(" +
    distZ +
    "deg)";
  console.log(Math.abs(ev.velocity));
});
mc.on("panend", function (ev) {
  myObject.style.webkitTransform =
    "rotateY(" +
    distX +
    "deg) rotateX(" +
    distY +
    "deg) rotateZ(" +
    distZ +
    "deg)";
});

mc.on("panleft panright panup pandown", function (ev) {
  if (Math.abs(ev.velocity) >= 3.5) {
    friction = 1;
    if (isExpand) {
      myObject.className = "expand thrown";
    } else {
      myObject.className = "thrown";
    }
  } else {
    friction = 0.01;
  }

  if (ev.type == "panleft" || ev.type == "panright") {
    distX =
      parseFloat(
        myObject.style.webkitTransform.split(" ")[0].split(/[()]/)[1]
      ) +
      ev.deltaX * friction;
  }
  if (ev.type == "panup" || ev.type == "pandown") {
    distY =
      parseFloat(
        myObject.style.webkitTransform.split(" ")[1].split(/[()]/)[1]
      ) +
      ev.deltaY * friction;
  }

  // console.log(dist, ndist);
});

// double tap makes the cube expand
var isExpand = false;
mc.get("tap").set({ enable: true });
mc.on("tap", function (ev) {
  if (!isExpand) {
    myObject.className = "expand";
    myElement.className = "expand-shadow";
    isExpand = true;
  } else {
    myObject.className = "";
    myElement.className = "";
    isExpand = false;
  }
});

var currentRotation = 0;
mc.get("rotate").set({ enable: true });
mc.on("rotatestart rotateend rotatemove", function (ev) {
  var rotation =
    parseFloat(myObject.style.webkitTransform.split(" ")[2].split(/[()]/)[1]) +
    ev.rotation / 100;
  distZ =
    parseFloat(myObject.style.webkitTransform.split(" ")[2].split(/[()]/)[1]) -
    rotation;
  myObject.style.webkitTransform =
    "rotateY(" +
    distX +
    "deg) rotateX(" +
    distY +
    "deg) rotateZ(" +
    distZ +
    "deg)";
});
mc.on("rotateend", function (ev) {
  currentRotation = parseFloat(
    myObject.style.webkitTransform.split(" ")[2].split(/[()]/)[1]
  );
});
