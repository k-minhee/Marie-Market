/* ===================================best swiper */
const bestSlide = new Swiper('.best_slide', {
    spaceBetween: 8,

    breakpoints:{
        1300: {slidesPerView:4,},
        780: {slidesPerView:4.2,},
        360: {slidesPerView:3.1},
    },

    autoplay: {
        delay: 800,
        disalbeOnInteraction: true,
    },
    loop: true,
    speed: 1600,

    navigation: {
        nextEl: '.best_slide .swiper-button-next',
        prevEl: '.best_slide .swiper-button-prev',
    },
})
const reviewSlide = new Swiper('.review_slide', {
    spaceBetween: 8,

    breakpoints:{
        1300: {slidesPerView:5,},
        820: {slidesPerView:4.2,},
        500: {slidesPerView:3.2,},
        300: {slidesPerView:2.1,},
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

/* MD PICK 호버 시 설명 나타나기 */
const mdContentsWrap = document.querySelectorAll('.md_contents_wrap .md_contents')
const mdBlack = document.querySelectorAll('.md_black')
const mdContentDetail = document.querySelectorAll('.md_contents_wrap .md_contents .md_content_detail');
console.log(mdContentsWrap, mdContentDetail, mdBlack);



function coverBlack (){
    mdBlack[0].style.height = '100%'
    mdBlack[1].style.height = '100%'
    mdBlack[2].style.height = '100%'
    mdBlack[3].style.height = '100%'
}

function revmoeDetailPosition (){
    mdContentDetail[0].style.bottom = '-120px'
    mdContentDetail[1].style.bottom = '-120px'
    mdContentDetail[2].style.bottom = '-120px'
    mdContentDetail[3].style.bottom = '-120px'
}

mdContentsWrap[0].addEventListener('mouseover',function(){
    coverBlack();
    revmoeDetailPosition();
    mdBlack[0].style.height = '0'
    mdContentDetail[0].style.bottom = '12px'
    mdContentDetail[0].style.transition = 'bottom 0.4s'
})
mdContentsWrap[1].addEventListener('mouseover',function(){
    coverBlack();
    revmoeDetailPosition();
    mdBlack[1].style.height = '0'
    mdContentDetail[1].style.bottom = '12px'
    mdContentDetail[1].style.transition = 'bottom 0.4s'
})
mdContentsWrap[2].addEventListener('mouseover',function(){
    coverBlack();
    revmoeDetailPosition();
    mdBlack[2].style.height = '0'
    mdContentDetail[2].style.bottom = '12px'
    mdContentDetail[2].style.transition = 'bottom 0.4s'
})
mdContentsWrap[3].addEventListener('mouseover',function(){
    coverBlack();
    revmoeDetailPosition();
    mdBlack[3].style.height = '0'
    mdContentDetail[3].style.bottom = '12px'
    mdContentDetail[3].style.transition = 'bottom 0.4s'
})

