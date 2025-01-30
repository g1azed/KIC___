$(document).ready(function(){
    $('.main_4_slick_wrap').slick({
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,

    });

    // 중앙 슬라이드에 효과를 적용하기 위해 slick-center 클래스를 사용
    // $('.main_4_slick_wrap').on('afterChange', function (event, slick, currentSlide) {
    //     $('.main_4_slick').removeClass('active-slide'); // 이전 active-slide 제거
    //     $('.main_4_slick.slick-center').addClass('active-slide'); // 중앙 슬라이드에 추가
    // });

    /* ---------------------------------------------------- */
    /* 포토갤러리 슬라이드 */
    // $('.photo_slideWrap').slick({
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 800,
    //     arrows: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    // });


});