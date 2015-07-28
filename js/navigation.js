window.onload = function(){
    $(".pos ul li").hover(function(){$(this).css({"background":"#f7f7f7"});// Opera Fix
    var index=$(this).index();
    $(".shoes ul li:eq("+index+")").css({"color":"#fff"});
},function(){
    $(this).css({"background":"#fff"});
    var index=$(this).index();
    $(".shoes ul li:eq("+index+")").css({"color":"#000"});
});
}