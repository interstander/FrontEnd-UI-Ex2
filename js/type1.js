$(document).ready(function(){
    $items = $("#slider ul li.item");

    //setTimeout(); //시간 지연
    //setInterval(); //시간 주기 반복

    var currentIndex = 1;
    var imgCount = $items.length;
    //var revers = 1;

    setInterval(function(){
        if(currentIndex >= imgCount){
            currentIndex=1;
           // revers*=(-1);
        }
        //1. 모든 이미지에 active클래스를 제거한다.
        $items.removeClass('active');
        $items.eq(currentIndex++).addClass('active');
        //currentIndex=currentIndex+revers;

    },1000);
});