// Swup Initialisation
import Swup from "https://unpkg.com/swup@4?module";
import SwupHeadPlugin from "https://unpkg.com/@swup/head-plugin@2?module";
const swup = new Swup({
    containers: ['#swup', '#modules'],
    plugins: [new SwupHeadPlugin()]
});

// Module load management
let pageModules = [];
async function initPageModules() {
    console.log("loading modules...");
    const scriptTags = document.querySelectorAll('#modules > script');
    
    // Array to keep track of all the promises for dynamic imports
    const modulePromises = Array.from(scriptTags).map(async (scriptTag) => {
        let path = scriptTag.getAttribute('src');
        path = path.replace("assets/js/", "./");
        try {
            const module = await import(path);

            // Check for both default and named exports
            const moduleInit = module?.default?.init || module?.init;
            
            // Check if module exports an init function
            if (typeof moduleInit === 'function') {
                moduleInit();
            }
            else {
                console.warn(`No init function found in module ${path}`);
            }
            pageModules.push(module.default || module);
            console.log(`Loaded module: ${path}`);
        } catch (error) {
            console.error(`Error loading module: ${path}`, error);
        }
    });

    // Wait for all modules to be loaded and initialized
    await Promise.all(modulePromises);
}

let activeEventListeners = [];

function cleanupPageModules() {
    // Iterate over all loaded modules and call their cleanup functions
    pageModules.forEach((module) => {
        const moduleCleanup = module?.cleanup || module?.default?.cleanup;

        if (typeof moduleCleanup === 'function') {
            moduleCleanup();
        }
        else {
            // console.warn(`No cleanup function found`);
        }

        activeEventListeners.forEach(({ element, eventName, callback }) => {
            element.removeEventListener(eventName, callback);
        });

        console.log(`Cleaned up module`);
    });

    // Clear the array after cleanup
    pageModules = [];
}

initPageModules();

swup.hooks.on('page:view', initPageModules);
swup.hooks.before('content:replace', cleanupPageModules);

window.addManagedEventListener = function addManagedEventListener(element, eventName, callback) {
    element.addEventListener(eventName, callback);
    activeEventListeners.push({ element, eventName, callback });
}

