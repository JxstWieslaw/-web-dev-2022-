import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.117.0/examples/jsm/loaders/GLTFLoader.js';
import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';

const clock = new THREE.Clock();
let mixer;
let animationHover;
const group = new THREE.Group();


let animationMixer;
let isHovered = false;
let animation;
let isRotation = true;
let animated = false;
const texture = new THREE.TextureLoader().load( './img/Screenshot_20220628-162647_2.png' );
const envMap = new THREE.TextureLoader().load( './img/Screenshot_20220628-162647_2.png' );
envMap.encoding = THREE.sRGBEncoding;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1C6AB3);
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 3);
directionalLight.position.set(0,15,7);
scene.add( directionalLight );
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
//let camera = new THREE.OrthographicCamera( 0.006*window.innerWidth / - 2, 0.006*window.innerWidth / 2, 0.006*window.innerHeight / 2, 0.006*window.innerHeight / - 2, 1, 1000 );
camera.position.set(0,1,5.5);

let canvasWidth = window.innerWidth;
const bodyDiv = document.querySelector("#app")
const canvas = document.querySelector("#c");

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera,canvas);
controls.update();
controls.enableZoom =true;
controls.enabled =true;

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2(500,500);

function onPointerMove( event ) {
	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

document.addEventListener("mousemove", (event)=>{
    onPointerMove(event);
},false)
var urls = ["./img/cubemapDay/px.png", "./img/cubemapDay/nx.png",
        "./img/cubemapDay/py.png", "./img/cubemapDay/ny.png",
        "./img/cubemapDay/pz.png", "./img/cubemapDay/nz.png"
];

var textureCube = new THREE.CubeTextureLoader().load(urls);
textureCube.format = THREE.RGBFormat;

const loader = new GLTFLoader();
let banner;
loader.load(
    './obj/full frame1.glb',

    (gltf)=>{

        /*mixer = new THREE.AnimationMixer( gltf.scene );
       
        animationHover= mixer.clipAction(gltf.animations[0]);
        animationHover.setLoop(THREE.LoopOnce);
        animationHover.clampWhenFinished = true;
        animationHover.enable = true;
        
        animationHover.play();*/

              
        banner = gltf.scene;
        animationMixer = new THREE.AnimationMixer(banner);
        animation = animationMixer.clipAction(gltf.animations[0]);
        animation.timeScale = 0.7;
        
        // setTimeout(()=>{
        //     animation.timeScale = 1;
        // },1500)
        animation.play();
        banner.scale.set(42,42,42);
        banner.traverse(child=>{
            if(child.isMesh){
                if(child.name != "sprite"){
                    child.renderOrder = -5;
                }
                child.material.envMap = textureCube;
                child.material.envMapIntensity = 2;
                // child.material.envMap = envMap;
                // child.material.envMapIntensity = 5;
                child.material.needsUpdate = true;
                if(child.material.name == "aiStandardSurface5.003"){
                    child.material.transparent = true;
                    child.material.opacity = 0.3;
                }
                // if(child.material.name == "Standardmaterial.004"){
                //     child.material.transparent = true;
                //     child.material.transmission = 1;
                // }
                if(child.material.name == "aiStandardSurface3.001"){
                    /*let prevMat = child.material;
                    child.material = new THREE.MeshPhongMaterial({
                        color: prevMat.color,
                        emissive: prevMat.emissive,
                        emissiveIntesity: 50,
                        envMap: textureCube,
                        combine: THREE.MultiplyOperation,
                        reflectivity: 0.5,
                        metalness: 3,
                        roughness: 0
                    });*/
                }
                if(child.name == "Shape002"){
                    window.alert("aaaaaaa")
                    // use sprite because it appears the same from all angles
                    /*var spriteMaterial = new THREE.SpriteMaterial( 
                    { 
                        map: new THREE.ImageUtils.loadTexture( 'img/glow.png' ), 
                        useScreenCoordinates: false,
                        color: 0xff0000, transparent: true, blending: THREE.AdditiveBlending, opacity: 0.99
                    });
                    var sprite = new THREE.Sprite( spriteMaterial );
                    sprite.name = "sprite";
                    sprite.scale.set(15, 15, 15);
                    sprite.position.set(0.313,4.755, -6.28);
                    child.add(sprite); // this centers the glow at the mesh*/
                    
                }
                
                //back panel
                // if(child.material.name == "Standardmaterialwer.001"){
                //     let prevMat = child.material;
                //     child.material = new THREE.MeshPhongMaterial({
                //         color: prevMat.color,
                //         envMap: textureCube,
                //         combine: THREE.MultiplyOperation,
                //         reflectivity: 1,
                //         metalness: 3,
                //         roughness: 0
        
                //     });
                //     child.material.transparent = true;
                //     child.material.opacity = 0.6
                // }
                // if(child.material.name == "Standardmaterialwerrhkyu.001"){
                //     let prevMat = child.material;
                //     child.material = new THREE.MeshPhongMaterial({
                //         color: prevMat.color,
                //         envMap: textureCube,
                //         combine: THREE.MultiplyOperation,
                //         reflectivity: 1,
                //         metalness: 3,
                //         roughness: 0
        
                //     });
                //     child.material.transparent = true;
                //     child.material.opacity = 0.6
                // }
                // if(child.material.name == "Standardmaterial.007"){
                //     let prevMat = child.material;
                //     child.material = new THREE.MeshPhongMaterial({
                //         color: prevMat.color,
                //         envMap: textureCube,
                //         combine: THREE.MultiplyOperation,
                //         reflectivity: 1,
                //         metalness: 3,
                //         roughness: 0
        
                //     });
                //     child.material.transparent = true;
                //     child.material.opacity = 0.6
                // }
                let transparentMap = new THREE.TextureLoader().load('./obj/full frame2_img1.png')
                if(child.material.name == "Standardmaterial.004"){
                    let prevMat = child.material;
                    child.material = new THREE.MeshPhongMaterial({
                        color: prevMat.color,
                        envMap: transparentMap,
                        combine: THREE.MultiplyOperation,
                        reflectivity: 1,
                        metalness: 3,
                        roughness: 0
        
                    });
                    child.material.transparent = true;
                    child.material.opacity = 0
                }
                
                
                //console.log(child);
            }
        })
        controls.target.set(banner.position.x, banner.position.y+1, banner.position.z);
        banner.position.set(banner.position.x, banner.position.y-1, banner.position.z);
        
        group.add(banner);
    },
    ( xhr )=> {

		//console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	( error )=> {

		//console.log( 'An error happened' + error);

	}
)

group.position.x = 0;
scene.add( group );

let planeGeo = new THREE.PlaneGeometry(1,2);
let planeMat = new THREE.MeshPhongMaterial({
    map: new THREE.ImageUtils.loadTexture( 'img/glow.png' ),
    transparent: true,
    color: 0x93ffe8,
    opacity: 0.7,
    side: THREE.DoubleSide
})
let planeMesh = new THREE.Mesh(planeGeo, planeMat);
planeMesh.scale.set(10.5,5.5,1);
planeMesh.position.set(0,0.465,0);
planeMesh.name = "glow-plane-mesh";
group.add(planeMesh);

function tweenToStart(){
    let startRotation = new THREE.Vector3(group.rotation.x, group.rotation.y, group.rotation.z);
    let finalRotation = new THREE.Vector3(group.rotation.x, 0, group.rotation.z);
    if((2*Math.PI) - group.rotation.y < group.rotation.y){
        finalRotation.y = 2*Math.PI;
    }
    new TWEEN.Tween(startRotation)
            .to(finalRotation, 800)
            .onUpdate(()=>{
                group.rotation.y = startRotation.y;
            })
            .easing(TWEEN.Easing.Quadratic.Out)
            .onComplete(()=>{
                animated = false;
            })
            .start();
}


var animate = function() {

    //speed ofrotation
    if(banner && isRotation){
        group.rotation.y = (group.rotation.y + 0.009) % (2*Math.PI);
        //planeMesh.rotation.y = (banner.rotation.y + 0.00138) % (2*Math.PI);

    }

    if(!isRotation && !animated){
        animated = true;
        tweenToStart();
    }

    


    // update the picking ray with the camera and pointer position
    raycaster.setFromCamera( pointer, camera );

    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects( scene.children, true );
    if(intersects.length > 0 && intersects[0].object.name !== "glow-plane-mesh"){
        if(!isHovered){
            animation.timeScale = -4.5;
        }
        isHovered = true;
        isRotation = false;
        
    }else{
        if(isHovered){
            animation.timeScale = 0.7;
            // setTimeout(()=>{
                
            // },1500)
        }
        isHovered = false;
        isRotation = true;
       
    }

    if(animationMixer){
        const delta = clock.getDelta();
        animationMixer.update(delta);
        if(animation.time >= animation._clip.duration*0.90 && !isHovered){
            animation.timeScale = 0;
        }
        if(animation.time <= 0.15 && isHovered){
            animation.timeScale = 0;
        }
    }
    renderer.render( scene, camera );
    requestAnimationFrame(animate);
    controls.update();
    render();
    TWEEN.update();
};

function render() {
    renderer.render(scene, camera);
}

animate();