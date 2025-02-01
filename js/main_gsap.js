gsap.set(".sec_establish_bg", { width: "85vw", height: "85vh", y: 0 });
gsap.set(".sec_esta_text", { y: 200, opacity: 0,});
gsap.to(".sec_establish_bg", {
    height: "100%",
    width: "100%",
    ease: "none",
    y: 100,
    immediateRender: false,
    scrollTrigger: {
        trigger: ".sec_establish_bg",
        start: "top center",
        end: "+=100",
        scrub: 1,
        toggleActions: "play none reverse none",
        onLeave: () => {
            gsap.to(".sec_esta_text", {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".main_3",
                    start: "top center",
                    end: "+=200",
                    scrub: 1,
                },
            });
        }
    },
});
gsap.to('.sec_establish_bg', {
    height: "100%",
    width: "100%",
    borderRadius: "100px",
    ease: "none",
    y: 200,
    immediateRender: false,
});
gsap.to('.sec_establish_bg', {
    height: "50%",
    width: "50%",
    borderRadius: "100px",
    ease: "none",
    y: 300,
    immediateRender: false,
    scrollTrigger: {
        trigger: '.sec_establish_bg',
        start: "top+=250px",
        end: "+=600px", 
        scrub: true, 
        toggleActions: "play none reverse none",
    }
});





