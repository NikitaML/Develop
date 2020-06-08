$(function () {
  $('.header-slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'header-slider__dots',
    focusOnSelect: false,
    swipe: false
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

});


 
