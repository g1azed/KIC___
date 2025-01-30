    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() < 279 ){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");
            $('.head_logo_p').attr('src', 'https://g1azed.github.io/hallym/asset/header/hanrimLOGO_color.svg')
            $('.langIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/KoreanIcon_b.svg')
            $('.searchIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/SearchIcon_b.svg')
            $('.menuIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/headerBarIcon_b.svg')
        }else if($(window).scrollTop() > 279 && $(window).scrollTop() < 1144 ){
            $("#header").removeClass("active");
            $("#header").addClass("deactive");

            $('.head_logo_p').attr('src', 'https://g1azed.github.io/hallym/asset/header/hanrimLOGO.svg')
            $('.langIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/KoreanIcon.svg')
            $('.searchIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/SearchIcon.svg')
            $('.menuIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/headerBarIcon.svg')
        }else if($(window).scrollTop() > 1224 && $(window).scrollTop() < 2700 ){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");

            $('.head_logo_p').attr('src', 'https://g1azed.github.io/hallym/asset/header/hanrimLOGO_color.svg')
            $('.langIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/KoreanIcon_b.svg')
            $('.searchIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/SearchIcon_b.svg')
            $('.menuIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/headerBarIcon_b.svg')
        }else if($(window).scrollTop() > 2700 && $(window).scrollTop() < 3617 ){
            $("#header").removeClass("active");
            $("#header").addClass("deactive");

            $('.head_logo_p').attr('src', 'https://g1azed.github.io/hallym/asset/header/hanrimLOGO.svg')
            $('.langIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/KoreanIcon.svg')
            $('.searchIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/SearchIcon.svg')
            $('.menuIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/headerBarIcon.svg')
        }else{
            $("#header").removeClass("deactive");
            $("#header").addClass("active");

            $('.head_logo_p').attr('src', 'https://g1azed.github.io/hallym/asset/header/hanrimLOGO_color.svg')
            $('.langIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/KoreanIcon_b.svg')
            $('.searchIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/SearchIcon_b.svg')
            $('.menuIcon').attr('src', 'https://g1azed.github.io/hallym/asset/Icon/headerBarIcon_b.svg')
        }
        console.log(scrollY)
    })