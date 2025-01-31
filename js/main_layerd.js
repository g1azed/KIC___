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

