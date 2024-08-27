// const cursor = document.querySelector('.cursor');
// const cursorOffsetX = -cursor.clientWidth / 2;
// const cursorOffsetY = -cursor.clientHeight / 2;
const glow = document.getElementById('cursor-glow-wrapper');
const glowOffsetX = -glow.clientWidth / 2;
const glowOffsetY = -glow.clientHeight / 2;

document.addEventListener('mousemove', (e) => {
    // cursor.style.left = `${e.pageX + cursorOffsetX}px`;
    // cursor.style.top = `${e.pageY + cursorOffsetY}px`;

    glow.animate({
        left: `${e.pageX + glowOffsetX}px`,
        top: `${e.pageY + glowOffsetY}px`
    }, {duration: 3000, fill: "forwards"});
});

// const textHoverTargets = document.querySelectorAll('.text, .description, h1, h2, h3, h4, h5, h6');
// textHoverTargets.forEach(target => {
//     target.addEventListener('mouseenter', () => {
//         if (!cursor.classList.contains('text-hovering')) {
//             cursor.classList.add('text-hovering');
//         }
//     });
//     target.addEventListener('mouseleave', () => {
//         if (cursor.classList.contains('text-hovering')) {
//                 cursor.classList.remove('text-hovering');
//             }
//     });
// });

function init() {
    const clickableHoverTargets = document.querySelectorAll('.grid-item, .panel-item');
    clickableHoverTargets.forEach(target => {
        window.addManagedEventListener(target, 'mouseenter', () => {
            // if (!cursor.classList.contains('clickable-hovering')) {
            //     cursor.classList.add('clickable-hovering');
            // }
            if (!glow.classList.contains('clickable-hovering')) {
                glow.classList.add('clickable-hovering');
            }
        });
        window.addManagedEventListener(target, 'mouseleave', () => {
            // if (cursor.classList.contains('clickable-hovering')) {
            //         cursor.classList.remove('clickable-hovering');
            //     }
            if (glow.classList.contains('clickable-hovering')) {
                glow.classList.remove('clickable-hovering');
            }
        });
    });
}

export default { init };