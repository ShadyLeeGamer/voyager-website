// #region Project Slider
const projectSlider = document.getElementById('project-slider');

updateProjectContainerShow();

window.addEventListener("resize", () =>
{
  updateProjectContainerShow();
});

function updateProjectContainerShow()
{
  if (window.innerWidth <= 1280)
  {
    if (!projectSlider.classList.contains('slick-initialized'))
    {
      initProjectSlider();
    }
  }
  else
  {
    if (projectSlider.classList.contains('slick-initialized'))
    {
      $('#project-slider').slick('unslick');
    }
  }
}

function initProjectSlider()
{
  $(document).ready(function(){
    $('#project-slider').slick({
      prevArrow: $('#project-section .prev-btn'),
      nextArrow: $('#project-section .next-btn'),
      infinite: true,
      centerMode: true,
      centerPadding: "175px",
      autoplay: true,
      autoplaySpeed: 4000,
      responsive:[
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10px"
        }
      }]
    });
  });
}
// #endregion

// #region Slideshow Slider
$(document).ready(function(){
  $('#slideshow-slider').slick({
    prevArrow: $('#slideshow-section .prev-btn'),
    nextArrow: $('#slideshow-section .next-btn'),
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
  });
});

// Sync background image
const slideshowBackgroundImg = document.querySelector('#slideshow-section .slider-img-bg');

function updateBackgroundImg(slideIdx)
{
  const currentSlideElement = document.querySelector('#slideshow-section #slideshow-slider .slide:nth-child(' + slideIdx + ') img')
  slideshowBackgroundImg.style.backgroundImage = 'url(' + currentSlideElement.src + ')';
}

updateBackgroundImg(1);

const slideshowSlider = document.querySelector('#slideshow-section .slider-bg-img');
$('#slideshow-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide)
{
  updateBackgroundImg(nextSlide + 1)
});


// #endregion

// #region Testimonial Slider
$(document).ready(function(){
  $('#testimonial-slider').slick({
    prevArrow: $('#testimonial-section .prev-btn'),
    nextArrow: $('#testimonial-section .next-btn'),
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
    {
      breakpoint: 1280,
      settings:
      {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });
});
// #endregion
