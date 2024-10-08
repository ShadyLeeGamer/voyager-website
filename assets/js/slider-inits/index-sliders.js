function init() {
  // #region Project Slider
  {
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
    {``
      $(document).ready(function(){
        $('#project-slider').slick({
          prevArrow: $('#project-section .prev-btn'),
          nextArrow: $('#project-section .next-btn'),
          infinite: true,
          centerMode: true,
          // centerPadding: "475px",
          centerPadding: "450px",
          // autoplay: true,
          // autoplaySpeed: 4000,
          responsive:[
          {
            breakpoint: 768,
            settings: {
              // centerPadding: "80px"
              centerPadding: "65px"
            }
          }]
        });
      });
    }
  }
  // #endregion

  // #region Slideshow Slider
  {
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
  
    // Sync background image
    const slideshowBackgroundImg = document.querySelector('#slideshow-section .slider-img-bg');
    const slideshowCaption = document.querySelector('#slideshow-section .overlay-text h2');
    const slideshowDescription = document.querySelector('#slideshow-section .overlay-text span');
  
    function onSlideUpdate(slideIdx)
    {
      const currentSlideElement = document.querySelector('#slideshow-section #slideshow-slider .slide:nth-child(' + slideIdx + ')')
      const slideCaptionData = currentSlideElement.getAttribute("data-caption");
      const slideDescriptionData = currentSlideElement.getAttribute("data-description");
      slideshowCaption.innerHTML = slideCaptionData;
      slideshowDescription.innerHTML = slideDescriptionData;
      
      let bgSource = null;
      const slideContentElement = currentSlideElement.firstElementChild;
      switch (slideContentElement.tagName.toLowerCase()) {
        case 'img':
          bgSource = slideContentElement.getAttribute("data-src");
          break;
        case 'video':
          bgSource = slideContentElement.getAttribute("thumbnail-src");
          break;
      }
      if (bgSource != null) {
        slideshowBackgroundImg.style.backgroundImage = 'url(' + bgSource + ')';
      }
    }
  
    onSlideUpdate(1);
  
    // const slideshowSlider = document.querySelector('#slideshow-section .slider-bg-img');
    $('#slideshow-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide)
    {
      onSlideUpdate(nextSlide + 1)
    });
  }
  // #endregion

  // #region Testimonial Slider
  {
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
  }
  // #endregion
}

function cleanup() {
  $('#slideshow-slider').off('beforeChange');
}

export default { init, cleanup };