import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
// Post-Processing
import { EffectComposer } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/postprocessing/UnrealBloomPass.js";
// import { UnrealBloomPass } from '../js/effects/UnrealBloomPass.js';

const element = document.getElementById("voyager");
let wasUnderNavbar = false;

let width = element.clientWidth;
let height = element.clientHeight;

let mouseX = width / 2;
let mouseY = height / 2;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 0.6;
scene.add(camera);

let object;
const loader = new GLTFLoader();
loader.load(
  `assets/models/branding/voyager.glb`,
  // Success Callback
  function (gltf)
  {
    object = gltf.scene;
    scene.add(object);
  },
  // Progress Callback
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  // Error Callback
  function (error) {
    console.error(error);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 0); 


// Add render to DOM
element.appendChild(renderer.domElement);

//Add lights to the scene, so we can actually see the 3D model
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
directionalLight.position.set(0, -1, 1)
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

const textureCube = generateCubeMap();
scene.environment = textureCube;
scene.background = null;

function generateCubeMap() {
  let images = [];
  let c = document.createElement("canvas");
  c.width = 1;  // The size of the canvas can be small since it's just a solid color
  c.height = 1;
  let ctx = c.getContext("2d");

  // Set the canvas to a white color
  ctx.fillStyle = "#ffd20a";  // White color
  ctx.fillRect(0, 0, c.width, c.height);

  // Generate the same white image for all six sides
  let whiteImage = c.toDataURL();
  for (let i = 0; i < 6; i++) {
    images.push(whiteImage);
  }

  // Load the images as a cubemap texture
  let cm = new THREE.CubeTextureLoader().load(images);
  cm.format = THREE.RGBFormat; // Specify the format of the texture

  return cm;
}

const composer = new EffectComposer(renderer);
composer.renderToScreen = true;
const renderPass = new RenderPass(scene, camera);

// Bloom pass for glow effect
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(width, height),
  0.7, // strength
  0.5, // radius
  0.1 // threshold
);
composer.addPass(renderPass);
composer.addPass(bloomPass);


let targetRotationX = 0;
let targetRotationY = 0;
let rotationYSpinOffset = 0;

const spinSpeed = 0.0035;
const rotationSpeed = 0.02; // Adjust this for smoothness

const maxRotX = 0.5;
const minRotX = -0.5;

function animate() {
  requestAnimationFrame(animate);

  if (object) {
    // Calculate target rotations based on mouse position
    rotationYSpinOffset += spinSpeed;
    targetRotationY = -3.075 + mouseX / width * 3;
     targetRotationY += rotationYSpinOffset;
    targetRotationX = -1.75 + mouseY * 2.5 / height;

    // Clamp the target x rotation
    targetRotationX = Math.min(Math.max(targetRotationX, minRotX), maxRotX);

    // Smoothly interpolate to the target rotation
    object.rotation.x += (targetRotationX - object.rotation.x) * rotationSpeed;
    object.rotation.y += (targetRotationY - object.rotation.y) * rotationSpeed;
  }

  //composer.render();
  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.updateProjectionMatrix();
  // renderer.setSize(window.innerWidth, window.innerHeight);
  if (element.parentElement.parentElement.id != 'voyager-navbar-target')
  {
    width = element.clientWidth;
    height = element.clientHeight;
    renderer.setSize(width, height);
    composer.setSize(width, height);
  }
  else
  {
    wasUnderNavbar = true;
  }
});

window.addEventListener("scroll", function () {
  if (wasUnderNavbar && element.parentElement.parentElement.id != 'voyager-navbar-target')
  {
    width = element.clientWidth;
    height = element.clientHeight;
    renderer.setSize(width, height);
    composer.setSize(width, height);

    wasUnderNavbar = false;
  }
});
  
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

//Start the 3D rendering
animate();

