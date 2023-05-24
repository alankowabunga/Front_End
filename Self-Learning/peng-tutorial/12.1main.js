//import 資料 from "模組檔案路徑"
//輸出的物件未指定名稱，因此在main.js引入時，可自訂名稱(lib)
import lib from"./lib.js";
lib.echo("Hello");
lib.add(3,5);   //因入的是物件資料，引此可使用物件底下的方法


//Phase.1:
// let name = "abc";
// echo(name);  echo()函式在此檔案未宣告，因此要在 libjs 檔 export default echo;




//console.log(lib);
//lib為物件資料，包含add() & echo() 函式:
// add: ƒ add(n1,n2)
// echo: ƒ echo(msg)