const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

const navTabs = offScreenMenu.querySelectorAll('.navbar-tab');
navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (hamMenu.classList.contains('active'))
        {
            hamMenu.classList.remove('active');
            offScreenMenu.classList.remove('active');
        }
    });
});
