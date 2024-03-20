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


const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
    overflow: hidden;
    position: fixed;
    top: -${scrollController.scrollPosition}px;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll(){
    document.body.style.cssText = '';
    window.scroll({top: scrollController.scrollPosition})
    document.documentElement.style.scrollBehavior = '';
  }
}





// User 1----------------------------------------------------------------------

const openModalUser1 = document.querySelector('.feedback__popup-link1')
const modalWindowUser1 = document.querySelector('.product-modal__user1')
const closeModalUser1 = document.querySelector('.modal__close-btn1')


openModalUser1.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindowUser1.classList.add('modal-active')
  scrollController.disabledScroll()
})

closeModalUser1.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindowUser1.classList.remove('modal-active')  
  scrollController.enabledScroll()
})

modalWindowUser1.addEventListener('click', function () {
  modalWindowUser1.classList.remove('modal-active') 
  scrollController.enabledScroll() 
})


const openPopupUser1 = document.querySelector('.feedback__dots1')
const popupWindowUser1 = document.querySelector('.feedback__modal-1')
const closePopupUser1 = document.querySelector('.product-tabs')
const closePopupItemUser1 = document.querySelector('.feedback__item-1')



const closeWindowPopup = event => {
  const target = event.target;

  if (target === closePopupUser1) {
    popupWindowUser1.classList.remove('popup-active')
  }
}

const closeWindowPopup2 = event => {
  const target = event.target;

  if (target === closePopupItemUser1) {
    popupWindowUser1.classList.remove('popup-active')
  }
}

closePopupUser1.addEventListener('click', closeWindowPopup);
closePopupItemUser1.addEventListener('click', closeWindowPopup2 )


openPopupUser1.addEventListener('click', function (e) {
  e.preventDefault()
  popupWindowUser1.classList.add('popup-active')
})

popupWindowUser1.addEventListener('click', function () {
  popupWindowUser1.classList.remove('popup-active')
})



const openPopupComplainUser1 = document.querySelector('.feedback__modal-link1')
const popupComplainUser1 = document.querySelector('.popup-complain-1')
const closePopupComplainUser1 = document.querySelector('.close-complain')

openPopupComplainUser1.addEventListener('click', function (e) {
  e.preventDefault()
  popupComplainUser1.classList.add('complain-active')
  scrollController.disabledScroll()
})

closePopupComplainUser1.addEventListener('click', function (e) {
  e.preventDefault()
  popupComplainUser1.classList.remove('complain-active')
  scrollController.enabledScroll()
})

popupComplainUser1.addEventListener('click', function () {
  popupComplainUser1.classList.remove('complain-active')
  scrollController.enabledScroll()
})

// User 2--------------------------------------------------------------------------------

const openModalUser2 = document.querySelector('.feedback__popup-link2')
const modalWindowUser2 = document.querySelector('.product-modal__user2')
const closeModalUser2 = document.querySelector('.modal__close-btn2')

openModalUser2.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindowUser2.classList.add('modal-active')
  scrollController.disabledScroll()
})

closeModalUser2.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindowUser2.classList.remove('modal-active')
  scrollController.enabledScroll()
})

modalWindowUser2.addEventListener('click', function () {
  modalWindowUser2.classList.remove('modal-active')
  scrollController.enabledScroll()
})


const openPopupUser2 = document.querySelector('.feedback__dots2')
const popupWindowUser2 = document.querySelector('.feedback__modal-2')
const closePopupUser2 = document.querySelector('.product-tabs')

openPopupUser2.addEventListener('click', function (e) {
  e.preventDefault()
  popupWindowUser2.classList.add('popup-active')
})

popupWindowUser2.addEventListener('click', function () {
  popupWindowUser2.classList.remove('popup-active')
})

const closeWindowModal = event => {
  const target = event.target;

  if (target === closePopupUser2) {
    popupWindowUser2.classList.remove('popup-active')
  }
}

closePopupUser2.addEventListener('click', closeWindowModal);


const openPopupComplainUser2 = document.querySelector('.feedback__modal-link2')
const popupComplainUser2 = document.querySelector('.popup-complain-2')
const closePopupComplainUser2 = document.querySelector('.close-complain2')

openPopupComplainUser2.addEventListener ('click', function (e) {
  e.preventDefault()
  popupComplainUser2.classList.add('complain-active')
  scrollController.disabledScroll()
})

closePopupComplainUser2.addEventListener ('click', function (e) {
  e.preventDefault()
  popupComplainUser2.classList.remove('complain-active')
  scrollController.enabledScroll()
})

