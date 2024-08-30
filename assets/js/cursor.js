const glow = document.getElementById('cursor-glow-wrapper');

document.addEventListener('mousemove', (e) => {
    glow.animate({
        left: `${e.pageX}px`,
        top: `${e.pageY}px`
    }, {duration: 3000, fill: "forwards"});
});

function init() {
    const clickableHoverTargets = document.querySelectorAll('.grid-item, .panel-item');
    clickableHoverTargets.forEach(target => {
        window.addManagedEventListener(target, 'mouseenter', () => {
            if (!glow.classList.contains('clickable-hovering')) {
                glow.classList.add('clickable-hovering');
            }
        });
        window.addManagedEventListener(target, 'mouseleave', () => {
            if (glow.classList.contains('clickable-hovering')) {
                glow.classList.remove('clickable-hovering');
            }
        });
    });
}

export default { init };