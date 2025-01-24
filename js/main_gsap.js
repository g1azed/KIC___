gsap.registerPlugin(ScrollTrigger);

// scroll smooth
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);




// 스크롤따라 img 커지면서 올라오기
gsap.set(".sec_establish_bg", { width: "85vw", height: "85vh", y: -600 });
gsap.set(".sec_esta_text", {y: 900, opacity: 0,});
gsap.to(".sec_establish_bg", {
    height: "100%",
    width: "100%",
    ease: "none",
    y: 0,
    scrollTrigger: {
        trigger: ".sec_establish_bg",
        start: "top center",
        end: "+=700",
        scrub: 1,
        onLeave: () => {
            console.log("백그라운드 이미지 끝")
            gsap.to(".sec_esta_text", {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    // markers: true,
                    trigger: ".sec_establish_bg",
                    start: "-400px",
                    end: "+=500",
                    scrub: 1,
                },
            });
        }
    },
});


/* 섹션 레이어드 */
gsap.set(".layerd", { width: "60%", height: "60%", y: 500 });
gsap.to(".layerd", {
    height: "100%",
    width: "100%",
    ease: "none",
    y: 0,
    scrollTrigger: {
        trigger: ".scroll_card_1",
        start: 'center center',
        end: '+=100',
        scrub: 1,
        // onleave / leave enter
    }
})
gsap.utils.toArray(".layerd").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top center",
        // end: () => "+=" + (window.innerHeight * 2 - 4),
        end: 100,
    });
});

// gsap.utils.toArray(".main_flex_secWrap").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "bottom bottom",
//         end: () => "+=" + (window.innerHeight * 2 - 4),
//     });
// });


/* 마우스 커서 */
// 