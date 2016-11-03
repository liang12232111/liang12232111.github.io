//nav样式
$(".nav li a").eq(0).css({borderColor:"#fafafa",color:"#fafafa",})
//内容效果
$(".line").eq(0).css({height:161});
$(".line").eq(1).css({height:177});
$(".line").eq(2).css({height:173});
$("._content li img:nth-child(2n)").hide();
$("._content").hover(function(){
	$("._content li:has(img)").eq($(this).index()).children().first().toggle();
	$("._content li:has(img)").eq($(this).index()).children().last().toggle();
})
$("._content").mouseover(function(){
	$(this).children().eq(1).css("background","#CFDB00")
})
$("._content").mouseout(function(){
	$(this).children().eq(1).css("background","#CCCCCC")
})
//底部hover效果
$(".footer a img:nth-child(2n)").hide();
$(".footer a").hover(function(){
	$(this).children().first().toggle();
	$(this).children().last().toggle();
})