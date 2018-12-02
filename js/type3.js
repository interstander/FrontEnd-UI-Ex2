$(document).ready(function(){
//Mouse Over Event 를 통해서
//setInterval()를 제어한다.
    var fading;
    $("#slider ul li.item:gt(0)").hide();

    function start(){
        fading =setInterval(function(){
            $("#slider ul li.item:first").fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo("#slider ul");
        },2000);
    };
    function stop(){
        clearInterval(fading);
    }

    start();
    

    $("#slider").hover(function(){
        //handlerIn
        console.log("Mouse In");
        stop();
    }, function(){
        //handlerOut
        console.log("Mouse Out");
        start();
    });
});