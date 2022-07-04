<div id="js-objects" className="objects">
<div id="animalFace" className="objects__slide">
  {activeOption === 0 &&
    animalFace_Objects.map((options, index) => (
      <AnimalFaceObject
        key={index}
        options={options}
        onClick={() => setAppliedAnimalFace(options.alt_text)}
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

<div id="body" className="objects__slide">
  {activeOption === 2 &&
    body_Objects.map((options, index) => (
      <BodyObject
        key={index}
        options={options}
        onClick={() => setAppliedBody(options.alt_text)}
      />
    ))}
</div>

<div id="cheek" className="objects__slide">
  {activeOption === 3 &&
    cheek_Objects.map((options, index) => (
      <CheekObject
        key={index}
        options={options}
        onClick={() => setAppliedCheek(options.alt_text)}
      />
    ))}
</div>

<div id="clothes" className="objects__slide">
  {activeOption === 4 &&
    clothes_Objects.map((options, index) => (
      <ClothesObject
        key={index}
        options={options}
        onClick={() => setAppliedClothes(options.alt_text)}
      />
    ))}
</div>

<div id="eyes" className="objects__slide">
  {activeOption === 5 &&
    eyes_Objects.map((options, index) => (
      <EyesObject
        key={index}
        options={options}
        onClick={() => setAppliedEyes(options.alt_text)}
      />
    ))}
</div>

<div id="eyeBrow" className="objects__slide">
  {activeOption === 6 &&
    eyeBrow_Objects.map((options, index) => (
      <EyeBrowObject
        key={index}
        options={options}
        onClick={() => setAppliedEyeBrow(options.alt_text)}
      />
    ))}
</div>

<div id="glasses" className="objects__slide">
  {activeOption === 7 &&
    glasses_Objects.map((options, index) => (
      <GlassesObject
        key={index}
        options={options}
        onClick={() => setAppliedGlasses(options.alt_text)}
      />
    ))}
</div>

<div id="hairStyle" className="objects__slide">
  {activeOption === 8 &&
    hairStyle_Objects.map((options, index) => (
      <HairStyleObject
        key={index}
        options={options}
        onClick={() => setAppliedHairStyle(options.alt_text)}
      />
    ))}
</div>

<div id="mole" className="objects__slide">
  {activeOption === 9 &&
    mole_Objects.map((options, index) => (
      <MoleObject
        key={index}
        options={options}
        onClick={() => setAppliedMole(options.alt_text)}
      />
    ))}
</div>

<div id="mouth" className="objects__slide">
  {activeOption === 10 &&
    mouth_Objects.map((options, index) => (
      <MouthObject
        key={index}
        options={options}
        onClick={() => setAppliedMouth(options.alt_text)}
      />
    ))}
</div>

<div id="nose" className="objects__slide">
  {activeOption === 11 &&
    nose_Objects.map((options, index) => (
      <NoseObject
        key={index}
        options={options}
        onClick={() => setAppliedNose(options.alt_text)}
      />
    ))}
</div>

<div id="shoes" className="objects__slide">
  {activeOption === 12 &&
    shoes_Objects.map((options, index) => (
      <ShoesObject
        key={index}
        options={options}
        onClick={() => setAppliedShoes(options.alt_text)}
      />
    ))}
</div>

<div id="skin" className="objects__slide">
  {activeOption === 13 &&
    skin_Objects.map((options, index) => (
      <SkinObject
        key={index}
        options={options}
        onClick={() => setAppliedSkin(options.alt_text)}
      />
    ))}
</div>