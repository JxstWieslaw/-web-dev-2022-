for (const swatch of color_swatches) {
    swatch.addEventListener("click", selectColorSwatch);
  }
  
  function selectColorSwatch(e) {
    let color = colors[parseInt(e.target.dataset.key)];
    let new_mtl;
  
    if (color.texture) {
      let txt = new THREE.TextureLoader().load(color.texture);
  
      txt.repeat.set(color.size[0], color.size[1], color.size[2]);
      txt.wrapS = THREE.RepeatWrapping;
      txt.wrapT = THREE.RepeatWrapping;
  
      new_mtl = new THREE.MeshPhongMaterial({
        map: txt,
        shininess: color.shininess ? color.shininess : 10,
      });
    } else {
      new_mtl = new THREE.MeshPhongMaterial({
        color: parseInt("0x" + color.color),
        shininess: color.shininess ? color.shininess : 10,
      });
    }

    console.log(txt)
  
    setMaterial(activeOption, new_mtl);
  }
  
  //setMaterial for setting material on current model configuration
  function setMaterial(selectedObject, mtl) {
    var parent;
    if (selectedObject === "legs") parent = appliedRightHand;
    else if (selectedObject === "cushions") parent = appliedLeftHand;
    parent.traverse((o) => {
      if (o.isMesh) {
        o.material = mtl;
      }
    });
  }