// 스크롤따라 img 커지면서 올라오기
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);


gsap.registerPlugin(ScrollTrigger);

gsap.set(".sec_establish_bg", { width: "85vw", height: "85vh", y: 200 });
gsap.to(".sec_establish_bg", {
    height: "100%",
    width: "100%",
    ease: "none",
    y: 0,
    scrollTrigger: {
        trigger: ".sec_esta_text",
        start: "center top",
        end: "+=100",
        scrub: 1,
    },
});
gsap.set(".for_esta", {color: "#121212",});
gsap.to(".for_esta", {
    color: "#ffffff",
    scrollTrigger: {
        trigger: ".sec_esta_text",
        start: "center top",
        end: "+=100",
        scrub: 1,
    },
});
// gsap.set(".t-black", {clipPath: "inset(0 0 0)",});
// gsap.to('.t-black',{
//     clipPath: "inset(0 0 100%)",
//     ease: 'none',
//     scrollTrigger: {
//         trigger: '.scrolling_img_Wrap',
//         start: 'top 31.5%',
//         end: "+=100",
//         scrub: 1,
//     },
// })

/* 섹션 레이어드 */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".main_flex_secWrap").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom",
        end: () => "+=" + (window.innerHeight * 2 - 4),
    });
});