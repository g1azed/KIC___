gsap.registerPlugin(ScrollTrigger);

// scroll smooth
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// main_3 background 어두워지기
gsap.set(".main_3", {
    backgroundColor: "#ffffff",
});
gsap.to(".main_3", {
    backgroundColor: "#121212",
    scrollTrigger: {
        trigger: ".main_3",
        start: "top top",
        end: "+=100",
        scrub: 1,
    },
});

// 스크롤따라 img 커지면서 올라오기
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sec_establish_bg",
        start: "top center",
        end: "+=900px",
        scrub: 1,
        toggleActions: "play none reverse none",
    },
});
tl.set(".sec_establish_bg", {
    width: "85vw",
    height: "85vh",
    y: 0,
    borderRadius: "0",
});
tl.set(".sec_esta_text", { y: 400, opacity: 0 });
tl.to(".sec_establish_bg", {
    height: "100vh",
    width: "100%",
    ease: "none",
    immediateRender: false,
});
tl.to(".sec_establish_bg", {
    height: "100vh",
    width: "100%",
    borderRadius: "0",
    ease: "none",
    immediateRender: false,
});
tl.to(".sec_establish_bg", {
    height: "100vh",
    width: "100%",
    borderRadius: "0",
    ease: "none",
    immediateRender: false,
});
tl.to(".sec_establish_bg", {
    height: "100vh",
    width: "70%",
    borderRadius: "40px",
    ease: "none",
});
tl.to(".sec_establish_bg", {
    yPercent: "-10",
    height: "100vh",
    width: "60%",
    borderRadius: "80px",
    ease: "none",
});
tl.to(".sec_esta_text", {
    y: 200,
    opacity: 1,
    immediateRender: false,
    scrollTrigger: {
        trigger: ".sec_esta_text",
        start: "top-=300px center",
        end: "+=100",
        scrub: 1,
    },
});

// main background
// 지배구조
const resizeDiv = document.querySelector(".layerd_1_bg");
const main_text1 = document.querySelector(".layerd_1_text");
let textAnimationTriggered = false; // 애니메이션 중복 실행 방지 변수

const tl_1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sec_establish",
        start: "top top",
        end: "+=2500px",
        scrub: 2,
        toggleActions: "play reverse play reverse",
    },
});
tl_1.set(resizeDiv, {
    scale: 0.5,
    y: 0,
    yPercent: -25,
    borderRadius: "80px",
    force3D: true,
});
tl_1.to(
    resizeDiv,
    {
        width: "100%",
        scale: 0.7,
        height: "160vh",
        y: 200,
        duration: 2,
        immediateRender: false,
    },
    "+=0"
);
tl_1.to(
    resizeDiv,
    {
        width: "100%",
        height: "160vh",
        scale: 1.0,
        borderRadius: "0",
        y: 400,
        duration: 2,
        onUpdate: function () {
            if (
                !textAnimationTriggered &&
                gsap.getProperty(resizeDiv, "scale") >= 0.8
            ) {
                textAnimationTriggered = true; // 중복 실행 방지
                revealTextAnimation();
            }
        },
    },
    "+=0"
);
tl_1.to(
    resizeDiv,
    {
        width: "100%",
        height: "160vh",
        scale: 1.0,
        y: 600,
        duration: 2,
        immediateRender: false,
    },
    "+=0"
);
tl_1.to(resizeDiv, {
    width: "100%",
    height: "160vh",
    borderRadius: "80px",
    scale: 0.6,
    y: 700,
    duration: 4,
});

// 투자철학 & 정책
const resizeDiv2 = document.querySelector(".layerd_2_bg");
const tl_2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".layerd_2",
        start: "top-=500px center",
        end: "+=2000px",
        scrub: 2,
        // toggleActions: "play reverse play reverse",
    },
});
tl_2.set(resizeDiv2, {
    scale: 0.3,
    y: 400,
    yPercent: -30,
    borderRadius: "80px",
});
tl_2.to(
    resizeDiv2,
    {
        scale: 0.6,
        duration: 2,
        y: 400,
        borderRadius: "80px",
        immediateRender: false,
    },
    "+=0"
);
tl_2.to(
    resizeDiv2,
    {
        width: "100%",
        height: "160vh",
        scale: 0.7,
        duration: 2,
        y: 400,
        immediateRender: false,
        onUpdate: function () {
            if (
                !textAnimationTriggered &&
                gsap.getProperty(resizeDiv, "scale") >= 0.8
            ) {
                textAnimationTriggered = true;
                revealTextAnimation();
            }
        },
    },
    "+=0"
);
tl_2.to(
    resizeDiv2,
    {
        width: "100%",
        height: "160vh",
        scale: 1.0,
        y: 400,
        duration: 2,
        immediateRender: false,
    },
    "+=0"
);
tl_2.to(
    resizeDiv2,
    {
        width: "100%",
        height: "160vh",
        scale: 1.0,
        y: 500,
        duration: 2,
        immediateRender: false,
    },
    "+=0"
);
tl_2.to(resizeDiv2, {
    width: "100%",
    height: "160vh",
    scale: 0.8,
    y: 500,
    duration: 2,
    immediateRender: false,
});
tl_2.to(resizeDiv2, {
    width: "100%",
    scale: 0.6,
    y: 500,
    duration: 2,
    immediateRender: false,
});

