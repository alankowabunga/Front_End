
gsap.registerPlugin(Flip);

// 用 Array.from() 方法將 nodeList 轉換成一般 陣列
var boxes = Array.from(document.querySelectorAll(".square"));
var container1 = document.querySelector('.container1');
var container2 = document.querySelector('.container2');

// console.log(gsap.utils.shuffle(boxes))

document.querySelector('.swap-btn').addEventListener('click', () => {

    const state = Flip.getState('.orange,.green',
        { props: "backgroundColor,color" }
    );
    // console.log(boxes[0].parentNode==container1);

    var newContainer = (boxes[0].parentNode == container1) ? container2 : container1;

    gsap.utils.shuffle(boxes).forEach(box => newContainer.appendChild(box));

    Flip.from(state, {
        scale: true,
        duration: 1,
        ease: 'power1.inOut',
        absolute: true,
        stagger: 0.1,
        spin:-1,
        toggleClass:"flipping"
    })
})


var small = document.querySelector('.thumbNail'), big = document.querySelector('.full-size');

document.querySelector('.size-btn').addEventListener('click', () => {

    // 在變換之前就要把狀態儲存起來
    const state = Flip.getState('.thumbNail,.full-size');

    small.classList.toggle("inActive");
    big.classList.toggle("inActive");

    // 在 console 顯示 class: inActive 狀態
    console.log("small inActive:", small.classList.contains("inActive"), "big inActive:", big.classList.contains
        ("inActive"));

    if (small.classList.contains('inActive')) {

        console.log('grow')

        Flip.from(state, {
            targets: big,
            duration: 1.5,
            ease: "power1.inOut",
            absolute: true
        })
    } else {

        console.log('shrink');

        Flip.from(state, {
            target: '.thumbNail',
            duration: 1.5,
            ease: "power1.inOut",
            absolute:true
        })
    }

})