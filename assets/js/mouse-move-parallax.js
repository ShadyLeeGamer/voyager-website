document.addEventListener('mousemove', parallax);
function parallax(e) {
    document.querySelectorAll('.mouse-move-parallax').forEach(function(element) {
        var moveOffset = element.getAttribute('parallax-offset');
        var x = (e.clientX * moveOffset) / 400;
        var y = (e.clientY * moveOffset) / 400;
        element.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}