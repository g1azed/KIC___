$(document).ready(function(){
    $('.main_4_slick_wrap').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        arrows: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        focusOnselect: true,
        adaptiveHeight: false, // 높이를 자동으로 조정하지 않음 (직접 설정)
        prevArrow : $('.prevBtn'), 
        nextArrow : $('.nextBtn'), 
    });

// 중앙 슬라이드에 효과를 적용하기 위해 slick-center 클래스를 사용
$('.main_4_slick_wrap').on('afterChange', function (event, slick, currentSlide) {
    $('.main_4_slick').removeClass('active-slide'); // 이전 active-slide 제거
    $('.main_4_slick.slick-center').addClass('active-slide'); // 중앙 슬라이드에 추가
});

});