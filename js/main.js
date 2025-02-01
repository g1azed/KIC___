$(document).ready(function () {
    const recruit_box = $(".main_6_recruit_box");

    recruit_box.hover(
        function () {
            // 호버됐을때 블루
            $(this).css("background", "rgba(11, 53, 133, 1)");
            $(this).css("border", "none");
            $(this).find(".recruit_text").css("color", "#ffffff");
            $(this)
                .find(".recruit_text")
                .css("border-bottom", "1px solid #ffffff");
            $(this)
                .find(".recruit_btnWrap img")
                .attr(
                    "src",
                    "./assets/icon/recruit/recruit_Btn_icon_White.svg"
                );
            $(this).find(".recruit_btn_text").css("color", "#ffffff");

            let index = $(this).index() + 1; // index는 0부터 시작하므로 +1을 추가
            $(this)
                .find(".recruit_icon")
                .attr(
                    "src",
                    "./assets/icon/recruit/recruit_Icon_" + index + "_w.svg"
                );
        },
        function () {
            // 마우스 떠날 시 화이트
            $(this).css("background", "#ffffff");
            $(this).css("border", "2px solid rgba(204, 204, 204, 1)");
            $(this).find(".recruit_text").css("color", "#121212");
            $(this)
                .find(".recruit_text")
                .css("border-bottom", "1px solid #121212");
            $(this)
                .find(".recruit_btnWrap img")
                .attr("src", "./assets/icon/recruit/recruit_Btn_icon_Blue.svg");
            $(this).find(".recruit_btn_text").css("color", "#121212");

            let index = $(this).index() + 1; // index는 0부터 시작하므로 +1을 추가
            $(this)
                .find(".recruit_icon")
                .attr(
                    "src",
                    "./assets/icon/recruit/recruit_Icon_" + index + ".svg"
                );
        }
    );
});

document.addEventListener("DOMContentLoaded", function () {
    const h2 = document.querySelector(".main_1_text h2");
    let letterIndex = 0; // 전체 글자 순서를 위한 전역 카운터

    /**
     * 주어진 요소 내의 텍스트 노드를 한 글자씩 <span>으로 감싸는 함수
     * @param {Element} element - 현재 처리할 DOM 요소
     * @param {boolean} isSlow - 현재 컨텍스트에서 느린 애니메이션을 적용할지 여부
     */
    function wrapTextNodes(element, isSlow) {
        // 자식 노드를 배열로 복사 (DOM 조작에 안전하게)
        const nodes = Array.from(element.childNodes);
        nodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                const text = child.textContent;
                const frag = document.createDocumentFragment();
                for (let i = 0; i < text.length; i++) {

                    const span = document.createElement("span");
                    span.textContent = text[i];
                    span.style.animationDelay = letterIndex * 0.05 + "s";

                    // 현재 컨텍스트에 따라 애니메이션 지속시간 결정
                    span.style.animationDuration = isSlow ? "1.5s" : "0.5s";
                    letterIndex++;
                    frag.appendChild(span);
                }
                element.replaceChild(frag, child);
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                if (child.tagName.toLowerCase() === "br") {
                    return;
                } else {
                    // 만약 이 요소에 slow 클래스가 있다면, 해당 요소 내부는 느린 속도로 처리
                    let nextSlow = isSlow;
                    if (child.classList.contains("slow")) {
                        nextSlow = true;
                    }
                    // 현재 요소의 자식들 처리 (nextSlow 값에 따라)
                    wrapTextNodes(child, nextSlow);
                }
            }
        });
    }

    // h2 내부를 일반 속도(false)부터 시작하여 처리
    wrapTextNodes(h2, false);
});
