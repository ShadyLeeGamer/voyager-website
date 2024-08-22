console.log("a");

window.addEventListener("load", function()
{
    fadeOutPreloader();
    startObservers();
});
  
function fadeOutPreloader() {
    const loader = document.getElementById('preloader-container');
    var fadeEffect = setInterval(function () {  
      if (!loader.style.opacity) {
          loader.style.opacity = 1;
      }
      if (loader.style.opacity > 0) {
          loader.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
          // loader.remove();
        loader.style.display = "none";
      }
    }, 25);
}


function startObservers()
{
    const faders = document.querySelectorAll('.scroll-transition');

    const appearOptions = {
      threshold: 0.5
      // rootMargin: "0px 0px -200px 0px"
    };
    
    const APPEAR_ON_SCROLL = new IntersectionObserver(function(entries, APPEAR_ON_SCROLL) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          let target = entry.target;
          let isDelayedItemTypes = false;
          // const delayedItemTypes = ["project-tech-list", "spinner-list", "contact", "tabs"]
          const delayedItemTypes = [""]
          delayedItemTypes.every(function(type)
          {
            if (target.classList.contains(type))
            {
              isDelayedItemTypes = true;
              return false;
            }
            return true;
          });
          if (isDelayedItemTypes) {
            addDelayToListElements(target);
          }
          else {
            target.classList.add("end");
            
            var children = target.children;
            for (var i = 0; i < children.length; i++) {
              let child = children[i];
              if (child.hasAttribute("data-src"))
              {
                child.src = child.getAttribute("data-src");
                child.classList.add("scroll-transition");
                if (!child.closest(".accordion"))
                {
                  child.addEventListener(child.nodeName == "IMG" ? "load" : "loadeddata", () =>
                  {
                    child.classList.add("end");
                    child.addEventListener("transitionend", () => {
                      child.classList.remove("scroll-transition");
                      child.classList.remove("end");
                    });
                  });
                }
              }
            }

            target.addEventListener("transitionend", () => {
              target.classList.remove("scroll-transition");
              target.classList.remove("end");
            });
            APPEAR_ON_SCROLL.unobserve(target);
          }
        }
      });
    }, appearOptions);
    
    faders.forEach(fader => {
      APPEAR_ON_SCROLL.observe(fader);
    });
    
    async function addDelayToListElements(target) {
      var listElements = target.getElementsByTagName("li");
      for (var i = 0; i < listElements.length; i++) {
        let element = listElements[i];
        element.classList.add("end");
        await new Promise(resolve => setTimeout(resolve, 150));
      }
      // target.classList.remove("scroll-transition");
      APPEAR_ON_SCROLL.unobserve(target);
            // for (var i = 0; i < listElements.length; i++) {
      //   listElements[i].classList.remove("end");
      // }
    }
}