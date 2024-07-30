


gsap.registerPlugin(ScrollTrigger);

// 以單獨 .yellow section 為例
ScrollTrigger.create({
    trigger:'.yellow',
    markers:true,
    start:"top top",
    end:"+=300px",
    pin:true,
    pinSpacing:false   
})