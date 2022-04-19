var initialModel = false;

function initialLoad() {
    console.log(initialModel);
    if (!initialModel) {
      addRightHand();
      addLeftHand();
      addHead();
      addBody();
    }
    initialModel = true;
    console.log(initialModel);
  }

  export {initialModel, initialLoad}