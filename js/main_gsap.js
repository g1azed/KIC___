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


/* 섹션 레이어드 백업*/
// const resizeDiv = document.querySelector('.layerd_1_bg');
// // 첫 번째 트리거: div가 커지도록
// gsap.to(resizeDiv, {
//     // transform: "scale(1.0 , 1.0) translateY(50%)",
//     scale: 1.0,
//     y: "100%",
//     scrollTrigger: {
//         trigger: resizeDiv,
//         start: "top top",
//         end: "+=500px", 
//         scrub: 1, 
//     }
// });
// // 두 번째 트리거: div가 작아지도록
// gsap.set(resizeDiv, {  
//     transform: "scale(1.0 , 1.0) translateY(100%)",
// })
// gsap.to(resizeDiv, {
//     // transform: "scale(0.5 , 0.5) translateY(200%)",
//     scale: 0.5,
//     y: "200%",
//     scrollTrigger: {
//         markers: true,
//         trigger: resizeDiv,
//         start: "top+=600px",
//         end: "+=1000px", 
//         scrub: true, 
//     }
// });

/* 마우스 커서 */
// 