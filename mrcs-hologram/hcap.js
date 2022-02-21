// This component waits for a tap to place a hologram, and then starts the hologram after dismissing
// prompt text. The hologram uses an invisible cylinder for a touch target.
const hcapComponent = () => ({
  schema: {
    src: { default: "" }, // hcap asset path
    size: { default: 1 }, // hologram starting size
    loop: { default: true }, // volumetric video looping
    "touch-target-size": { default: "1.65 0.35" }, // size of touch target cylinder: height, radius
    "touch-target-offset": { default: "0 0" }, // offset of touch target cylinder: x, z
    "touch-target-visible": { default: false }, // show touch target for debugging
  },
  init() {
    this.meshInitialized = false;
    this.showedPrompt = false;
    this.ground = document.getElementById("ground");
    this.prompt = document.getElementById("promptText");

    this.hvo = new HoloVideoObjectThreeJS(this.el.sceneEl.renderer, (mesh) => {
      mesh.position.set(0, 0, 0);
      mesh.rotation.set(0, -3.14, 0);
      mesh.castShadow = true;
      this.el.object3D.add(mesh);
      this.meshInitialized = true;
    });

    // This check improves iOS webview compatibility
    if (["iPhone", "iPad", "iPod"].includes(navigator.platform)) {
      this.hvo.hvo.isSafari = true;
    }

    // create the hcap hologram
    this.hvo.open(this.data.src, {
      autoloop: this.data.loop,
      audioEnabled: true,
    });

    // hide hologram entity before placement
    this.el.setAttribute("visible", "false");

    // add a cylinder primitive to receive raycasting for gestures. It is raised slightly
    // off the ground to support tapping on the ground.
    const [tapVolumeHeight, tapVolumeRadius] = this.data["touch-target-size"]
      .split(" ")
      .map((v) => Number(v));
    const [tapTargetOffsetX, tapTargetOffsetZ] = this.data[
      "touch-target-offset"
    ]
      .split(" ")
      .map((v) => Number(v));
    const touchTargetAlpha = this.data["touch-target-visible"] ? 0.2 : 0.0;

    this.el.insertAdjacentHTML(
      "beforeend",
      `
      <a-entity 
        geometry="primitive: cylinder; height: ${
          tapVolumeHeight - 0.15
        }; radius: ${tapVolumeRadius}" 
        material="transparent: true; opacity: ${touchTargetAlpha}; depthTest: false;" 
        position="${tapTargetOffsetX} ${
        (tapVolumeHeight - 0.15) * 0.5 + 0.15
      } ${tapTargetOffsetZ}" 
        class="cantap"
        shadow="cast: false; receive: false">
      </a-entity>`
    );

    // Play/Pause functionality
    this.pauseBtn = document.getElementById("pauseBtn");
    let pause = this.hvo.autoloop;
    const playImg = require("./assets/icons/play.svg");
    const pauseImg = require("./assets/icons/pause.svg");
    const pauseHcap = () => {
      pause = !pause;
      if (pause) {
        this.pauseBtn.src = playImg;
        this.hvo.pause(); // pause hcap
      } else {
        this.pauseBtn.src = pauseImg;
        this.hvo.play(); // play hcap
      }
    };
    this.pauseBtn.addEventListener("click", pauseHcap);

    // Mute/Unmute functionality
    this.muteBtn = document.getElementById("muteBtn");
    let mute = !this.hvo.audioEnabled;
    const muteImg = require("./assets/icons/mute.svg");
    const soundImg = require("./assets/icons/sound.svg");
    const muteHcap = () => {
      mute = !mute;
      if (mute) {
        this.muteBtn.src = muteImg;
        this.hvo.setAudioEnabled(false); // mute hcap
      } else {
        this.muteBtn.src = soundImg;
        this.hvo.setAudioEnabled(true); // unmute hcap
      }
    };
    this.muteBtn.addEventListener("click", muteHcap);

    // Tap to Place HCAP
    this.placeHologram = (event) => {
      // Dismiss the prompt text.
      this.prompt.style.display = "none";
      this.pauseBtn.style.display = "block";
      this.muteBtn.style.display = "block";

      // Make the hologram visible at the touch point
      this.el.setAttribute("visible", "true");
      const touchPoint = event.detail.intersection.point;
      this.el.setAttribute("position", touchPoint);
      const camRot = this.el.sceneEl.camera.el.getAttribute("rotation");
      const thisRot = this.el.getAttribute("rotation");
      this.el.setAttribute("rotation", `${thisRot.x} ${camRot.y} ${thisRot.z}`);

      // begin hcap playback
      this.hvo.play();

      // Animate hologram in from a small scale to its end scale.
      const minS = this.data.size / 50;
      const maxS = this.data.size;
      this.el.setAttribute("scale", `${minS} ${minS} ${minS}`);
      this.el.setAttribute("animation", {
        property: "scale",
        to: `${maxS} ${maxS} ${maxS}`,
        easing: "easeOutElastic",
        delay: 100,
        dur: 800,
      });
    };
  },
  // separate behavior by device category using 8th Wall Engine sessionAttributes
  responsiveImmersive(sessionAttributes) {
    const s = sessionAttributes;
    if (
      !s.cameraLinkedToViewer &&
      !s.controlsCamera &&
      !s.fillsCameraTexture &&
      !s.supportsHtmlEmbedded &&
      s.supportsHtmlOverlay &&
      !s.usesMediaDevices &&
      !s.usesWebXr
    ) {
      // Desktop-specific behavior goes here
      this.prompt.innerHTML = "Click Ground to Place Hologram";
      this.ground.object3D.position.set(0, -0.975, 0);
    } else if (
      s.cameraLinkedToViewer &&
      s.controlsCamera &&
      !s.fillsCameraTexture &&
      s.supportsHtmlEmbedded &&
      !s.supportsHtmlOverlay &&
      !s.usesMediaDevices &&
      s.usesWebXr
    ) {
      // HMD-specific CSS changes
      this.prompt.innerHTML = "Click Ground to Place Hologram";
      this.prompt.style.width = "80vw";
      this.prompt.style.fontSize = "8vw";
      this.pauseBtn.style.width = "10vw";
      this.muteBtn.style.width = "10vw";
      if (this.el.sceneEl.xrSession.environmentBlendMode === "opaque") {
        // VR HMD (i.e. Oculus Quest) behavior goes here
        this.ground.object3D.position.set(0, -0.975, 0);
      } else if (
        this.el.sceneEl.xrSession.environmentBlendMode === "additive" ||
        "alpha-blend"
      ) {
        // AR HMD (i.e. Hololens) behavior goes here
      }
    } else if (
      !s.cameraLinkedToViewer &&
      !s.controlsCamera &&
      s.fillsCameraTexture &&
      !s.supportsHtmlEmbedded &&
      s.supportsHtmlOverlay &&
      s.usesMediaDevices &&
      !s.usesWebXr
    ) {
      // Mobile-specific behavior goes here
      this.prompt.innerHTML = "Tap to Place<br>Hologram";
    }
  },
  tick() {
    if (this.meshInitialized) {
      this.hvo.update();

      // Display loading
      if (!this.showedPrompt && this.hvo.state === 1) {
        this.prompt.style.display = "block";
        this.prompt.innerHTML = "Loading...";
      }

      // Show 'XX to Place Hologram' when 'Opened' (2) state is reached
      if (!this.showedPrompt && this.hvo.state === 2) {
        const onAttach = ({ sessionAttributes }) => {
          this.responsiveImmersive(sessionAttributes);
        };
        XR8.addCameraPipelineModules([
          { name: "responsiveImmersive", onAttach },
        ]);
        this.prompt.style.display = "block";
        this.ground.addEventListener("mousedown", this.placeHologram, {
          once: true,
        });
        this.showedPrompt = true;
      }
    }
  },
  remove() {
    this.hvo.close(); // stops playback and releases capture-specific resources
  },
});

const hcapPrimitive = () => ({
  defaultComponents: {
    hcap: {},
  },
  mappings: {
    src: "hcap.src",
    size: "hcap.size",
    loop: "hcap.loop",
    "touch-target-size": "hcap.touch-target-size",
    "touch-target-offset": "hcap.touch-target-offset",
    "touch-target-visible": "hcap.touch-target-visible",
  },
});

export { hcapComponent, hcapPrimitive };
