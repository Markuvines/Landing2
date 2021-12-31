
$(document).ready(function(){
  $('.slider__track').slick({
    arrows: false,
    dots: true,
    autoplaySpeed: 1000,
  });
});
$('.slider__button').on('click', function() {
 $('.slider__track').slick('slickPlay')
})
console.log('sdjfkdsjfksd');