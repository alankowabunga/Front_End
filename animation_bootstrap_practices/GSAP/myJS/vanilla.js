var boxes = document.querySelectorAll(".box");

var containers = document.querySelectorAll(".container");

boxes.forEach((box) => {
    box.addEventListener("dragstart", (e) => {
        box.classList.add("dragging");
    });
});
boxes.forEach((box) => {
    box.addEventListener("dragend", () => {
        box.classList.remove("dragging");
    });
});

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        //預設是不能將元素放入其他元素的(禁止icon)，因此要將預設取消
        e.preventDefault();

        //同一時間只會有一個 box 被滑鼠拖移，找到拖移時會有的 .dragging 即可。
        const currentBox = document.querySelector(".dragging");
        container.appendChild(currentBox);

        /* 再來為了能達到 drop 在當前 box 的位置，將當前的 container、clientY當作判斷當前 hover 的元素 */
        var followingBox = findFollowingBox(container, e.clientY);

        console.log(followingBox); // 發現到若沒有在其他 box 上則為 undefined

        if (followingBox === undefined) {
            container.appendChild(currentBox);
        } else {
            container.insertBefore(currentBox, followingBox);
        }
    });
});
function findFollowingBox(container, y) {
    // 當前 dragover 的 container 中不是被拖移的 box ， 並將 node list 用 spread operator 轉成陣列。
    let undragBoxes = [...container.querySelectorAll(".box:not(.dragging)")];

    return undragBoxes.reduce(
        (offsetValue, candidateBox) => {
            var boxData = candidateBox.getBoundingClientRect();
            var offset = y - boxData.top - boxData.height / 2;
            /* console.log(offset) 數值是負的才會在 following box 之前，且在每個 box 距離鼠標為負數值當中，越接近 0 就越接近鼠標( 也就是負數值中最大的)。
        在
        */
            if (offset < 0 && offset > offsetValue.offset) {
                return { offset: offset, element: candidateBox }; //將element屬性值更新為當前 box
            } else {
                return offsetValue;
            }
        },
        { offset: Number.NEGATIVE_INFINITY }
    ).element; // 我們要的是迭代完所有 canditateBox 後 {offset:offset,element:candidateBox} 中的 element，並回傳
}
