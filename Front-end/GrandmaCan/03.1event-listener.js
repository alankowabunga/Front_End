//event listener 事件監聽器
// https://www.w3schools.com/js/js_htmldom_events.asp
function handle_click(element){
    // alert("You won't regret it!");
    console.log(element);
    //innerText 渲染網頁
    element.innerText="Ride ain't over yet!";
    element.style.color="red";
}