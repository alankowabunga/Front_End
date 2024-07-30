// 函式 function
// https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html?m=1
 function hello(name,age){
    document.write("Hello "+name+" and your age is   "+age);
 }

function add(num1,num2){
   document.write(num1+num2);
}

 hello("Alan","26");
 document.write("</br>")
 add(2,5)  // 此時是用呼叫將 7 寫出來，然而用另一個 return 方法可以使操作更有彈性
 document.write("<hr>")

 // 函式中跑完程式碼使用回傳 return ，可繼續進行操作
 function divide(n1,n2){
   return n1/n2;
 }
document.write(divide(6,3)*3-1)
document.write("<hr>")

function minus(number1,number2){
   document.write(number1-number2);
   document.write("</br>")
   return 100
}
value = minus(5,4)
document.write(value)
document.write("<hr>")

// if...else if...else 
//符號 && 代表兩個條件要同時成立，|| 則兩個條件只需1個成立
// 驚嘆號 ! 代表否定
var score=prompt("Enter your score:");
if(score==100){
   document.write("You're awesome");
}
else if(score>=80){
   document.write("Not bad");
}
else{
   document.write("Don't stop trying")
}
document.write("<hr>")
//設計一函式，輸入三個數並判斷最大值者
document.write("</br>使用if條件式判斷最大值，但其實用Math.max(n1,n2,n3)即可</br>")
function max_num(){
   n1=prompt("Enter an integer number:")
   n2=prompt("Enter an integer number:")
   n3=prompt("Enter an integer number:")
   if(n1>=n2&&n1>=n3){
      document.write("The largest number is n1");
      return n1
   }
   else if(n2>=n1&&n2>=n3){
      document.write("The largest number is n2");
      return n2
   }
   else {
      document.write("The largest number is n3");
      return n3
   }
}
value = max_num()
document.write("</br>The value is: ",value)

// 物件 object, 使用方式為: obj_name.key_name 物件名稱.key名稱。
// 其內容資料概念有點類似字典，為 key:value 鍵值對。
// 物件名稱[索引值].key名稱


// while 迴圈
document.write("</br>while loop");
var i=0;
while(i<=3){
   document.write(i);
   document.write("</br>");
   i+=1
}
document.write("<hr> do{} then while()</br>")

var j=2;
do{
   document.write(j);
   document.write("</br>");
   j++;
}while(j<=5)

// for 迴圈: 以上面第一個 while 迴圈為例
// 有三個要素；1. 要判斷的變數，2. 條件式， 3. 操作
// 1. i = 0, 2. i<3 , 3. i++
for(var i=0;i<=3,i++;){
   document.write(i)
   document.write("</br>")
}

document.write("<hr>")

var pal=["a","b","c"];
for(var q=0;q<pal.length;q++){
   document.write(pal[q]);
   document.write("</br>")
}