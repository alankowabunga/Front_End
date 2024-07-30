function echo(msg) {
    console.log(msg);
}
function add(n1,n2){
    console.log(n1+n2);
}
//Phase.1: export default echo;

//Phase.2: 若要同時輸出兩個資料，可利用物件(json格式)將兩個函式做包裝
export default{
    echo:echo,
    add:add //在物件中建立兩個方法，因為名稱相同也可以簡寫單次就好
};//輸出未指定名稱，因此在main.js引入時，可自訂名稱(lib)