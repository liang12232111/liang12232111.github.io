//nav样式
$(".nav li a").eq(4).css({borderColor:"#fafafa",color:"#fafafa",})
//底部hover效果
$(".footer a img:nth-child(2n)").hide();
$(".footer a").hover(function(){
	$(this).children().first().toggle();
	$(this).children().last().toggle();
})
var sTop = document.documentElement.scrollTop || document.body.scrollTop;
// function gundong(){
// 	var timer = setInterval(function(){
// 		if(document.documentElement.scrollTop){
// 			document.documentElement.scrollTop = sTop;
// 		}else{
// 			document.body.scrollTop = sTop;
// 		}
// 		console.log(4)
// 		clearInterval(timer);
// 	},1000)
// }
function gundong(){
var start = document.documentElement.scrollTop + document.body.scrollTop;
var end = sTop;
var change = end - start;
var startStep = 0;
var endStep = 2;
if (timer) {
    clearInterval(timer);
}
var timer = setInterval(function(){
	startStep ++;
	if(startStep >= endStep){
		clearInterval(timer)
	}
	if(document.documentElement.scrollTop){
		document.documentElement.scrollTop = Tween.Elastic.easeOut(startStep,start,change,endStep)
	} else{
		document.body.scrollTop = Tween.Elastic.easeOut(startStep,start,change,endStep)
		}
},1000)
		}

window.onmousewheel = function(ev){
	var e = ev || window.event;
	e.preventDefault();
	if(e.wheelDelta < 0){
		sTop += 800;
		if(sTop>$("body").height()){
			sTop = $("body").height();
		}
		gundong();
		console.log("向下",e.wheelDelta,sTop);
	}else{
		sTop -= 800;
		if(sTop<0){
			sTop = 0;
		}
		gundong();
		console.log("向上",e.wheelDelta);
	}
}
