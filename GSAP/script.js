
// timeline
const timeline = gsap.timeline({defalut:{duration:1}});
timeline
    .from('.header',{ y:-300,ease:"bounce.out"})
    .from('.link',{ opacity:0,stagger:.5})
    .from('.right',{x:'-100vw',duration:1,ese:'power2.out'},1)
    .from('.left',{x:'-30vw',duration:.8,ease:"sine.out"},'<.5')
    .to('.footer',{duration:1.5,y:"0",ease:"elastic.out"})
    .from('.box',{opacity:0,scale:.6,duration:1,stagger:{from:'random',
    each:0.1}},'<')
    .fromTo('.button',{scale:0,rotate:720,opacity:0},{scale:1,rotate:0,opacity:1},'<.5')

    // 倒轉
var button = document.querySelector('.button');
button.addEventListener('click',()=>{
    timeline.reverse();
})

// 框框會消失
document.querySelectorAll('.box').forEach(box=>{
    box.addEventListener('click',()=>{
        gsap.to('.box',{duration:3,stagger:.1,y:-100,opacity:0,ease:"elastic"})
    })
})