const targetId = '#voyager';
const navbarPosId = '.navbar-logo';

gsap.registerPlugin(MotionPathPlugin);

const targetElement = document.querySelector(targetId);
const navbarElement = document.querySelector(navbarPosId);

function calculateScrollPath() {
    const a = targetElement.getBoundingClientRect();
    const b = navbarElement.getBoundingClientRect();
    return [{
        x: b.left - a.left,
        y: b.top - a.top
    }];
}

function createTimeline() {
    const scrollPath = calculateScrollPath();
    
    return gsap.timeline({
        scrollTrigger: {
            trigger: targetId,
            start: 'top top',
            end: 'center top',
            scrub: true,
            markers: true
        }
    }).to(targetElement, {
        motionPath: {
            path: scrollPath,
            autoRotate: false
        },
        scale: 0.1,
        transformOrigin: "top left"
    });
}

let tl = createTimeline();

function updateTimelineOnResize() {
    ScrollTrigger.refresh(); // Ensure ScrollTrigger calculations are updated

    const newScrollPath = calculateScrollPath();

    gsap.to(targetElement, {
        motionPath: {
            path: newScrollPath,
            autoRotate: false
        },
        scale: 0.1,
        transformOrigin: "top left",
        overwrite: true
    });

    // Recreate ScrollTrigger to ensure the new path is used
    ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Remove existing triggers
    createTimeline(); // Create a new timeline with updated scroll path
}

// Add resize event listener to update positions on resize
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(updateTimelineOnResize, 100);
});
