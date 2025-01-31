// window.addEventListener('scroll', function () {
//     let currentScroll = document.documentElement.scrollTop;
//     let bigger = (1 / 18) * currentScroll - (500 / 18);
//     let smaller = Math.max(-(1 / 6) * currentScroll + (3000 / 6 + 100), 50); // 최소 크기 50 제한

//     let layerd = document.querySelector('.layerd_1_bg');
//     let size, radius;
    

//     if (smaller < 100) {
//         size = smaller;
//         radius = '16px';
//     } else if (bigger > 100) {
//         size = 100;
//         radius = '0';
//     } else if (bigger >= 50) {
//         size = bigger;
//         radius = '16px'; 

//     } else {
//         return; // 불필요한 DOM 업데이트 방지
//     }

//     layerd.style.width = `${size}%`;
//     layerd.style.height = `${size}vh `;
//     layerd.style.borderRadius = radius;
// });

gsap.registerPlugin(ScrollTrigger);

const resizeDiv = document.querySelector('.layerd_1_bg');
// 첫 번째 트리거: div가 커지도록
// gsap.set(resizeDiv, {  
//     transform: "scale(0.5) translateY(0%)",
// })
gsap.to(resizeDiv, {
    // transform: "scale(1.0 , 1.0) translateY(50%)",
    scale:0.5,
    y: -100,
    scrollTrigger: {
        trigger: '.main_1',
        start: "top top",
        end: "+=10px", 
        scrub: 1, 
        markers: true // 디버깅용
    }
});
gsap.to(resizeDiv, {
    // transform: "scale(1.0 , 1.0) translateY(50%)",
    scale: 1.0,
    y: 500,
    scrollTrigger: {
        markers: {
            start: 'red',
            end: 'red',
        },
        trigger: '.layerd_1',
        start: "top top",
        end: "+=600px", 
        scrub: 1, 
    }
});
// 
// 두 번째 트리거: div가 작아지도록
gsap.set(resizeDiv, {  
    scale: 1.0,
    y: 500,
    transform: "scale(1.0) translateY(80%)",
})
gsap.to(resizeDiv, {
    // transform: "scale(0.5 , 0.5) translateY(200%)",
    scale: 0.5,
    y: 1000,
    scrollTrigger: {
        // markers: true,
        trigger: resizeDiv,
        start: "top+=550px",
        end: "+=1000px", 
        scrub: true, 
    }
});

