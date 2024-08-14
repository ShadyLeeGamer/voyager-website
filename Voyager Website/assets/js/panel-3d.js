let items = document.querySelectorAll('.panel-3d');
items.forEach(item => {
    item.addEventListener('mousemove', (e)=>{

        // let positionPx = e.x - item.getBoundingClientRect().left;
        // let positionX = (positionPx / item.offsetWidth) * 100;
        // let positionPy = event.y - item.getBoundingClientRect().top;
        // let positionY = (positionPy / item.offsetHeight) * 100;

        let positionPx = item.getBoundingClientRect().right - e.x;
        let positionX = (positionPx / item.offsetWidth) * 100;
        let positionPy = item.getBoundingClientRect().bottom - e.y;
        let positionY = (positionPy / item.offsetHeight) * 100;
        
        item.style.setProperty('--rX', (0.5)*(50 - positionY) + 'deg');
        item.style.setProperty('--rY', -(0.5)*(50 - positionX) + 'deg');
    })
    item.addEventListener('mouseout', ()=>{

        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
    })
})