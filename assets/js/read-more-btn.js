let isOpen = false;
const container = document.querySelector(".grid-container");
const hide = document.querySelector(".read-more-container .hide");
const btn = document.querySelector(".read-more-btn");
const btnLabel = document.querySelector(".read-more-btn::after");
const heightOpen = 1650;
// const heightOpen = container.offsetHeight;
const heightClosed = 780;
document.addEventListener('DOMContentLoaded', function()
{
    var x = window.matchMedia("(min-width: 768px)")

    updateHeight();
    btn.addEventListener("click", toggleHeight);

    function toggleHeight()
    {
        isOpen = !isOpen;
        updateHeight();
    }

    function updateHeight()
    {
        if (x.matches)
        {
            container.style.height = "auto";
            return;
        }

        container.style.height = (isOpen ? heightOpen : heightClosed) + "px";
        hide.style.display = isOpen ? "none" : "inline";
        btn.textContent = isOpen ? "Read Less" : "Read More";
    }

    window.addEventListener('resize', () =>
    {
        updateHeight();
    });
});

