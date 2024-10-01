function init() {
    let isOpen = false;
    const container = document.querySelector(".grid-container");
    const hide = document.querySelector(".read-more-container .hide");
    const btn = document.querySelector(".read-more-btn");
    const heightOpen = 1600;
    // const heightOpen = container.offsetHeight;
    const heightClosed = 780;
    
    var x = window.matchMedia("(min-width: 768px)")

    updateHeight();
    window.addManagedEventListener(btn, "click", toggleHeight);

    function toggleHeight()  {
        isOpen = !isOpen;
        updateHeight();
    }

    function updateHeight() {
        if (x.matches) {
            container.style.height = "auto";
            return;
        }

        container.style.height = (isOpen ? heightOpen : heightClosed) + "px";
        hide.style.display = isOpen ? "none" : "inline";
        btn.textContent = isOpen ? "Read Less" : "Read More";
        if (isOpen) {
            if (!btn.classList.contains("opened")) {
                btn.classList.add("opened");
            }
        }
        else {
            if (btn.classList.contains("opened")) {
                btn.classList.remove("opened");
            }
        }
    }

    window.addManagedEventListener(window, 'resize', updateHeight);
}

export default { init };