
$(document).ready(function(){
    const recruit_box = $(".main_6_recruit_box");

    recruit_box.hover(function(){
        // 호버됐을때 블루
        $(this).css('background', 'rgba(11, 53, 133, 1)')
        $(this).css('border', 'none')
        $(this).find('.recruit_text').css('color', '#ffffff');
        $(this).find('.recruit_text').css('border-bottom', '1px solid #ffffff');
        $(this).find(".recruit_btnWrap img").attr("src", "./assets/icon/recruit/recruit_Btn_icon_White.svg");
        $(this).find('.recruit_btn_text').css('color', '#ffffff');

        let index = $(this).index() + 1; // index는 0부터 시작하므로 +1을 추가
        $(this).find(".recruit_icon").attr("src", "./assets/icon/recruit/recruit_Icon_" + index + "_w.svg");
    },function(){
        // 마우스 떠날 시 화이트
        $(this).css('background', '#ffffff')
        $(this).css('border', '2px solid rgba(204, 204, 204, 1)')
        $(this).find('.recruit_text').css('color', '#121212');
        $(this).find('.recruit_text').css('border-bottom', '1px solid #121212');
        $(this).find(".recruit_btnWrap img").attr("src", "./assets/icon/recruit/recruit_Btn_icon_Blue.svg");
        $(this).find('.recruit_btn_text').css('color', '#121212');

        let index = $(this).index() + 1; // index는 0부터 시작하므로 +1을 추가
        $(this).find(".recruit_icon").attr("src", "./assets/icon/recruit/recruit_Icon_" + index + ".svg");
    })
})