
//Function required for Download Button Functionality
function Foo({ download, updateClick }) {
    const { scene } = useThree();
    const handleClick = (value) => {
      updateClick(value);
    };
    console.log(download);
    if (download) {
      handleClick(false);
      const exporter = new GLTFExporter();
      exporter.parse(
        scene,
        function (result) {
          saveArrayBuffer(result, scene);
        },
        {
          binary: true, //should be false if you need a GLTF Format file
        }
      );
      console.log(download);
    }
  }
  
  function saveArrayBuffer(buffer) {
    const blobURL = URL.createObjectURL(
      new Blob([buffer], { type: "application/octet-stream" })
    );
    const saveFile = () => {
      saveAs(blobURL, "ThreejsScene.glb");
    };
    saveFile();
  }
  
  function DownloadBtn({ onClick }) {
    return (
      <>
        <Button onClick={onClick} variant="contained" color="primary">
          Download GLB
        </Button>
      </>
    );
  }