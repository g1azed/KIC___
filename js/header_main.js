



$(document).ready(function () {

    var prevScrollTop = 0;
    $(document).on('scroll', function(){
            
        if($(window).scrollTop() >= 918){
            var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
        
            if (nowScrollTop > prevScrollTop){ $('header').addClass('active'); } 
            // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
            else { $('header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
            prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장
            $("#header").css('background-color','#ffffff')
            $(".header_content ul li a").css('color','#121212')
            // $('.header_logo_img').attr('src', 'https://g1azed.github.io/KIC/assets/logo/KIC_LOGO_Blue.svg')
            $('.header_logo_img').attr('src', './assets/logo/KIC_LOGO_Blue.svg')
            $('.icon_search').attr('src', './assets/icon/KIC_search_Black.svg')
            $('.icon_lang').attr('src', './assets/icon/KIC_Language_icon_Black.svg')
        }else{
            $("#header").css('background-color','transparent')
            $(".header_content ul li a").css('color','#ffffff')
            // $('.header_logo_img').attr('src', 'https://g1azed.github.io/KIC/assets/logo/KIC_LOGO_White.svg')
            $('.header_logo_img').attr('src', './assets/logo/KIC_LOGO_White.svg')
            $('.icon_search').attr('src', './assets/icon/KIC_search_White.svg')
            $('.icon_lang').attr('src', './assets/icon/KIC_Language_icon_White.svg')
        }
    })

});