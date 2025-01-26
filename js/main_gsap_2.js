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
        // markers: {
        //     startColor:'red',
        //     endColor: 'red',
        // },
        onLeave: () => {
            console.log("백그라운드 이미지 끝")
            gsap.to(".sec_esta_text", {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    // markers: {
                    //     startColor:'blue',
                    //     endColor: 'blue',
                    // },
                    trigger: ".sec_esta_text",
                    start: "-1000px",
                    end: "+=100",
                    scrub: 8,
                },
            });
        }
    },
});


/* 섹션 레이어드 */
   // 박스가 커지는 애니메이션
   gsap.to(".layerd_1", {
    width: 300, // 너비를 300px로 증가
    height: 300, // 높이를 300px로 증가
    scrollTrigger: {
      trigger: ".layerd_1", // 트리거 대상
      start: "top 80%", // 애니메이션 시작 위치
      end: "top 50%", // 애니메이션 종료 위치
      scrub: true, // 스크롤과 애니메이션 동기화
    },
  });

  // 커진 상태 유지 및 스크롤 고정
  ScrollTrigger.create({
    trigger: ".layerd_1",
    start: "top 50%", // 고정 시작
    end: "+=300", // 고정 유지 구간 (300px 스크롤 동안)
    pin: true, // 박스를 고정
  });

  // 박스가 다시 작아지는 애니메이션
  gsap.to(".layerd_1", {
    width: 100, // 너비를 100px로 축소
    height: 100, // 높이를 100px로 축소
    scrollTrigger: {
      trigger: ".layerd_1",
      start: "top 50%+=300", // 고정 구간이 끝난 후 시작
      end: "top -20%", // 애니메이션 종료 위치
      scrub: true, // 스크롤과 애니메이션 동기화
    },
  });


// gsap.utils.toArray(".layerd").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top center",
//         // end: () => "+=" + (window.innerHeight * 2 - 4),
//         end: 100,
//     });
// });

// gsap.utils.toArray(".main_flex_secWrap").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "bottom bottom",
//         end: () => "+=" + (window.innerHeight * 2 - 4),
//     });
// });


/* 마우스 커서 */
// 