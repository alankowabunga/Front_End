
gsap.registerPlugin(Flip)


var box = document.querySelector('.box')
var aContainer = document.querySelector('.originalContainer');
var bContainer = document.querySelector('.newContainer');
var btn = document.querySelector('button');
btn.addEventListener('click',btnClick);

function btnClick(){

    const state = Flip.getState(box);

    // console.log(box.parentNode==aContainer) 檢查是否成功取得 DOM 節點
    ((box.parentNode==aContainer)? bContainer:aContainer).prepend(box);

    Flip.from(state,{duration:2,ease:"power1.inOut",scale:true})
    // 因為 new containter 有 scale 屬性，box在轉換的時候也會受到影像造成動畫不順，此時可以增加 scale:true 解決此問題!
}

