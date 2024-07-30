// QA drill
// 建立一個陣列物件

var questions=[
    {
        prompt:"Q1",
        answer:"A1",
    },
    {
        prompt:"Q2",
        answer:"A2",
    },
    {
        prompt:"Q3",
        answer:"A3",
    }
]
// 要計分(設變數)，判斷做題次數(條件式)，判斷答案對錯(if+變數=物件名稱.屬性名稱)
var score=0; // 初始正確次數為零
// for 迴圈的條件式用分號隔開
for(i=0;i<questions.length;i++){
    // 宣告使用者輸入的變數
    var input=prompt(questions[i].prompt);// 即 prompt(每題的題目) 給使用者輸入，並將輸入內容放入變數 input
    if(input==questions[i].answer){
        score++ //答對次數加一
        alert("Correct!!");
    }
    else{
        alert("Incorrect~~")
    }
}
alert("Your score is:"+score+"points.")