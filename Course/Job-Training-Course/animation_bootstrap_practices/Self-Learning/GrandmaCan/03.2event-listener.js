// html檔
// <button id="btn">Your Ride</button>
// <script src="03.2event-listener.js"></script>
// 此專案運用的事件: click,mouseover,mouseout，可參考下面連結。
// https://www.w3schools.com/js/js_htmldom_events.asp


//第二種利用 Id方法: var 變數 = document.getElementById("ID屬性");
var btn=document.getElementById("btn");
//取得按鈕的元素後，即可增加事件監聽器: btn.addEventListener("click",function(){})
btn.addEventListener("click",function(){ // 'click':滑鼠點擊
    // alert("Ride ain't over yet!");
    this.innerText="Punch it";
    this.style.color="red";
})

// 使用 Id 方法，當'mouseover 滑鼠在圖片時'會更改新圖片, 'mouseout 滑鼠移出'時恢復原照片。
// <img id="img" src="lexus.jpeg" width="300"/>
var img=document.getElementById("img")
img.addEventListener("mouseover",function(){
    this.src="benz.jpg";
})

img.addEventListener("mouseout",function(){
    this.src="lexus.jpeg";
})