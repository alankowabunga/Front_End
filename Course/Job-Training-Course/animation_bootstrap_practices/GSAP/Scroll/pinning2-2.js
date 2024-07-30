

gsap.registerPlugin(ScrollTrigger);

// 找到每個 .panel 屬性，增加 ScrollTrigger 
gsap.utils.toArray(".panel").forEach((panel)=>{
    ScrollTrigger.create({
        trigger:panel,
        pin:true,
        pinSpacing:false,
        markers:true,
        top:"top top",
        end:"+=300%"
    });
});
