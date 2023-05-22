//password drill
// Javascript alert() 函式用來彈出對話視窗
var password =123456;
var input;
var max_attempt =4;
var attempt_count=0; // 初始值設: 0
var out_limit=false; //設此 布林值 當while迴圈的條件，以此評斷是否跳出為迴圈
while(password!=input&&out_limit==false){
    attempt_count++; //增加一次嘗試次數
    if(attempt_count<=max_attempt){
        input=prompt("Enter your password")    
    }
    else{
        out_limit=true;
    }
}
if(out_limit){
    alert("Exceed attmpt limit")
}
else{
    alert("Login succeed")
}
