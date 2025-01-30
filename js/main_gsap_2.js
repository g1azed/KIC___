gsap.registerPlugin(ScrollTrigger);

// scroll smooth
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);


// 스크롤따라 img 커지면서 올라오기
gsap.set(".sec_establish_bg", { width: "85vw", height: "85vh", y: 0 });
gsap.set(".sec_esta_text", {y: 1000, opacity: 0,});

gsap.to(".sec_establish_bg", {
    height: "100%",
    width: "100%",
    ease: "none",
    y: 0,
    scrollTrigger: {
        trigger: ".sec_establish_bg",
        start: "top center",
        end: "+=100",
        scrub: 1,
        onLeave: () => {
            console.log("백그라운드 이미지 끝")
            gsap.to(".sec_esta_text", {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".sec_establish_bg",
                    start: "top top",
                    end: "+=10",
                    scrub: 5,
                },
            });
        }
    },
});




