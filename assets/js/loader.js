// Inital load styling
document.addEventListener("DOMContentLoaded", () => {
    let initialLoadStyleElements = [
        document.getElementById('preloader-container'),
        document.body
    ];
    initialLoadStyleElements.forEach((element) => {
        element.classList.remove('initial-loading');
    });
});

function init() {
    startObservers();
}

function startObservers()
{
    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px 100px 0px"
    };

    const lazyElements = document.querySelectorAll('[data-src]');
    const transitionElements = document.querySelectorAll('*[scroll-transition]:not([scroll-transition-list])');
    const transitionLists = document.querySelectorAll('*[scroll-transition-list]');

    const LOAD_ON_SCROLL = buildObserver(appearOptions, (element) => { element.src = element.getAttribute("data-src"); });
    const TRANSITION_ON_SCROLL = buildObserver(appearOptions, (element) => { endScrollTransition(element); });
    const TRANSITION_LIST_ON_SCROLL = buildObserver(appearOptions, (element) => { endScrollTransitionList(element); });
    
    lazyElements.forEach(element => {
        LOAD_ON_SCROLL.observe(element);
    });
    transitionElements.forEach(element => {
        TRANSITION_ON_SCROLL.observe(element);
    });
    transitionLists.forEach(element => {
        const transitionType = element.getAttribute("scroll-transition");
        var items = element.children;
        for (let i = 0; i < items.length; i++) {
            items[i].setAttribute("scroll-transition", transitionType);
        }
        TRANSITION_LIST_ON_SCROLL.observe(element);
    });

    function buildObserver(appearOptions, callback) {
        return new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting)
                    return;
    
                let element = entry.target;
                callback(element);
                observer.unobserve(element);
            }); 
        }, appearOptions);
    }
    
    function endScrollTransitionList(element) {
        const delay = element.getAttribute("scroll-transition-list");
        var items = element.children;
        for (let i = 0; i < items.length; i++) {
            setTimeout(() => {
                endScrollTransition(items[i]);
            }, 10 + delay * i);
        }
        element.removeAttribute("scroll-transition-list");
        element.removeAttribute("scroll-transition");
    }

    function endScrollTransition(element) {
        element.classList.add("scroll-transition-end");

        window.addManagedEventListener(element, "transitionend", () => {
            element.removeAttribute("scroll-transition");
            element.classList.remove("scroll-transition-end");
        });
    }
}

export default { init };

