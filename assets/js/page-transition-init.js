// import Swup from "https://unpkg.com/swup@4?module";
// import SwupHeadPlugin from "https://unpkg.com/@swup/head-plugin@2?module";
// import SwupScriptsPlugin from "https://unpkg.com/@swup/scripts-plugin@2?module";

const swup = new Swup({
    cache: false,
    containers: ['#swup'],
    plugins: [new SwupHeadPlugin()]
});
window.swup = swup;
console.log(swup);

function loadScripts() {
    const scriptTags = document.querySelectorAll('script');
    scriptTags.forEach(originalScript => {
        const newScript = document.createElement('script');
        Array.from(originalScript.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
        });
        originalScript.parentNode.replaceChild(newScript, originalScript);
    });
}

swup.hooks.on('page:view', loadScripts);