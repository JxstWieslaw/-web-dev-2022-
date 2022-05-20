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
    } else if (activeOption === 6) {
      if (appliedSupport === "SP") {
        setTextureSP(new_mtl);
        setColorSP(null);
      }
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
console.log(new_mtl);
