//nav样式
$(".nav li a").eq(2).css({borderColor:"#fafafa",color:"#fafafa",})
//底部hover效果
$(".footer a img:nth-child(2n)").hide();
$(".footer a").hover(function(){
	$(this).children().first().toggle();
	$(this).children().last().toggle();
})

//轮播
var aImg = document.querySelectorAll(".wrap1 img");
var aBtn = document.querySelectorAll(".btn div")
var a = 0;
var timer = 0;
aImg[0].style.display = "block";
aBtn[0].style.background = "#cfdb00";
for (var i=0;i<aBtn.length;i++) {
	aBtn[i].index = i;
	aBtn[i].onclick = function(){
		stop();
		for (var i=0;i<aBtn.length;i++) {
			aBtn[i].style.background = "";
			aImg[i].style.display = "none";
		}
		this.style.background = "#cfdb00";
		aImg[this.index].style.display = "block";
		a = this.index;
		move();
	}
}
move();
function move(){
	timer = setInterval(function(){
		a ++;
		if(a>2){
			a=0;
		}
		for (var i=0;i<aBtn.length;i++) {
			aBtn[i].style.background = "";
			aImg[i].style.display = "none";
		}
		aBtn[a].style.background = "#cfdb00";
		aImg[a].style.display = "block";
	},4000)
}
function stop(){
	clearInterval(timer);
}


//瀑布流
var srcArr = ["1-150Z1101T5U8.jpg","1-150Z1102Z4209.jpg","1-150Z1133Q94S.jpg","1-150Z1134JM27.jpg","1-150Z1135I1I6.jpg","1-150Z1135TX03.jpg","1-150Z1140A5516.jpg","1-150Z1140Q53C.jpg","1-150Z1140Z0612.jpg","1-150Z1141QH22.jpg","1-150Z1103204a4.jpg","1-150Z1103315305.jpg","1-150Z110342W02.jpg","1-150Z110411A47.jpg","1-150Z1134304C6.jpg","1-150Z113403C95.jpg","1-150Z1103942428.jpg","1-150Z113513L10.jpg","1-150Z1135225557.jpg","1-150Z1140313109.jpg","1-150Z1103G2403.jpg","1-150Z114095NC.jpg","1-150Z114104U13.jpg","1-150Z114125a24.jpg","1-150Z114152E57.jpg","1-150Z1102440O6.jpg","1-150Z11341353I.jpg","1-150Z1135954a2.jpg","1-150Z1140410615.jpg","1-150Z1140205329.jpg","1-150Z1135334937.jpg","1-150Z11405042O.jpg","1-150Z1141634519.jpg","1-150Z1102621105.jpg","1-150Z1103546234.jpg","1-150Z113493G23.jpg","1-150Z114055W60.jpg","1-150Z1133944394.jpg","1-150Z11414345K.jpg","室外1021更新-0001.jpg","室外1021更新-0002.jpg","室外1021更新-0003.jpg","室外1021更新-0004.jpg","室外1021更新-0005.jpg","室外1021更新-0006.jpg","室外1021更新-0007.jpg","室外1021更新-0008.jpg","室外1021更新-0009.jpg","室外1021更新-0010.jpg","室外1021更新-0011.jpg","室外1021更新-0012.jpg","室外1021更新-0013.jpg","室外1021更新-0014.jpg","室外1021更新-0015.jpg","室外1021更新-0016.jpg","室外1021更新-0017.jpg","室外1021更新-0018.jpg","室外1021更新-0019.jpg","室外1021更新-0020.jpg","室外1021更新-0021.jpg","室外1021更新-0022.jpg","室外1021更新-0023.jpg","室外1021更新-0024.jpg","SHINING (5).jpg","SHINING (8).jpg","SHINING (13).jpg","SHINING (14).jpg","SHINING (15).jpg","SHINING (16).jpg","SHINING (17).jpg","SHINING (18).jpg","SHINING (20).jpg","SHINING (21).jpg","SHINING (35).jpg","SHINING (42).jpg","SHINING (44).jpg","SHINING (46).jpg","SHINING (53).jpg","SHINING (54).jpg"]
var imgArr = [];
var count = 0;
//$(".vert img").src = "";
//图片预加载
for(var i=0;i<srcArr.length;i++){
	var img = new Image();
	img.src ="img/Rendering/"+srcArr[i];
	imgArr.push(img);
	img.onload = function(){
		count ++;
		if(count>=srcArr.length){
			//随机某张图片
			var num1 = num();
			function num(){
				return parseInt(Math.random()*80)
			}
			//创建79个li
			createLi(79);
			function createLi(a){
				for (var i=0;i<a;i ++){
					num1 ++;
					if(num1>78){
						num1 = 0;
					}
					var newLi = $("<li index="+num1+"><div><div class='vert'><img src='img/Rendering/fangda.png'/></div></div></li>")
					newLi.prepend(imgArr[num1])
					//要将li插入到高度最低的ul里面去
					var ulHeight = [];      //存放uL高度的数组
					//将ul的高度放到数组里面去
					$("._pubu").each(function(){
						ulHeight.push($(this).height())
					})
					//判断哪个ul的高度最低
					var minHeight = ulHeight[0];
					var minIndex = 0;
					for(var k = 0; k < ulHeight.length; k ++){
						if(minHeight > ulHeight[k]){
							minHeight = ulHeight[k];
							minIndex = k;
						}
					}
//					console.log(minIndex)
					$("._pubu").eq(minIndex).append(newLi);
				}
			}
			$("._pubu li").hover(function(){
				$(this).children().last().toggle();
			})
			$("._pubu li").click(function(){
				var iSrc = $(this).children().first().attr("src");
				$(".rCover img").attr("src",iSrc);
				$(".rCover").show();
				$(".rCover").click(function(){
					$(".rCover").hide();
				})
			})
		}
	}
}