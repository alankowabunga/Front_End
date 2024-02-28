/*
1. 利用 getBoundingClientRect() 方法找到 anchor 點(rick morty 的中心點)、並藉由 e.clientX、e.clientY 找到當前滑鼠座標，
2. 利用 Math.atan2() 方法找到 x , y 和 Anchor點 X 軸的 radian 弧度值。
3. 再將 radian 轉成 degree percentage 給 css tranform:rotate使用。

*/
$(function () {
    $(document).on('mousemove',(e)=>{
        
        var x = e.clientX;
        var y = e.clientY;
        
        var anchor = $("#anchor");
        var anchorX = anchor.offset().left + anchor.width()/2;
        var anchorY = anchor.offset().top + anchor.height()/2;
        
        var degree = (Math.atan2(y-anchorY,x-anchorX)* (180 / Math.PI))+90
        
        $.each($('.eyeball'), function (indexInArray, eye) { 
            // $('.eyeball').css('transform-origin', `${anchorX} ${anchorY}`)
            $(eye).css('transform',`rotate(${degree}deg)`)
        });

        //ufo
        console.log(e.clientX)
        $("#ufo").offset({top:`${y-110}`,left:`${x-125}`})
    })
});
