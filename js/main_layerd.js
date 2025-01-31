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
gsap.to(resizeDiv, {
    transform: "scale(1.5 , 1.5)",
    transform: "translateY(30%)",
    scrollTrigger: {
        trigger: resizeDiv,
        start: "top center",
        end: "top -50px", 
        scrub: 1, 
    }
});
// 두 번째 트리거: div가 작아지도록
gsap.set(resizeDiv, {  
    transform: "scale(1.5 , 1.5)",
    transform: "translateY(30%)",
})
gsap.to(resizeDiv, {
    transform: "scale(0.5 , 0.5)",
    transform: "translateY(30%)",
    scrollTrigger: {
        trigger: resizeDiv,
        start: "center 50px",
        end: "bottom center", 
        scrub: 5, 
    }
});

const resizeDiv2 = document.querySelector('.layerd_2_bg');

// 첫 번째 트리거: div가 커지도록
gsap.to(resizeDiv2, {
    width: '100%',
    height: '150vh',
    position: 'sticky',
    top: '100px',
    scrollTrigger: {
        trigger: resizeDiv2,
        start: "top center",
        end: "top -50px", 
        scrub: 5, 
    }
});
// 두 번째 트리거: div가 작아지도록
gsap.set(resizeDiv2, {  
    width: '100%',
    height: '150vh',
    position: 'sticky'
})
gsap.to(resizeDiv2, {
    width: '50%',
    height: '100vh',
    scrollTrigger: {
        trigger: resizeDiv2,
        start: "center 50px",
        end: "bottom center", 
        scrub: 5, 
    }
});

const resizeDiv3 = document.querySelector('.layerd_3_bg');

// 첫 번째 트리거: div가 커지도록
gsap.to(resizeDiv3, {
    width: '100%',
    height: '150vh',
    position: 'sticky',
    top: '100px',
    scrollTrigger: {
        trigger: resizeDiv3,
        start: "top center",
        end: "top -50px", 
        scrub: 5, 
    }
});
// 두 번째 트리거: div가 작아지도록
gsap.set(resizeDiv3, {  
    width: '100%',
    height: '150vh',
    position: 'sticky'
})
gsap.to(resizeDiv3, {
    width: '50%',
    height: '100vh',
    scrollTrigger: {
        trigger: resizeDiv3,
        start: "center 50px",
        end: "bottom center", 
        scrub: 5, 
    }
});
