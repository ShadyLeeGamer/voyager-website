import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const element = document.getElementById("voyager");

let width = element.clientWidth;
let height = element.clientHeight;

let mouseX = width / 2;
let mouseY = height / 2;
let wasUnderNavbar = false;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 0.6;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 0);
element.appendChild(renderer.domElement);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, -1, 1);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

const textureCube = generateCubeMap();
scene.environment = textureCube;

const loader = new GLTFLoader();
let object;
loader.load(
  'assets/models/branding/voyager.glb',
  (gltf) => {
    object = gltf.scene;
    scene.add(object);
  },
  (xhr) => {
  },
  (error) => {
    console.error(error);
  }
);

function generateCubeMap() {
  const images = [];
  const c = document.createElement("canvas");
  c.width = 1;
  c.height = 1;
  const ctx = c.getContext("2d");

  ctx.fillStyle = "#ffd20a";
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
const maxRotX = 0.3;
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

  renderer.render(scene, camera);
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
}

function init() {
  // updateSize();
}

export default { init };