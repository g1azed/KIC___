gsap.registerPlugin(ScrollTrigger);

// scroll smooth
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);




// 스크롤따라 img 커지면서 올라오기
gsap.set(".sec_establish_bg", {  transform:"scale(0.8)",  height: "100vh", y: 50 });
// gsap.set(".sec_esta_text", {y: 900, opacity: 0,});
gsap.to(".sec_establish_bg", {
    height: "100%",
    width: "100%",
    transform:"scale(1)",
    ease: "none",
    y: 0,
    scrollTrigger: {
        markers: true,
        trigger: ".sec_establish_bg",
        start: "-=800",
        end: "0",
        scrub: 1,
    },
});