popupComplainUser2.addEventListener ('click', function (e) {
  e.preventDefault()
  popupComplainUser2.classList.remove('complain-active')
  scrollController.enabledScroll()
})

// User 3------------------------------------------------------------------------


const openModalUser3 = document.querySelector('.feedback__popup-link3')
const modalWindowUser3 = document.querySelector('.product-modal__user3')
const closeModalUser3 = document.querySelector('.modal__close-btn3')

openModalUser3.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindowUser3.classList.add('modal-active')
  scrollController.disabledScroll()
})

closeModalUser3.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindowUser3.classList.remove('modal-active')
  scrollController.enabledScroll()
})

modalWindowUser3.addEventListener('click', function () {
  modalWindowUser3.classList.remove('modal-active')
  scrollController.enabledScroll()
})



const openPopupUser3 = document.querySelector('.feedback__dots3')
const popupWindowUser3 = document.querySelector('.feedback__modal-3')
const closePopupUser3 = document.querySelector('.product-tabs')

openPopupUser3.addEventListener('click', function (e) {
  e.preventDefault()
  popupWindowUser3.classList.add('popup-active')
})

popupWindowUser3.addEventListener('click', function () {
  popupWindowUser3.classList.remove('popup-active')
})


const closeWindowModalUser3 = event => {
  const target = event.target;

  if (target === closePopupUser3) {
    popupWindowUser3.classList.remove('popup-active')
  }
}

closePopupUser3.addEventListener('click', closeWindowModalUser3);


const openPopupComplainUser3 = document.querySelector('.feedback__modal-link3')
const popupComplainUser3 = document.querySelector('.popup-complain-3')
const closePopupComplainUser3 = document.querySelector('.close-complain3')

openPopupComplainUser3.addEventListener('click', function (e) {
  e.preventDefault()
  popupComplainUser3.classList.add('complain-active')
  scrollController.disabledScroll()
})


closePopupComplainUser3.addEventListener('click', function (e) {
  e.preventDefault()
  popupComplainUser3.classList.remove('complain-active')
  scrollController.enabledScroll()
})

popupComplainUser3.addEventListener('click', function (e) {
  e.preventDefault()
  popupComplainUser3.classList.remove('complain-active')
  scrollController.enabledScroll()
})


// User 4------------------------------------------------------------------------


const openModalUser4 = document.querySelector('.feedback__popup-link4')
const modalWindowUser4 = document.querySelector('.product-modal__user4')
const closeModalUser4 = document.querySelector('.modal__close-btn4')

openModalUser4.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindowUser4.classList.add('modal-active')
  scrollController.disabledScroll()
})

closeModalUser4.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindowUser4.classList.remove('modal-active')
  scrollController.enabledScroll()
})

modalWindowUser4.addEventListener('click', function (e) {
  e.preventDefault()
  modalWindowUser4.classList.remove('modal-active')
  scrollController.enabledScroll()
})



const openPopupUser4 = document.querySelector('.feedback__dots4')
const popupWindowUser4 = document.querySelector('.feedback__modal-4')
const closePopupUser4 = document.querySelector('.product-tabs')


openPopupUser4.addEventListener('click', function (e) {
  e.preventDefault()
  popupWindowUser4.classList.add('popup-active')  
})

popupWindowUser4.addEventListener('click', function (e) {
  e.preventDefault()
  popupWindowUser4.classList.remove('popup-active')  
})


const closeWindowModalUser4 = event => {
  const target = event.target;

  if (target === closePopupUser4) {
    popupWindowUser4.classList.remove('popup-active')
  }
}

closePopupUser4.addEventListener('click', closeWindowModalUser4);


const openPopupComplainUser4 = document.querySelector('.feedback__modal-link4')
const popupComplainUser4 = document.querySelector('.popup-complain-4')
const closePopupComplainUser4 = document.querySelector('.close-complain4')


openPopupComplainUser4.addEventListener('click', function (e) {
  e.preventDefault()
  popupComplainUser4.classList.add('complain-active')
  scrollController.disabledScroll()
})

closePopupComplainUser4.addEventListener('click', function (e) {
  e.preventDefault()
  popupComplainUser4.classList.remove('complain-active')
  scrollController.enabledScroll()
})

popupComplainUser4.addEventListener('click', function (e) {
  e.preventDefault()
  popupComplainUser4.classList.remove('complain-active')
  scrollController.enabledScroll()
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
  
