// Three JS
const im = document.createElement('script');
im.type = 'importmap';
im.textContent = JSON.stringify({
    "imports": {
        "three": "https://cdn.jsdelivr.net/npm/three@0.129.0/build/three.module.js",
        "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.129.0/examples/jsm/"
      }
});
document.currentScript.after(im);