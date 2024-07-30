
gsap.registerPlugin(Flip);

// 陣列長度為 4 => 將不斷增的數字除以 4 取餘數，即可讓數字不超過 4 且不斷循環，拿來幫索引值。 
let layouts = ['final', 'plain','column','grid'],
container = document.querySelector('.container'),
index = 0; //初始索引值為 0

function nextState() {
    console.log("執行 next state 函式")

    // 儲存當前狀態的陣列
    const state = Flip.getState('.letter,.for,.gsap',{props:"color,backgorundColor,fontSize,textShadow",simple:true});

    //邏輯順序: 1. 先移除當前的 class屬性。2. 將索引值+1 
    container.classList.remove(layouts[index]);// remove old class
    index = (index + 1) % layouts.length; // increment (loop back to the start if at the end)
    container.classList.add(layouts[index]); // 下一個 layout


    Flip.from(state, { // animate from the previous state
        absolute: true,
        scale:true,
        duration: .6,
        ease: 'power2.inOut',
        simple:true,
        stagger:0.05,
        spin:index==0,
        onEnter:(elements,animation)=>gsap.fromTo(elements,{opacity:0},{opacity:1,delay:animation.duration()-0.1}),
        onLeave:elements => gsap.to(elements,{opacity:0})

    });

    // 設定回到主畫面停 3.5秒，其他間隔 1.5秒
    gsap.delayedCall((index == 0) ? 3.5 : 2, nextState);
}

gsap.delayedCall(2, nextState); //第一次呼叫觸發動畫