import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from "three";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { vertexShader } from '../shaders/bloom/vertex-shader.js';
import { fragmentShader } from '../shaders/bloom/fragment-shader.js';

const element = document.getElementById("voyager");

let width = element.clientWidth;
let height = element.clientHeight;

let mouseX = width / 2;
let mouseY = height / 2;
let wasUnderNavbar = false;

const BLOOM_SCENE = 1;

const bloomLayer = new THREE.Layers();
bloomLayer.set( BLOOM_SCENE );

const darkMaterial = new THREE.MeshBasicMaterial( { color: 'black' } );
const materials = {};

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
renderer.toneMapping = THREE.ReinhardToneMapping;
element.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 0.6;
camera.position.z = 1;
scene.add(camera);

const rightPointLight = new THREE.PointLight(0xe79023, 2, 100);
rightPointLight.position.set(3, -0.6, 2);
scene.add(rightPointLight);

const leftPointLight = new THREE.PointLight(0x6e1f00, 0.5, 100);
leftPointLight.position.set(-3, -0.6, 2);
scene.add(leftPointLight);

// const ambientLight = new THREE.AmbientLight(0x333333, 1);
// scene.add(ambientLight);

const textureCube = generateCubeMap();
scene.environment = textureCube;

const loader = new GLTFLoader();
let object;
loader.load(
  'assets/models/branding/voyager.glb',
  (gltf) => {
    object = gltf.scene;
    object.traverse((child) => {
      if (child.isMesh) {
        child.layers.enable(BLOOM_SCENE);
      }
    });
    scene.add(object);
  },
  (xhr) => {},
  (error) => {
    console.error(error);
  }
);

const renderScene = new RenderPass( scene, camera );

// const params = {
//     strength: 2,
//     radius: 1,
//     threshold: 0.05
//   };
// const params = {
//     strength: .7,
//     radius: -5,
//     threshold: 0.04
//   };
  const params = {
    strength: 0.17,
    radius: -40,
    threshold: 0.04
  };

const bloomPass = new UnrealBloomPass( new THREE.Vector2( width, height ), params.strength, params.radius, params.threshold);

const bloomComposer = new EffectComposer( renderer );
bloomComposer.renderToScreen = false;
bloomComposer.addPass( renderScene );
bloomComposer.addPass( bloomPass );

const finalPass = new ShaderPass(
  new THREE.ShaderMaterial( {
    uniforms: {
      baseTexture: { value: null },
      bloomTexture: { value: bloomComposer.renderTarget2.texture }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    defines: {}
  } ), 'baseTexture'
);
finalPass.needsSwap = true;

const finalComposer = new EffectComposer( renderer );
finalComposer.addPass(renderScene);
finalComposer.addPass(finalPass);

function generateCubeMap() {
  const images = [];
  const c = document.createElement("canvas");
  c.width = 1;
  c.height = 1;
  const ctx = c.getContext("2d");

  ctx.fillStyle = "#1a1817";
  ctx.fillRect(0, 0, c.width, c.height);

  const whiteImage = c.toDataURL();
  for (let i = 0; i < 6; i++) {
    images.push(whiteImage);
  }

  const cm = new THREE.CubeTextureLoader().load(images);
  cm.format = THREE.RGBFormat;
  return cm;
}

let targetRotationX = 0;
let targetRotationY = 0;
let rotationYSpinOffset = 0;

const spinSpeed = 0.0035;
const rotationSpeed = 0.02;
const maxRotX = -0.5;
const minRotX = -0.5;

function animate() {
  requestAnimationFrame(animate);

  if (object) {
    rotationYSpinOffset += spinSpeed;
    targetRotationY = -3.075 + (mouseX / width) * 3 + rotationYSpinOffset;
    targetRotationX = Math.min(Math.max(-1.75 + (mouseY * 2.5) / height, minRotX), maxRotX);

    object.rotation.x += (targetRotationX - object.rotation.x) * rotationSpeed;
    object.rotation.y += (targetRotationY - object.rotation.y) * rotationSpeed;
  }

  // renderer.render(scene, camera);
  scene.traverse( darkenNonBloomed );
  bloomComposer.render();
  scene.traverse( restoreMaterial );
  finalComposer.render();
}

window.addEventListener("resize", () => {
  if (element.parentElement.parentElement.id != 'voyager-navbar-target') {
    updateSize();
  } else {
    wasUnderNavbar = true;
  }
});

window.addEventListener("scroll", () => {
  if (wasUnderNavbar && element.parentElement.parentElement.id != 'voyager-navbar-target') {
    updateSize();
    wasUnderNavbar = false;
  }
});

document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

animate();

function updateSize() {
  width = element.clientWidth;
  height = element.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  bloomComposer.setSize(width, height);
  finalComposer.setSize(width, height);
}


function darkenNonBloomed( obj ) {
        if ( obj.isMesh && bloomLayer.test( obj.layers ) === false ) {
        materials[ obj.uuid ] = obj.material;
        obj.material = darkMaterial;
    }
}

function restoreMaterial( obj ) {
    if ( materials[ obj.uuid ] ) {
        obj.material = materials[ obj.uuid ];
        delete materials[ obj.uuid ];
    }
}

function init() {
  // updateSize();
}

export default { init };