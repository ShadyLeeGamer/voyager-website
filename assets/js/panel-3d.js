function init() {
    let eventListeners = [];
    let items = document.querySelectorAll('.panel-3d');
    const strength = 0.25;

    activateTilt();
    window.addManagedEventListener(window, 'resize', activateTilt);

    function activateTilt() {
        if (window.innerWidth > 768) {
            if (eventListeners.length > 0)
                return;

                items.forEach(item => {
                const handleMouseMove = (e) => {
                    let positionPx = item.getBoundingClientRect().right - e.x;
                    let positionX = (positionPx / item.offsetWidth) * 100;
                    let positionPy = item.getBoundingClientRect().bottom - e.y;
                    let positionY = (positionPy / item.offsetHeight) * 100;
                    
                    item.style.setProperty('--rX', (strength)*(50 - positionY) + 'deg');
                    item.style.setProperty('--rY', -(strength)*(50 - positionX) + 'deg');
                };
        
                const handleMouseOut = () => {
                    item.style.setProperty('--rX', '0deg');
                    item.style.setProperty('--rY', '0deg');
                };
        
                eventListeners.push(
                    window.addManagedEventListener(item, 'mousemove', handleMouseMove),
                    window.addManagedEventListener(item, 'mouseout', handleMouseOut)
                );
            });
        }
        else if (eventListeners.length > 0) {
            eventListeners.forEach(listener => {
                window.removeManagedEventListener(listener);
            });
            eventListeners = [];
        }
    }
}

export default { init };