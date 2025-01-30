

// <!--gsap-->
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0);
gsap.registerPlugin(ScrollTrigger);

gsap.set(".sub_01_1_content", { width: '65vw', height: '65vh', y: 200});
gsap.to('.sub_01_1_content',{
    height: '110vh',
    width: '100vw',
    ease: 'none',
    y: 0,
    scrollTrigger: {
        // markers: true,
        trigger: '.sub_01_1',
        start: "top top",
        end: "+=400",
        scrub: 1,
    },
})



gsap.set(".t-black", {clipPath: "inset(0 0 0)",});
gsap.to('.t-black',{
    clipPath: "inset(0 0 100%)",
    ease: 'none',
    scrollTrigger: {
        trigger: '.sub_01_1_content',
        start: 'top 71.55%',
        end: "+=100",
        scrub: 1,
    },

})


gsap.set("header",{background: 'transparent'});
gsap.to("header",{
    background: '#ffffff',
    scrollTrigger: {
        trigger: '.sub_01_2',
        start: 'center center',
        end: "+=0",
        toggleActions: "play none restart reverse",   
    },
})

