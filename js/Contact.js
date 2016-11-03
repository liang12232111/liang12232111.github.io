//nav样式
$(".nav li a").eq(5).css({borderColor:"#fafafa",color:"#fafafa",})
//底部hover效果
$(".footer a img:nth-child(2n)").hide();
$(".footer a").hover(function(){
	$(this).children().first().toggle();
	$(this).children().last().toggle();
})