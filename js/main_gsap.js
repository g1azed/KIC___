  // 스크롤따라 img 커지면서 올라오기
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0);
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".sec_establish_bg", { width: '85vw', height: '85vh', y: 200});
  gsap.to('.sec_establish_bg',{
      height: '100%',
      width: '100%',
      ease: 'none',
      y: 0,
      scrollTrigger: {
          trigger: '.sec_esta_text',
          start: "center top",
          end: "+=100",
          scrub: 1,
          color: '#ffffff',
          // markers: {
          //     startColor: 'yellow',
          //     endColor: 'black',
          //     fontSize: '4rem',
          //     indent: 200
          // },
      },
  })
  // gsap.set(".t-black", {clipPath: "inset(0 0 0)",});
  // gsap.to('.t-black',{
  //     clipPath: "inset(0 0 100%)",
  //     ease: 'none',
  //     scrollTrigger: {
  //         trigger: '.scrolling_img_Wrap',
  //         start: 'top 31.5%',
  //         end: "+=100",
  //         scrub: 1,
  //     },
  // })

  /* 섹션 레이어드 */