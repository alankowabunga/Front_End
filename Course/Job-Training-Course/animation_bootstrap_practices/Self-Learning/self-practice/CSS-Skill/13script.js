let i =0;
let placeholder="";
const txt="example@domain.com";
const speed=120;

function type(){
    // charAt 可以用來取得字串中特定位置的字元: str.charAt(index
    placeholder += txt.charAt(i);

    document.getElementById("email").setAttribute( //利用 element.setAttribute(attribute, value)，新增 placeholder 屬性和其內容。
        "placeholder",placeholder);
        i++;

        setTimeout(type,speed); //設定等候時間並執行函式/程式碼 setTimeout (要執行的代碼,等待的毫秒數)
}


type();