// class & 建立實體物件
// 模擬建立手機規格資料
// 參考網上資料:https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html?m=1

var phone1={
    brand:"sony",
    year:2021,
    is_waterproof:false,
    phone_age:function(){ //物件屬性也可以是函式
        return 2023 - this.year; //使用 '物件名稱.屬性名稱' 取得資料
    }
}
// 若有大量資料要建立會耗費大量時間，因此使用 class 操作
//class 常與構建子 constructor(){} ,建立物件 var ### = new Object_name() 兩者搭配使用。
// 函式中使用 this 代表本函式，可用 'this.屬性名稱'  來操作。

// 定義初始化函式
class Phone{
    //  創建 '建構子'和其屬性
    constructor(brand,year,is_waterproof){
        this.brand=brand;
        this.year=year;
        this.is_waterproof=is_waterproof;
    }
    phone_age(){
        return 2023- this.year;
    }
}
// 設定好 Phone 類別函式，再來要建立新的手機則只需帶入參數
// 建立新 obj 方法為: var ### = new obj_name(參數)
var phone2= new Phone("Apple",2018,true);
var phone3= new Phone("samsung",2020,true);

// 嘗試讀取資料
document.write(phone2.year);
document.write("</br>");
document.write(phone2.is_waterproof);
document.write("</br>")
document.write(phone2.phone_age()); // 呼叫函式: 函式名稱()
document.write("</br>");
document.write(phone3.phone_age());