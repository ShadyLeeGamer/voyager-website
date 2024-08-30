const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

const navTabs = offScreenMenu.querySelectorAll('.navbar-tab-container > *');
navTabs.forEach(tab => {
    tab.addEventListener('click', closeMenu);
});

document.querySelector('.mobile .navbar-logo').addEventListener('click', closeMenu);

function closeMenu() {
    if (hamMenu.classList.contains('active'))
    {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    }
}