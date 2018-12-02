//slider이라는 id속성을 가진 element를 선택
//jQuert
//$("silder")
//$(".slider")
//javascript
//document.getElementById("slider")
//documentgetElemetsByClassName("slider")
//

$(document).ready(function(){
    $("#slider ul li.item:gt(0)").hide();

    //메소드 체이닝
    setInterval(function(){
        $("#slider ul li.item:first").fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo("#slider ul");
    },2000);
});