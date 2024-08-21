document.addEventListener('DOMContentLoaded', () =>
{
    const mover = document.getElementById('voyager-navbar-mover');
    const navbarTarget = document.getElementById('voyager-navbar-target');
    const headerTarget = document.getElementById('voyager-header-target');
    let startRect;
    let currentTarget;
    const scrollThreshold = 300;

    function updateEndMovePosition()
    {
        if (!mover.classList.contains('move'))
            return;

        const endRect = currentTarget.getBoundingClientRect();
        const dx = endRect.left - startRect.left;
        const dy = endRect.top - startRect.top;
        mover.style.setProperty('--voyager-move-end-position', `translate(${dx}px, ${dy}px)`);
    }

    window.addEventListener('scroll', () =>
    {
        if (window.scrollY > scrollThreshold)
        {
            if (mover.parentElement != navbarTarget)
            {
                if (!mover.classList.contains('move'))
                {
                    mover.style.setProperty('--voyager-move-start-position', `translate(${0}px, ${0}px)`);
                    mover.style.setProperty('--voyager-move-start-scale', "1");
                    mover.style.setProperty('--voyager-move-end-scale', "0.15");
                    mover.classList.add('move');
                    startRect = mover.getBoundingClientRect();
                    currentTarget = navbarTarget;
                    updateEndMovePosition();

                    mover.addEventListener('animationend', function onAnimationEnd()
                    {
                        navbarTarget.appendChild(mover);
                        mover.classList.remove('move');
                        mover.removeEventListener('animationend', onAnimationEnd);
                    });
                }
            }
        }
        else
        {
            if (mover.parentElement != headerTarget)
            {
                if (!mover.classList.contains('move'))
                {
                    mover.style.setProperty('--voyager-move-start-position', `translate(${0}px, ${0}px)`);
                    mover.style.setProperty('--voyager-move-start-scale', "0.15");
                    mover.style.setProperty('--voyager-move-end-scale', "1");
                    startRect = mover.getBoundingClientRect();
                    currentTarget = headerTarget;
                    updateEndMovePosition();
                    mover.classList.add('move');

                    mover.addEventListener('animationend', function onAnimationEnd()
                    {
                        headerTarget.appendChild(mover);
                        mover.classList.remove('move');
                        mover.removeEventListener('animationend', onAnimationEnd);
                    });
                }
            }
        }
    });

    window.addEventListener('scroll', updateEndMovePosition);
    window.addEventListener('resize', updateEndMovePosition);
});
