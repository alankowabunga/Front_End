// 二維陣列 & 巢狀迴圈
// keypoint:迴圈可以讀取陣列每一則資料，但相對的二維烈也會需要兩層的迴圈，也就是巢狀迴圈
var array=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
]
// array[0]=[1,2,3]  ， array[2][1]= 8
// 使用巢狀迴圈取出每項資料
for(i=0;i<array.length;i++){
    for(j=0;j<array[i].length;j++){
        document.write(array[i][j]);
    }
    document.write("</br>")
}
