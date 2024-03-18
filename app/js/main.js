// const { event } = require("jquery")

$(function () {


const likeBtn = document.querySelector('.btn-like')
const dislikeBtn = document.querySelector('.btn-dislike')
const sokPlus = document.querySelector('.sok-plus')
const sokMinus = document.querySelector('.sok-minus')

likeBtn.addEventListener('click',like)
dislikeBtn.addEventListener('click',dislike)

let c = 0;
let b = 0;

function like() {
  c ++

  sokPlus.innerHTML = `${c}`;
}

function dislike() {
  b ++

  sokMinus.innerHTML = `${b}`;
}



const openModal = document.querySelector('.product-feedback__popup-link')
const closeModal = document.querySelector('.close-popup')
const modalWindow = document.querySelector('.product-modal')

openModal.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindow.classList.add('modal-active')
})

closeModal.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindow.classList.remove('modal-active')
})

modalWindow.addEventListener('click', function () {
  modalWindow.classList.remove('modal-active')
})


const openPopup = document.querySelector('.product-feedback__dots-link')
const closePopup = document.querySelector('.product-tabs')
const closePopup2 = document.querySelector('.product-feedback__item')
const popupWindow = document.querySelector('.product-feedback__modal')



const closeWindowPopup = event => {
  const target = event.target;

  if (target === closePopup) {
    popupWindow.classList.remove('popup-active')
  }
}

const closeWindowPopup2 = event => {
  const target = event.target;

  if (target === closePopup2) {
    popupWindow.classList.remove('popup-active')
  }
}


openPopup.addEventListener('click', function (e) {
  e.preventDefault()
  popupWindow.classList.add('popup-active')
})



popupWindow.addEventListener('click', function () {
  popupWindow.classList.remove('popup-active')
})



closePopup.addEventListener('click', closeWindowPopup);
closePopup2.addEventListener('click', closeWindowPopup2 )


const openComplain = document.querySelector('.product-feedback__modal-link')
const complainWindow = document.querySelector('.product-popup')
const closeComplain = document.querySelector('.product-popup__close-complain')

openComplain.addEventListener('click', function (e) {
  e.preventDefault()
  complainWindow.classList.add('complain-open')
})

closeComplain.addEventListener('click', function (e) {
  e.preventDefault()
  complainWindow.classList.remove('complain-open')
})

complainWindow.addEventListener('click', function () {
  complainWindow.classList.remove('complain-open')
})



  $('.related-slider__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="related-slider__arrow slick-prev"><img src="images/icons/left-arrow-long.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="related-slider__arrow slick-next"><img src="images/icons/right-arrow-long.svg" alt="arrow-right"></button>',
    responsive: [
    {
      breakpoint: 1251,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1, 
              
      }
    },
    {
      breakpoint: 861,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
  });

  



  $('.product-tabs__item').on('click', function (e) {
    e.preventDefault()
    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $(this).addClass('product-tabs__item--active')

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active')

  })


  $('.product-detalis__thumb').slick({
      asNavFor: '.product-detalis__big',
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      vertical: true,
  })

  $('.product-detalis__big').slick({
      asNavFor: '.product-detalis__thumb',
      arrows: false,
      draggable: false,
      fade: true,
  })

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active')
    $(this).addClass('shop-content__filter-btn--active')
  })

  $('.button-list').on('click', function () {
    $('.products-item').addClass('products-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid')
  })

  $('.button-grid').on('click', function () {
    $('.products-item').removeClass('products-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid')
  })


$('.select-style, .product-item__num').styler();

   
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    
  });

  $('.smart-slider__items').slick({
    arrows: false,
    dots: true,
  });




$('.star-list').rateYo({   
  starWidth: "17px",
  normalFill: "#ccccce",
  ratedFill: "#ffc35b",
  readOnly: true,
  spacing: "15px",
  numStars: 5,
  starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
});


$('.product-detalis__star').rateYo({    
  starWidth: "13px",
  normalFill: "#ccccce",
  ratedFill: "#ffc35b",
  readOnly: true,
  spacing: "3px",
  numStars: 5,
  starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
})


$('.star').rateYo({         
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
  })


  $('.filter-recent__item-star').rateYo({    
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "7px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
  })

  $('.product-feedback__star').rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "7px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
  })
      


$('.burger-menu').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active');
})








})
  
