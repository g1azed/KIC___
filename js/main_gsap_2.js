gsap.registerPlugin(ScrollTrigger);

// scroll smooth
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);



// main_3 background 어두워지기 
gsap.set(".main_3" , {
    backgroundColor : '#ffffff'
})
gsap.to(".main_3" , {
    backgroundColor : '#121212',
    scrollTrigger: {
        trigger: ".main_3",
        start: "top top",
        end: "+=100",
        scrub: 1,
    },
})


// 스크롤따라 img 커지면서 올라오기
gsap.set(".sec_establish_bg", { width: "85vw", height: "85vh", y: 0 });
gsap.set(".sec_esta_text", {y: 200, opacity: 0,});
gsap.to(".sec_establish_bg", {
    height: "100%",
    width: "100%",
    ease: "none",
    y: 100,
    scrollTrigger: {
        trigger: ".sec_establish_bg",
        start: "top center",
        end: "+=100",
        scrub: 1,
        onLeave: () => {
            gsap.to(".sec_esta_text", {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".main_3",
                    start: "top ",
                    end: "+=200",
                    scrub: 1,
                },
            });
        }
    },
});
gsap.set('.sec_establish_bg', {
    height: "100%",
    width: "100%",
    ease: "none",
    y: 100,
});
gsap.to('.sec_establish_bg', {
    height: "50%",
    width: "50%",
    ease: "none",
    y: 300,
    scrollTrigger: {
        trigger: '.sec_establish_bg',
        start: "top+=250px",
        end: "+=600px", 
        scrub: true, 
    }
});

// main background
const resizeDiv = document.querySelector('.layerd_1_bg');
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.layerd_1',
        start: "top top",
        end: "+=1500px",
        scrub: 2,
        toggleActions: "play reverse play reverse",
    }
});

tl.set(resizeDiv, { scale: 0.5, y: 100 });

tl.to(resizeDiv, {
    scale: 1,
    y: 300,
    duration: 2, 
}, "+=0");

tl.to(resizeDiv, {
    width: '100%',
    height: '200vh',
    y: 350,
    duration: 2, 
}, "+=0");

tl.to(resizeDiv, {
    width: '100%',
    height: '200vh',
    y: 400,
    duration: 2, 
}, "+=0");

tl.to(resizeDiv, {
    width: '100%',
    height: '200vh',
    scale: 0.5,
    y: 500,
    duration: 2, 
});


const resizeDiv2 = document.querySelector('.layerd_2_bg');
const tl_1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.layerd_2',
        start: "top top",
        end: "+=1500px", 
        scrub: 2,
        toggleActions: "play reverse play reverse",
    }
});

tl_1.set(resizeDiv2, { scale: 0.5, y: 100 });

tl_1.to(resizeDiv2, {
    scale: 1,
    y: 300,
}, "+=0"); 


tl_1.to(resizeDiv2, {
    width: '100%',
    height: '200vh',
    duration: 2, 
    y: 350
}, "+=0");

// 4️⃣ 특정 지점에서 y값 400으로 변경
tl_1.to(resizeDiv2, {
    width: '100%',
    height: '200vh',
    duration: 2, 
    y: 400,
}, "+=0");

// 5️⃣ 배경이 점점 작아짐 (scale: 0.5, y: 500)
tl_1.to(resizeDiv2, {
    width: '100%',
    height: '200vh',
    duration: 2, 
    scale: 0.5,
    y: 500,
});


const resizeDiv3 = document.querySelector('.layerd_3_bg');
const tl_3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.layerd_3',
        start: "top top",
        end: "+=1200px", // 전체 애니메이션 진행 길이
        scrub: 2,
        toggleActions: "play reverse play reverse",
    }
});

// 1️⃣ 초기 설정 (scale: 0.5, y: 100)
tl_3.set(resizeDiv3, { scale: 0.5, y: 100 });

// 2️⃣ `.layerd_1` 구간: 배경 커짐 (scale 1, y 300)
tl_3.to(resizeDiv3, {
    scale: 1,
    y: 300,
}, "+=0"); // 즉시 실행

// 3️⃣ `.layerd_1_text` 구간: y값 조정 (350)
tl_3.to(resizeDiv3, {
    width: '100%',
    height: '200vh',
    duration: 2, 
    y: 350
}, "+=0");

// 4️⃣ 특정 지점에서 y값 400으로 변경
tl_3.to(resizeDiv3, {
    width: '100%',
    height: '200vh',
    duration: 2, 
    // y: 600,
}, "+=0");


// reveal text

gsap.utils.toArray(".reveal").forEach((element) => {
    let word = element.innerText;
    element.innerHTML = `<span>${word}</span>`;
    
    gsap.fromTo(element.querySelector("span"), 
        { y: "100%", opacity: 0 }, 
        { y: "0%", opacity: 1, duration: 1, ease: "power2.out", 
            scrollTrigger: {
                trigger: '.layerd_1_text',
                start: "top 80%", 
                toggleActions: "play none none none"
            }
        }
    );
});