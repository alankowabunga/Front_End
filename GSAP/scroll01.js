gsap.registerPlugin(ScrollTrigger);

gsap.to('.c',{scrollTrigger:{
    trigger:'.c',
    toggleActions:"restart pause resume none"
},
x:400,rotate:360,duration:2})

gsap.to('.b',{scrollTrigger:{
    trigger:'.b',
    scrub:2,
    pin:'.ghost',
    markers:true,
    start:"top 80%",
    end:"80% 30%"
},x:400,rotate:360,})

