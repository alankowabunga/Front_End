
gsap.registerPlugin(Flip);

// 陣列長度為 4 => 將不斷增的數字除以 4 取餘數，即可讓數字不超過 4 且不斷循環，拿來幫索引值。 
const layouts = ['final', 'plain', 'column', 'grid'];
var container = document.querySelector('.container');
let index = 0; //初始索引值為 0

function nextState() {

    // 儲存當前狀態的陣列
    const state = Flip.getState('.f,.l,.i,.p,.for,.gsap');

    //邏輯順序: 1. 先移除當前的 class屬性。2. 將索引值+1 
    container.classList.remove(layouts[index]);
    index = (index + 1) % layouts.length;
    container.classList.add(layouts[index]); // 下一個 layout


    Flip.from(state, { // animate from the previous state
        duration: 2,
        ease: 'power1.inOut',
        absolute: true,
        onEnter:(elements,animation)=>gsap.fromTo(elements,{opacity:0},{opacity:1,animation,duration:1}),
        onLeave:elements => gsap.to(elements,{opacity:0,duration:1})

    });

    // 設定回到主畫面停 3.5秒，其他間隔 1.5秒
    gsap.delayedCall((index == 0) ? 3.5 : 1.5, nextState);
}

gsap.delayedCall(2, nextState); //第一次呼叫觸發動畫