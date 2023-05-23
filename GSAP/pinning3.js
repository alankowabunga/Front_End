



gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ duration: 2, ease: "none" });

// timeline sequence
const tl = gsap.timeline();
tl
    .from(".yellow", { xPercent: -100 })
    .from(".red", { xPercent: 100 })
    .from(".green", { yPercent: -100 });



// 單獨建立 ScrolTrigger
// ScrollTrigger.create({
//     animation:tl,
//     trigger:'#container',
//     start:"top top",
//     end:"+=4000",
//     scrub:true,
//     markers:true,
//     pin:true,
//     aniticipatePin:1
// });

