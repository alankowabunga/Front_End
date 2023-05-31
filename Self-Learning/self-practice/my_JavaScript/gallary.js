/*

[螢幕左邊是 0%、 右邊是-100%] -> object position 的值為 0-100， 因此要加 100 來 offset。

#找到滑鼠拖移的距離
1. 先找到點擊時(on mouse down)的座標，放入 dataset.mouse
DownAt 裡儲存(字串型態)。
2. 拖移的距離(mouseDelta) =  點擊時的座標(dataset.mouse
    DownAt) - 當前滑鼠座標 e.clientX。


#發現 1 -> 
滑鼠拖移一半的視窗即可拉完全部的圖片:
1. 找出視窗一半的寬度
2. 移動的相對比例(ratio)  = 拖移距離(mouseDelta) / 一半的視窗寬度 
3. 將 ratio * 100 就會變成 percentage，就可以拿去給 transform:translate 操作使用。

#發現 2 -> 
如果圖片被拖移到，就無法觸發 on mouse up 將 dataset.mouse
DownAt value 設回 0，導致喪失拖移效果，因此設定 e.preventDefault()

#發現 3 ->
當滑鼠嘗試第二次拖拉時，畫面會回到第一次拖移的位置，這是因為我們只儲存第一次的絕對位置，因此我們須再添增 dataset.prevPercentage 來儲存上一次的位置(百分比)，加上當前的百分比就是新的百分比。
nextPercentage = dataset.prevPercentage + percentage

#發現 4 ->
左右都可以無限的延伸，因此我們要想辦法設定邊界。
決定我們新移動的百分比是 nextPercentage，我們可以利用 Math.max、Math.min()函式將百分比控制在 0-100之間，否則就回傳 0 or 100

#發現 5 -> parallax effect
利用 [object position : x 軸 , y 軸]，去調整圖片在 X 軸的相對位置，產生圖片平移的視覺效果。
*/
var images = document.querySelectorAll("img");
var track = document.querySelector(".image-track");
var data = track.dataset.mouseDownAt;
var prevPercentage = track.dataset.prevPercentage;
var percentage, nextPercentage;
// data 、 prevPercentage(字串)、percentage、nextPercentage(數值)

window.onmousedown = (e) => {
    e.preventDefault();

    data = e.clientX; //   存入 dataset (字串型態)
};

// dataset初始為 0，是為了在事件做是否點擊的判斷，為點擊錢是處使值 0 ，此時直接 return 跳出事件、否則還沒點擊就會直接跟著滑鼠移動。
window.onmousemove = (e) => {
    e.preventDefault();

    // 判斷未點擊就不要執行此事件
    if (data == "0") {
        return;
    }

    // 右拉: 負、 左拉: 正
    const mouseDelta = e.clientX - parseFloat(data),
        maxDelta = window.innerWidth / 2;

    (percentage = (mouseDelta / maxDelta) * 100),
        (nextPercentageUnbound = parseFloat(prevPercentage) + percentage),
        (nextPercentage = Math.max(Math.min(0, nextPercentageUnbound), -100));
    /*
        1. percentage: 用來計算當下滑鼠移動的距離
        2. prevPercentage: 在 mouse up 事件將 percentage賦值給 prevPercentage 儲存，給下一次能從相同位置繼續移動。
        3. nextPercentageUnbound:將上一個動作儲存的距離 prevPercentage + 當前移動的距離 percentage = 新的距離 nextPercentage
        4. nextPercentage:增加左右邊界，最左為 0 %(.track 位移 0)、 最右為 -100% (.track 左移 100%)

    */

    // 確保移動的百分比在 0 - 100之間

    track.style.transform = `translate(${nextPercentage}%,-50%)`;

    images.forEach((img) => {
        img.style.objectPosition = `${nextPercentage + 100}% 50%`;
        img.animate(
            {
                objectPosition: `${100 + nextPercentage}% 50%`,
            },
            { duration: 1200, fill: "forwards" }
        );
    });

    // 添增動畫，讓 parallax effect 更流暢
    track.animate(
        {
            transform: `translate(${nextPercentage}%,-50%)`,
        },
        { duration: 1200, fill: "forwards" }
    );
};
window.onmouseup = (e) => {
    e.preventDefault();

    data = "0";

    // prevPercentage 是 dataset自定義的字串型態，而nextPercentage是我們換穿來的數值型態。我們可以將數值型態直接賦值給 dataset，它會自己轉換成字串型態。
    prevPercentage = nextPercentage;
    console.log("滑鼠 up 後的 prevPercentage:", prevPercentage);
};
