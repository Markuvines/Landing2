
$(document).ready(function(){
  $('.slider__track').slick({
    arrows: false,
    dots: true,
    autoplaySpeed: 1000,
  });
  $('.blog__slider').slick({
    arrows: true,
    dots: true,
  });
  // $('.quotes__slider').slick({
  //   arrows: false,
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   adaptiveHeight: true,
  // });
  // my slick slider options
var options = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
};


// my slick slider as constant object
const mySlider = $('.quotes__slider').on('init', function(slick) {

  // on init run our multi slide adaptive height function
  multiSlideAdaptiveHeight(this);

}).on('beforeChange', function(slick, currentSlide, nextSlide) {

  // on beforeChange run our multi slide adaptive height function
  multiSlideAdaptiveHeight(this);

}).slick(options);


// our multi slide adaptive height function passing slider object
function multiSlideAdaptiveHeight(slider) {

  // set our vars
  let activeSlides = [];
  let tallestSlide = 0;

  // very short delay in order for us get the correct active slides
  setTimeout(function() {

    // loop through each active slide for our current slider
    $('.slick-track .slick-active', slider).each(function(i) {

      // add current active slide height to our active slides array
      activeSlides[i] = $(this).outerHeight();

    });

    // for each of the active slides heights
    activeSlides.forEach(function(item) {

      // if current active slide height is greater than tallest slide height
      if (item > tallestSlide) {

        // override tallest slide height to current active slide height
        tallestSlide = item;

      }

    });

    // set the current slider slick list height to current active tallest slide height
    $('.slick-list', slider).height(tallestSlide);

  }, 10);

}


//when window is resized
$(window).on('resize', function() {

  // run our multi slide adaptive height function incase current slider active slides change height responsively
  multiSlideAdaptiveHeight(mySlider);

});

});
$('.slider__button').on('click', function() {
 $('.slider__track').slick('slickPlay')
})
console.log('sdjfkdsjfksd');