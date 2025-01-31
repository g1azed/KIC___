

// 지배구조
const resizeDiv = document.querySelector('.layerd_1_bg');
gsap.set(resizeDiv, {
    scale:0.5,
    y: 100,
    scrollTrigger: {
        trigger: '.main_3',
        start: "top top",
        end: "+=10px", 
        // toggleActions: "play reverse play reverse",
        scrub: 1, 
    }
});
// 1. bg 커짐
gsap.to(resizeDiv, {
    scale: 1,
    y: 400,
    scrollTrigger: {
        trigger: '.layerd_1',
        start: "top top",
        end: "+=400px", 
        // toggleActions: "play reverse play reverse",
        scrub: 1, 
    }
});
gsap.set(resizeDiv, {  
    scale: 1,
    y: 400,
    scrollTrigger: {
        trigger: '.layerd_1_text',
    }
})
//  2. bg 작아짐
gsap.to(resizeDiv, {  
    scale: 1,
    y: 500,
    scrollTrigger: {
        markers: true,
        trigger: resizeDiv,
        start: "top+=500px center",
        end: "+=1px", 
        scrub: 1, 
    }
})
gsap.to(resizeDiv, {
    scale:0.5,
    y: 1000,
    scrollTrigger: {
        trigger: resizeDiv,
        start: "top+=550px",
        end: "+=800px", 
        scrub: true, 
    }
});


///////////////////////////////////////////////////

// 지배구조
const resizeDiv = document.querySelector('.layerd_1_bg');
gsap.set(resizeDiv, {
    scale:0.5,
    y: 100,
    scrollTrigger: {
        trigger: '.main_3',
        start: "top top",
        end: "+=10px", 
        toggleActions: "play reverse play reverse",
        scrub: 1, 
    }
});
// 1. bg 커짐
gsap.to(resizeDiv, {
    scale: 1,
    y: 300,
    scrollTrigger: {
        trigger: '.layerd_1',
        start: "top top",
        end: "+=300px", 
        // toggleActions: "play reverse play reverse",
        scrub: 1, 
    }
});
gsap.set(resizeDiv, {  
    scale: 1,
    y: 350,
    scrollTrigger: {
        markers: true,
        trigger: '.layerd_1_text',
    }
})

//  2. bg 작아짐
gsap.to(resizeDiv, {  
    scale: 1,
    y: 400,
    scrollTrigger: {
        markers: true,
        trigger: resizeDiv,
        start: "top+=300px center",
        end: "+=1px", 
        scrub: 1, 
    }
})
gsap.to(resizeDiv, {
    scale:0.5,
    y: 500,
    scrollTrigger: {
        trigger: resizeDiv,
        start: "top+=350px",
        end: "+=800px", 
        scrub: true, 
    }
});









