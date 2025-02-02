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

    /**
     * 주어진 요소 내의 텍스트 노드를 한 글자씩 <span>으로 감싸는 함수
     * @param {Element} element - 현재 처리할 DOM 요소
     * @param {boolean} isSlow - 현재 컨텍스트에서 느린 애니메이션을 적용할지 여부
     * @param {number} baseDelay - 현재 애니메이션이 시작되는 기준 delay 값
     * @returns {number} - 마지막 적용된 delay 값 반환
     */
    function wrapTextNodes(element, isSlow = false, baseDelay = 0) {
        const nodes = Array.from(element.childNodes);
        let letterIndex = 0; // 전체 글자 순서를 위한 전역 카운터
        let currentDelay = baseDelay; // 현재 적용할 delay 값
    
        nodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                const text = child.textContent;
                const frag = document.createDocumentFragment();
    
                for (let i = 0; i < text.length; i++) {
                    const span = document.createElement("span");
                    span.textContent = text[i];
    
                    // ✅ 기본 속도 설정
                    let delay = currentDelay + letterIndex * (isSlow ? 0.1 : 0.05); // ✅ `<i>` 태그 안은 더 느리게
                    let duration = isSlow ? 1.5 : 1;
    
                    // ✅ 스타일 적용
                    span.style.animationDelay = `${delay}s`;
                    span.style.animationDuration = `${duration}s`;
                    span.style.animationTimingFunction = "ease-out"; // ✅ 자연스럽게 느려지도록 설정
    
                    letterIndex++; // 전체 글자 인덱스 증가
                    frag.appendChild(span);
                }
                element.replaceChild(frag, child);
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                if (child.tagName.toLowerCase() === "br") {
                    return; // `<br>` 태그는 무시
                } else if (child.tagName.toLowerCase() === "i") {
                    // ✅ `<i>` 태그 내부는 느린 애니메이션 적용
                    let slowEndDelay = wrapTextNodes(child, true, currentDelay);
                    currentDelay = slowEndDelay + 0.5; // ✅ `<i>` 태그 끝난 후 0.5초 대기 후 다음 텍스트 시작
                } else {
                    // ✅ 일반 요소는 기본 속도로 적용
                    currentDelay = wrapTextNodes(child, false, currentDelay);
                }
            }
        });
    
        return currentDelay; // ✅ 마지막 적용된 delay 값 반환
    }
    
    // ✅ 실행
    wrapTextNodes(h2);
    
    
    /* ----------------------------------------------------------------- */
    /* 마우스 커서 */
    const container = document.getElementById("cursorContainer");
    const customCursor = document.getElementById("customCursor");

    // 실제 마우스 좌표(목표 위치)
    let targetX = 0;
    let targetY = 0;
    // 커스텀 커서의 현재 좌표
    let currentX = 0;
    let currentY = 0;
    // 선형 보간(Lerp) 비율 (0 ~ 1, 값이 작을수록 느리게 따라감)
    const lerpFactor = 0.1;

    // 마우스 이동 이벤트: 목표 좌표 갱신
    container.addEventListener("mousemove", (e) => {
        // 컨테이너의 위치(오프셋)를 고려하여 좌표 보정
        const rect = container.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
    });

    // 클릭 이벤트: 클릭 시 커스텀 커서에 'clicked' 클래스를 추가하고 잠시 후 제거
    container.addEventListener('mousedown', () => {
        customCursor.classList.add('clicked');
    });
    container.addEventListener('mouseup', () => {
        customCursor.classList.remove('clicked');
    });


    // 영역을 벗어나면 커스텀 커서를 숨깁니다.
    container.addEventListener("mouseleave", () => {
        customCursor.style.opacity = "0";
    });
    container.addEventListener("mouseenter", () => {
        customCursor.style.opacity = "1";
    });

    // 애니메이션 루프: 커스텀 커서 위치를 보간하여 업데이트
    function animateCursor() {
        // 현재 위치를 목표 위치로 보간하여 이동 (lerp)
        currentX += (targetX - currentX) * lerpFactor;
        currentY += (targetY - currentY) * lerpFactor;

        customCursor.style.left = currentX + "px";
        customCursor.style.top = currentY + "px";

        requestAnimationFrame(animateCursor);
    }
    animateCursor();
});
