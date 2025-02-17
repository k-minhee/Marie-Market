const reviewSlide = new Swiper('.review_slide',{
    spaceBetween: 8,

    breakpoints:{
        700: {slidesPerView:8},
        360: {slidesPerView:5},
    },
})
console.log(reviewSlide)