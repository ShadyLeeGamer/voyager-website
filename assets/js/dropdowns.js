function init() {
    console.log('dropdowns');

    let eventListeners = [];
    const dropdowns = document.querySelectorAll('.dropdown');
    
    activate();
    window.addManagedEventListener(window, 'resize', activate);

    function activate() {
        if (window.innerWidth > 768) {
            cleanupEventListeners();
        }
        else if (eventListeners.length == 0) {
            dropdowns.forEach((dropdown) => {    
                eventListeners.push(
                    window.addManagedEventListener(dropdown, 'click', () => {
                        if (!dropdown.classList.contains('hover')) {
                            dropdown.classList.add('hover');
                        }
                    }),
                    window.addManagedEventListener(dropdown, 'mousedown', (event) => {
                        if (dropdown.classList.contains('hover') &&
                            !dropdown.contains(event.target)) {
                            dropdown.classList.remove('hover');
                        }
                    }),
                );
            });
        }
    }

    function cleanupEventListeners() {
        if (eventListeners.length > 0) {
            console.log("clean");
            eventListeners.forEach(listener => {
                window.removeManagedEventListener(listener);
            });
            eventListeners = [];
        }
    }
}

export default { init };