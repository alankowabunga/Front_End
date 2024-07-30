// 第二種利用 Id方法: var 變數 = document.getElementById("ID屬性") 
// 利用 元素.value 方法讀取元素內容。eg. title.value
// 發文時為了要自動新增 html 格式和新內容，利用 元素.innerHTML 取得元素底下的 HTML格式。

var title=document.getElementById("title");
var content=document.getElementById("content");
var btn=document.getElementById("btn");
var list=document.getElementById("list");

// 模板語法:為了方便在 js 檔寫 html，可使用符號 `` 可將要寫的html包在裡面
// 另外搭配 ${} 符號可在``中的 html 又在加入 js 內容，有點三明治概念。
btn.addEventListener("click",function(){
    list.innerHTML=list.innerHTML+`
    <div class="article">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
    </div> 
    `;// 有點將變數帶入模板的概念

//最後為了使發文後，輸入框框能還原空白，因此設定其內容為空
title.value="";
content.value="";
})