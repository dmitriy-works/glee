$(function () {
   

  $('.smart-slider__items').slick({
    arrows: false,
    dots: true,
  });

  $('.star').rateYo({
    rating: 5,
    starWidth: "14px",
    normalFill: "#7b7b7b",
    ratedFill: "#ffc35b",
    readOnly: true,
  });
  
});