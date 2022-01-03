
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
});
$('.slider__button').on('click', function() {
 $('.slider__track').slick('slickPlay')
})
console.log('sdjfkdsjfksd');