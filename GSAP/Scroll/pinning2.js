

gsap.registerPlugin(ScrollTrigger);

// 找到每個 section屬性，增加 ScrollTrigger 
// gsap.utils.toArray(".panel").forEach((panel)=>{
//     ScrollTrigger.create({
//         trigger:section,
//         markers:true,
//         pin:true,
//         pinSpacing:false
//     });
// });

ScrollTrigger.create({
    trigger:".yellow",
    pin:true,
    pinSpacing:false,
    markers:true,
    top:"top top",
    end:"+=300%"
})
