const reviewSlide = new Swiper('.review_slide',{
    spaceBetween: 8,

    breakpoints:{
        1300: {slidesPerView:8,},
        700: {slidesPerView:6.4,},
        360: {slidesPerView:4.2,},
    },
})
console.log(reviewSlide)