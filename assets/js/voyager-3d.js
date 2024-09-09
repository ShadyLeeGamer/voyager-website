import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from "three";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { vertexShader } from '../shaders/bloom/vertex-shader.js';
import { fragmentShader } from '../shaders/bloom/fragment-shader.js';

function init()
{
    initScrollAnimation();
}

function cleanup()
{
    cleanupScrollAnimation();
}

const element = document.getElementById("voyager");
let width = element.clientWidth;
let height = element.clientHeight;

//#region Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 1;
scene.add(camera);

// Load 3D Voyager
let object;
const loader = new GLTFLoader();
loader.load(
'assets/models/branding/voyager.glb',
(gltf) => {
    object = gltf.scene;
    object.rotation.x = -0.5;
    scene.add(object);
},
(xhr) => {},
(error) => {
    console.error(error);
}
);

// Lighting setup
const leftPointLight = new THREE.PointLight(0x6e1f00, 0.5, 100);
leftPointLight.position.set(-3, -0.6, 2);
scene.add(leftPointLight);

const rightPointLight = new THREE.PointLight(0xe79023, 2, 100);
rightPointLight.position.set(3, -0.6, 2);
scene.add(rightPointLight);

// Environment texture
scene.environment = generateCubeMap();

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
//#endregion

//#region Setup Rendering 
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
renderer.toneMapping = THREE.ReinhardToneMapping;
element.appendChild(renderer.domElement);

const renderScene = new RenderPass(scene, camera);
const params = {
strength: 0.17,
radius: -40,
threshold: 0.04
};
const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), params.strength, params.radius, params.threshold);

const bloomComposer = new EffectComposer(renderer);
bloomComposer.renderToScreen = false;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

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
// Write results of finalPass to a new render target, swapping out the previous render target
finalPass.needsSwap = true;

const finalComposer = new EffectComposer(renderer);
finalComposer.addPass(renderScene);
finalComposer.addPass(finalPass);

function updateRendererSize() {
    width = element.clientWidth;
    height = element.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    bloomComposer.setSize(width, height);
    finalComposer.setSize(width, height);
}
//#endregion

//#region Spinning and Animation
const spinSpeed = 0.0035;
const rotationSpeed = 0.02;
let mouseX = width / 2;
let targetRotationY = 0;
let rotationYSpinOffset = 0;

document.onmousemove = (e) => {
mouseX = e.clientX;
};

function animate() {
requestAnimationFrame(animate);

if (object) {
    rotationYSpinOffset += spinSpeed;
    targetRotationY = -3.075 + (mouseX / width) * 3 + rotationYSpinOffset;
    object.rotation.y += (targetRotationY - object.rotation.y) * rotationSpeed;
}

bloomComposer.render();
finalComposer.render();
}

animate();
//#endregion

//#region Scroll Animation
const scrollThreshold = 300;
const mover = document.getElementById('voyager-navbar-mover');
const navbarTarget = document.getElementById('voyager-navbar-target');
let headerTarget;
let startRect;
let currentTarget;
let isLocked = false;

function initScrollAnimation() {
    headerTarget = document.getElementById('voyager-header-target');
    isLocked = false;
    checkForMovement();
}

function cleanupScrollAnimation() {
    isLocked = true;
    if (!isInsideTarget(navbarTarget)) {
        if (isMoving) {
            mover.classList.remove('move');
        }

        navbarTarget.appendChild(mover);
    }
}

function checkForMovement() {
    if (window.scrollY > scrollThreshold) {
        if (!isInsideTarget(navbarTarget))
        {
            moveTo(navbarTarget, 1, 0.2);
        }
    }
    else {
        if (!isInsideTarget(headerTarget)) {
            moveTo(headerTarget, 0.2, 1);
        }
    }
}

function moveTo(target, startScale, targetScale) {
    mover.style.setProperty('--voyager-move-start-position', `translate(${0}px, ${0}px)`);
    mover.style.setProperty('--voyager-move-start-scale', startScale);
    mover.style.setProperty('--voyager-move-end-scale', targetScale);
    startRect = mover.getBoundingClientRect();
    currentTarget = target;
    updateEndMovePosition();
    mover.classList.add('move');

    window.addManagedEventListener(mover, 'animationend', function onAnimationEnd() {
        target.appendChild(mover);
        if (target != navbarTarget) {
            updateRendererSize();
        }
        mover.classList.remove('move');
    });
}

function updateEndMovePosition() {
    if (!isMoving() || isLocked)
        return;

    const endRect = currentTarget.getBoundingClientRect();
    const dx = endRect.left - startRect.left;
    const dy = endRect.top - startRect.top;
    mover.style.setProperty('--voyager-move-end-position', `translate(${dx}px, ${dy}px)`);
}

function isInsideTarget(target) { return mover.parentElement == target; }

function isMoving() { return mover.classList.contains('move'); }
//#endregion

window.addEventListener('scroll', () => {
    if (isLocked)
        return;

    if (!isMoving()) {
        checkForMovement();
    }
    else {
        updateEndMovePosition();
    }
});

window.addEventListener('resize', () =>
{
    updateEndMovePosition();

    if (currentTarget != navbarTarget) {
        updateRendererSize();
    }
});

export default { init, cleanup };