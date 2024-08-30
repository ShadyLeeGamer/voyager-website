const scrollThreshold = 300;
const mover = document.getElementById('voyager-navbar-mover');
const navbarTarget = document.getElementById('voyager-navbar-target');
let headerTarget;
let startRect;
let currentTarget;
let isLocked = false;

function init() {
    headerTarget = document.getElementById('voyager-header-target');
    isLocked = false;
    checkForMovement();
}

function cleanup() {
    isLocked = true;
    if (!isInsideTarget(navbarTarget)) {
        if (isMoving) {
            mover.classList.remove('move');
        }

        navbarTarget.appendChild(mover);
    }
}

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
window.addEventListener('resize', updateEndMovePosition);

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

export default { init, cleanup };

