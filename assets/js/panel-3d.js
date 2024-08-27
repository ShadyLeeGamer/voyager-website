function init() {
    console.log("panel-3d");

    const strength = 0.25;
    let items = document.querySelectorAll('.panel-3d');
    items.forEach(item => {

        const handleMouseMove = (e) => {
            // let positionPx = e.x - item.getBoundingClientRect().left;
            // let positionX = (positionPx / item.offsetWidth) * 100;
            // let positionPy = event.y - item.getBoundingClientRect().top;
            // let positionY = (positionPy / item.offsetHeight) * 100;

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

        window.addManagedEventListener(item, 'mousemove', handleMouseMove);
        window.addManagedEventListener(item, 'mouseout', handleMouseOut);
    });
}

export default { init };