// 비전
const resizeDiv3 = document.querySelector(".layerd_3_bg");
const tl_3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".layerd_3",
        start: "top-=500px center",
        end: "+=1500px",
        scrub: 1,
        // toggleActions: "play none none none",
    },
});
tl_3.set(resizeDiv3, {
    scale: 0.4,
    y: 400,
    yPercent: -45,
    borderRadius: "80px",
});
tl_3.to(
    resizeDiv3,
    {
        scale: 0.7,
        y: 400,
        immediateRender: false,
    },
    "+=0"
);
tl_3.to(
    resizeDiv3,
    {
        borderRadius: "0",
        scale: 1,
        duration: 1,
        y: 400,
        immediateRender: false,
        onUpdate: function () {
            if (
                !textAnimationTriggered &&
                gsap.getProperty(resizeDiv, "scale") >= 0.8
            ) {
                textAnimationTriggered = true;
                revealTextAnimation();
            }
        },
    },
    "+=0"
);
tl_3.to(
    resizeDiv3,
    {
        scale: 1,
        duration: 1,
        y: 400,
        immediateRender: false,
    },
    "+=0"
);

// reveal text
// 텍스트 나타나는 애니메이션 함수
function revealTextAnimation() {
    gsap.utils.toArray(".layerd_1_text").forEach((container) => {
        let revealElements = container.querySelectorAll(".reveal");
        gsap.set(".layerd_1_text", { y: 300, opacity: 0 });
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top-=400px center",
                end: "+=80px",
            },
        });
        tl.fromTo(
            container,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.2 }
        );
        revealElements.forEach((element) => {
            let word = element.innerText;
            element.innerHTML = `<span>${word}</span>`;
            let target = element.querySelector("span");

            tl.fromTo(
                target,
                { y: "100%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 0.2 },
                "+=0.01"
            );
        });
    });

    gsap.utils.toArray(".layerd_2_text").forEach((container) => {
        let revealElements = container.querySelectorAll(".reveal");

        gsap.set(".layerd_2_text", { yPercent: "40", opacity: 0 });
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".layerd_2_text",
                start: "top-=200px center",
                end: "+=10px",
                pin: true,
            },
        });
        tl.fromTo(
            container,
            { yPercent: "40", opacity: 0 },
            { yPercent: "0", opacity: 1, duration: 0.2 },
            { yPercent: "-40", opacity: 0 }
        );
        revealElements.forEach((element) => {
            let word = element.innerText;
            element.innerHTML = `<span>${word}</span>`;
            let target = element.querySelector("span");

            tl.fromTo(
                target,
                { y: "100%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 0.2 },
                "+=0.01"
            );
        });
    });

    gsap.utils.toArray(".layerd_3_text").forEach((container) => {
        let revealElements = container.querySelectorAll(".reveal");
        gsap.set(".layerd_3_text", { y: 1200, opacity: 0 });
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top-=1800px center",
                end: "+=10px",
                toggleActions: "play none none none",
            },
        });
        tl.fromTo(
            container,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.2 }
        );
        revealElements.forEach((element) => {
            let word = element.innerText;
            element.innerHTML = `<span>${word}</span>`;
            let target = element.querySelector("span");

            tl.fromTo(
                target,
                { y: "100%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 0.2 },
                "+=0.01"
            );
        });
    });
}

// count up
/**
 * animateCount 함수
 * @param {HTMLElement} element - 애니메이션을 적용할 요소
 * @param {number} start - 시작 숫자
 * @param {number} end - 종료 숫자
 * @param {number} duration - 애니메이션 지속 시간 (밀리초)
 * @param {function} formatter - 숫자를 포맷하는 함수 (옵션)
 */
function animateCount(element, start, end, duration, formatter) {
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = start + (end - start) * progress;

        element.textContent = formatter
            ? formatter(currentValue)
            : currentValue;

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", function () {
    // 애니메이션 옵션 배열
    const animations = [
        {
            id: "number",
            start: 0,
            end: 1894,
            duration: 2000,
            formatter: (val) => Math.floor(val).toLocaleString(),
        },
        {
            id: "number2",
            start: 0,
            end: 11.59,
            duration: 2000,
            formatter: (val) => val.toFixed(2) + "%",
        },
        {
            id: "number3",
            start: 0,
            end: 6.48,
            duration: 2000,
            formatter: (val) => val.toFixed(2) + "%",
        },
        {
            id: "number4",
            start: 0,
            end: 22.0,
            duration: 2000,
            formatter: (val) => val.toFixed(1) + "%",
        },
    ];

    // IntersectionObserver 설정: .blur_section이 50% 이상 보일 때 실행
    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 애니메이션 실행
                animations.forEach((anim) => {
                    const elem = document.getElementById(anim.id);
                    if (elem) {
                        animateCount(
                            elem,
                            anim.start,
                            anim.end,
                            anim.duration,
                            anim.formatter
                        );
                    }
                });
                // 한 번 실행된 후에는 관찰 중지 (반복 실행 방지)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const target = document.querySelector(".blur_section");
    if (target) {
        observer.observe(target);
    }
});
