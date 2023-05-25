

gsap.registerPlugin(Flip);

var btn = document.querySelector('.fit-btn');

gsap.to('.bigBox',{rotation:25})
gsap.to('.target',{rotation:-15})

//接受兩個 target，會把第一個 target1 當作容器、將第二個 target2 放入。

btn.addEventListener('click',()=>{

    Flip.fit('.bigBox','.target',{
        scale:true,
        duration:2,
        ease:'power1.inOut',
        fitChild:'.child01'
    })
})