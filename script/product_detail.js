const reviewSlide = new Swiper('.review_slide',{
    spaceBetween: 8,

    breakpoints:{
        1300: {slidesPerView:8,},
        700: {slidesPerView:6.4,},
        360: {slidesPerView:4.2,},
    },
})
console.log(reviewSlide)

/* ========================찜하기 누르면 하트 변경 */
const heart = document.querySelector('.add_cart img')
console.log(heart)

heart.parentElement.addEventListener('click', (e)=>{e.preventDefault();})

heart.parentElement.addEventListener('click',function(){
    heart.src = './images/icon_heart_b.png'
})

/* ================색상 선택 시 컬러변경 */
const bigImg = document.querySelector('.detail_big_img img')
const colorOption = document.querySelectorAll('.color_option_wrap > a > img')
console.log(bigImg, colorOption)

colorOption[0].addEventListener('click',function(){
    bigImg.src= './images/detail_big.jpg';
})
colorOption[1].addEventListener('click',function(){
    bigImg.src= './images/detail_big_02.jpg';
})


/* ============== 제품상세, 상품문의 클릭 변경 */
const detailCategory = document.querySelectorAll('.detail_btm .detail_category > a');
console.log(detailCategory);

function detailCategoryRemove (){
    detailCategory[0].classList.remove ('active');
    detailCategory[1].classList.remove ('active');
    detailCategory[2].classList.remove ('active');
}

detailCategory[0].addEventListener('click',function(){
    detailCategoryRemove();
    detailCategory[0].classList = 'active';
})
detailCategory[1].addEventListener('click',function(){
    detailCategoryRemove();
    detailCategory[1].classList = 'active';
})
detailCategory[2].addEventListener('click',function(){
    detailCategoryRemove();
    detailCategory[2].classList = 'active';
})

detailCategory[0].addEventListener('click', (e)=>{e.preventDefault();})
detailCategory[1].addEventListener('click', (e)=>{e.preventDefault();})
detailCategory[2].addEventListener('click', (e)=>{e.preventDefault();})