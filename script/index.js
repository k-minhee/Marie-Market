/* ===================================best swiper */
const bestSlide = new Swiper('.best_slide', {
    spaceBetween: 8,

    breakpoints:{
        1024: {slidesPerView:4,},
        780: {slidesPerView:5,},
        360: {slidesPerView:4},
    },

    /*  autoplay: {
        delay: 800,
        disalbeOnInteraction: true,
    }, */
    loop: true,
    speed: 800,

    navigation: {
        nextEl: '.b_wrapper .swiper-button-next',
        prevEl: '.b_wrapper .swiper-button-prev',
    },
})
const reviewSlide = new Swiper('.review_slide', {

    breakpoints:{
        1024: {slidesPerView:5, spaceBetween: 8,},
        780: {slidesPerView:3},
        360: {slidesPerView:2},
    },

    /*  autoplay: {
        delay: 800,
        disalbeOnInteraction: true,
    }, */
    loop: true,
    speed: 800,

    navigation: {
        nextEl: '.b_wrapper .swiper-button-next',
        prevEl: '.b_wrapper .swiper-button-prev',
    },
})
console.log ('.bestSlide');