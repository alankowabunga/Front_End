



gsap.registerPlugin(ScrollTrigger);

// 找到每個 section屬性，增加 ScrollTrigger 
gsap.utils.toArray(".section").forEach((section,i)=>{
    ScrollTrigger.create({
        trigger:section,
        markers:true,
        pin:true,
        pinSpacing:false
    });
});
