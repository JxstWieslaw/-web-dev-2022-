function applyWeapon(value) {
    const weapons = {
      0: axe(),
      1: sword(),
    };
  
    scene.remove.apply(applyedWeapon, applyedWeapon.children);
  
    applyedWeapon = weapons[value];
    addWeapon();
  }

  function applyLeftHand(value){
    const lefthand= {
        0: leftHand2(),
        1: leftHand1(),
    }

    scene.remove.apply(appliedLeftHand, appliedLeftHand.children);

    appliedLeftHand = lefthand[value];
    addLeftHand();
  }
