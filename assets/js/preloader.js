window.addEventListener("load", function()
{
    FadeOutPreloader();
});
  
  function FadeOutPreloader() {
    const loader = document.getElementById('preloader-container');
    var fadeEffect = setInterval(function () {  
    if (!loader.style.opacity) {
        loader.style.opacity = 1;
    }
    if (loader.style.opacity > 0) {
        loader.style.opacity -= 0.1;
    } else {
        clearInterval(fadeEffect);
        loader.remove();
    }
  }, 25);
  }