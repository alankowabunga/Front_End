var phrase1="<h1>Alan love Wen</h1>"
var phrase2="There's no doubt about it."
document.write(phrase1+phrase2);
document.write("<br/>");

//字串變數.length 可得知字數
document.write("The number of letters in two sentences =");
document.write(phrase1.length+phrase2.length);
document.write("<br/>");

// 字串變數.toUpperCase(),字串變數.toLowerCase()
var a="toUpperCase"
var b="toLowerCase"
document.write("a=toUpperCase,b=toLowerCase")
document.write("<br/>");
document.write(a.toUpperCase());
document.write("<br/>");
document.write(b.toLowerCase());
document.write("<hr/>");

// 變數.charAt(數字):讀取字串中第幾位, 變數.indexOf(字元):找出字元在第幾位
document.write("a.charAt(3),讀取第四位自元= ",a.charAt(3));
document.write("<br/>");
document.write("尋找 L 在字串中第幾位 ", b.indexOf("L"));
document.write("<hr/>");

//變數.substring(2,5): 讀取索引值2-5的字元
document.write("b.substring(3,7)= ",b.substring(3,7));
document.write("<hr/>");
var a=3
var b=5
var sum=a+b
document.write("The outcome of 3+5 = ",sum);
document.write("<hr/>");

//數字運算方法 parseInt() , parseFloat()
// Math.abs(),Math.max(),Math.min(),Math.round()四捨五入,Math.pow(2,3)---2的3次方
//製作計算機:利用 prompt 讓使用者輸入
var myName = prompt("Enter your name:");
var myAge = prompt("Enter your age:")
document.write("Hello "+myName);
document.write("<br/>");
document.write("Your age is: "+ myAge);
document.write("<br/>");    
var num1=prompt("Enter an integer number:");
var num2=prompt("Enter another integer number:");
parseInt(num1);
parseInt(num2);
document.write("The sum of these two numbers is:　",num1+num2);