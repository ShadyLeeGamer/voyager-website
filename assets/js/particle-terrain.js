import { vertexShader } from '../shaders/particle-terrain/vertex-shader.js';
import { fragmentShader } from '../shaders/particle-terrain/fragment-shader.js';

class ObjectPose {
  constructor(positionX, positionY, positionZ, rotationX, rotationY, rotationZ) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.positionZ = positionZ;
    this.rotationX = rotationX;
    this.rotationY = rotationY;
    this.rotationZ = rotationZ;
  }

  apply(object)
  {
    object.position.x = this.positionX;
    object.position.y = this.positionY;
    object.position.z = this.positionZ;
    object.rotation.x = this.degToRad(this.rotationX);
    object.rotation.y = this.degToRad(this.rotationY);
    object.rotation.z = this.degToRad(this.rotationZ);
  }

  // Utils
  degToRad(angle) {
    return angle * Math.PI / 180;
  }
}

class Scene {
    constructor(options) {
      this.$el = options.el;
      this.material = options.material;
      this.cameraPose = options.cameraPose;
      this.terrainPose = options.planePose;
      this.time = 0;
      this.bindAll();
      this.init();
    }
    bindAll() {
      this.render = this.render.bind(this);
      this.resize = this.resize.bind(this);
    }
    init() {
      this.textureLoader = new THREE.TextureLoader();
      this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.001, 2000);
      this.cameraPose.apply(this.camera);
      // this.camera.lookAt(new THREE.Vector3(0, -10, 0));
      this.scene = new THREE.Scene();
      this.renderer = new THREE.WebGLRenderer({
        alpha: true
      });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$el.appendChild(this.renderer.domElement);
      this.createParticles();
      this.bindEvents();
      this.resize();
      this.render();
    }
    createParticles() {
      const plane = new THREE.PlaneBufferGeometry(500, 250, 250, 125);
  
      this.particles = new THREE.Points(plane, this.material);
      this.terrainPose.apply(this.particles)
      this.scene.add(this.particles);
    }
    bindEvents() {
      window.addEventListener('resize', this.resize);
    }
    resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.renderer.setSize(w, h);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    }
    moveParticles() {
      this.particles.material.uniforms.time.value = this.time;
    }
  
    // Animations
    render() {
      requestAnimationFrame(this.render);
      // this.time += .01;
      this.time += 0.005;
      this.moveParticles();
      this.renderer.render(this.scene, this.camera);
    }
  
  }

function init() {
  const textureLoader = new THREE.TextureLoader();
  textureLoader.crossOrigin = '';
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: {
        value: 1.0
      },
      texture: {
        value: textureLoader.load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1081752/spark1.png")
      },
      resolution: {
        value: new THREE.Vector2()
      },
      // tintColor: { value: new THREE.Color(0xc7b89f) }
      // tintColor: { value: new THREE.Color(0xb0c79f) }
      tintColor: { value: new THREE.Color(0xbcc79f) }
      // tintColor: { value: new THREE.Color(0x1a1c2f) }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true
  });
  
  // let cameraPose = new ObjectPose(-20, 20, -100, 0, -180, 10);
  let cameraPose = new ObjectPose(0, 0, -290, 0, -180, 5);
  // let terrainPose = new ObjectPose(0, 0, 0, 0, -105, 0);
  // let terrainPose = new ObjectPose(0, 0, 0, 0, 90, 0);
  let terrainPose = new ObjectPose(0, 0, 0, -95, 0, -455);
  
  const headerScene = new Scene({
    el: document.querySelector('#header .particle-terrain'),
    material: material,
    cameraPose: cameraPose,
    planePose: terrainPose
  });
  
  cameraPose = new ObjectPose(0, 410, -75, 0, -180, 0);
  terrainPose = new ObjectPose(0, 0, 0, 0, 0, 0);
  
  // const contentBodyScene = new Scene({
  //   el: document.querySelector('#body-content .particle-terrain'),
  //   material: material,
  //   cameraPose: cameraPose,
  //   planePose: terrainPose
  // });
}

export default { init };

