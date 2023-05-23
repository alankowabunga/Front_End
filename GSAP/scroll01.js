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
    start:"top 60%",
    end:"80% 30%",
    onEnter:()=>{console.log("Enter")},
    onLeave:()=>console.log("Leave"),
    onEnterBack:()=>console.log("Enter Back"),
    onLeaveBack:()=>console.log("Leave Back"),
    onToggle:(self)=>console.log("Toggle",self.isActive),
    toggleClass:"active"
},x:400,rotate:360,})

