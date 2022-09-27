//滚动
function marquee(i, direction)
{
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");

	if (direction == "up")
	{
		if (obj2.offsetTop - obj.scrollTop <= 0)
		{
			obj.scrollTop -= (obj1.offsetHeight + 20);
		}
		else
		{
			var tmp = obj.scrollTop;
			obj.scrollTop++;
			if (obj.scrollTop == tmp)
			{
				obj.scrollTop = 1;
			}
		}
	}
	else
	{
		if (obj2.offsetWidth - obj.scrollLeft <= 0)
		{
			obj.scrollLeft -= obj1.offsetWidth;
		}
		else
		{
			obj.scrollLeft++;
		}
	}
}

function marqueeStart(i, direction)
{
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");

	obj2.innerHTML = obj1.innerHTML;
	var marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 50);
	obj.onmouseover = function(){window.clearInterval(marqueeVar);}
	obj.onmouseout = function(){marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 50);}
}

//滑动门
function tabit(btn, n){
var idname = new String(btn.id);
var s = idname.indexOf("_");
var e = idname.lastIndexOf("_") + 1;
var tabName = idname.substr(0, s);
var id = parseInt(idname.substr(e));
for (i=0; i<n; i++){
document.getElementById(tabName + "_div_" + i).style.display = "none";
document.getElementById(tabName + "_btn_" + i).className = '';
};
document.getElementById(tabName+"_div_"+id).style.display = "block";
btn.className = "postion";
};

// function tab (num1, num2, cnt)
// {
// 	document.getElementById("tab" + num1 + "_" + num2).style.display	= "block";
// 	document.getElementById("menu" + num1 + "_" + num2).className		= "current";

// 	for(i = 1; i <= cnt; i++)
// 	{
// 		if(i != num2)
// 		{
// 			document.getElementById("tab" + num1 + "_" + i).style.display = "none";
// 			document.getElementById("menu" + num1 + "_" + i).className = "normal";
// 		}
// 	}
// }


//在网页中插入flash
// function InsertFlash(Flash,Width,Height,ID){
// 	document.write("<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" ");
// 	document.write("codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" ");
// 	document.write("width=\"" + Width + "\" height=\"" + Height + "\" id=\"" + ID + "\">");
// 	document.write("<param name=\"movie\" value=\"" + Flash + "\">");
// 	document.write("<param name=\"quality\" value=\"high\">");
// 	document.write("<param name=\"wmode\" value=\"transparent\">");
// 	document.write("<embed src=\"" + Flash + "\" quality=\"high\" wmode=\"transparent\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" ");
// 	document.write("type=\"application/x-shockwave-flash\" width=\"" + Width + "\" height=\"" + Height + "\"></embed>");
// 	document.write("</object>");
// }


//url跳转
//t0:跳转的页码,t1:系统模式(动，静，伪),t2:动态模式下url模板,t3:总页数,t4:是否是后台调用(0为后台调用)
function urlgo(t0,t1,t2,t3,t4)
{
	var url;
	if(t0>t3){t0=t3}
	url=t2+t0;
	if(t4==1)
	{
		if(t1!=1)
		{
			if(t0<=1)
			{
				if(t1==2){
					//var a=t2;
					//var b=a.split("_");
					t5=t2;
				}
				else
				{
					t5="./"
				}
			}
			else
			{
				if(t1==2){
					var a=t2;
					var b=a.split("_");
					//t5=b[1]+"_[page]/"
					t5=t2+t0+"/";
				}
				else
				{
					t5="index_[page].html"
				}
				t5=t5.replace("[page]",t0);
			}
			url=t5;
		}
	}
	document.location.href=url;
}
$(document).ready(function () {
	$.featureList(
		$(".slides_nav li"),
		$(".slides_box div"), {
		start_item: 0
	});

});