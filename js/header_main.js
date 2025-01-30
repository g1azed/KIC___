



$(document).ready(function () {
    $("#header").css('opacity','0')
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        $("#header").css('opacity','0')
            if($(window).width() >768){
                if($(window).scrollTop() >= 4818){
                $("#header").removeClass("deactive");
                $("#header").addClass("active");

                $("#header").css('opacity','1')
                // $('.head_logo_p').attr('src', 'asset/header/hanrimLOGO_color.svg')
                $('.head_logo_p').attr('src', 'https://g1azed.github.io/hallym/asset/header/hanrimLOGO_color.svg')
                $('.langIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/KoreanIcon_b.svg')
                $('.searchIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/SearchIcon_b.svg')
                $('.menuIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/headerBarIcon_b.svg')
            }else if($(window).scrollTop() <= 2424 && $(window).scrollTop() > -10){
                $("#header").css('opacity','0')
            }else{
                $("#header").css('opacity','1')
                $("#header").removeClass("active");
                $("#header").addClass("deactive");

                $('.head_logo_p').attr('src', 'https://g1azed.github.io/hallym/asset/header/hanrimLOGO.svg')
                $('.langIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/KoreanIcon.svg')
                $('.searchIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/SearchIcon.svg')
                $('.menuIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/headerBarIcon.svg')
            }
        }   
    })

});
