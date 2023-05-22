// gsap.from('.header',{duration:2.5,ease: "bounce.out", y: -500});
// gsap.from('.link',{delay:2,duration:2,opacity:0,stagger:.5});
// gsap.from('.right',{duration:2,delay:1,ease:'power2.out',x:'-100vw'});
// gsap.from('.left',{delay:1.5,duration:1.5,ease: "sine.out", x: -500})
// gsap.to('.footer',{delay:2.3,duration:2,ease: "elastic.out(1, 0.3)",y:-5})
// gsap.fromTo('.button',{scale:0,rotate:720},{duration:1.5,delay:3,scale:1,rotate:0});

// timeline
const timeline = gsap.timeline({defalut:{duration:1}});
timeline
    .from('.header',{ y:-300,ease:"bounce.out"})
    .from('.link',{ opacity:0,stagger:.5})
    .from('.right',{x:'-100vw',duration:1,ese:'power2.out'},1)
    .from('.left',{x:'-30vw',duration:.8,ease:"sine.out"},'<.5')
    .to('.footer',{duration:1.5,y:"0",ease:"elastic.out"})
    .from('.box',{opacity:0,scale:.6,duration:1,stagger:.1},'<')
    .fromTo('.button',{scale:0,rotate:720,opacity:0},{scale:1,rotate:0,opacity:1},'<.5')

var button = document.querySelector('.button');
button.addEventListener('click',()=>{
    timeline.reverse();
})

document.querySelectorAll('.box').forEach(box=>{
    box.addEventListener('click',()=>{
        gsap.to('.box',{duration:3,stagger:.1,y:-100,opacity:0,ease:"elastic"})
    })
})