function showqrcode(o){
	var img = "<img src='"+o+"' width='100%' />"
	layer.open({
	  type: 1,
	  title: false, //不显示标题
	  content: img
	});
}
$(function(){

	if($(window).width()<=760){
		$('#menu').mmenu();
	}else{
		var cur=$(".menu li a.cur");
		$(".menu li").hover(function(){
			$(this).children("a").addClass("cur");
			$(this).children("ul").show();
		},function(){
			$(this).children("a").removeClass("cur");
			$(this).children("ul").hide();
			cur.addClass("cur");
		});

		$("#sobtn").click(function(){
			$(".sobox").toggle();
		});
	}
});
// $('.icon-navicon').click(function(){

// })

/** 
 * 获取数组中高度最小的索引 
 * @param {Object} li 数组 
 */  
function getShort(li) {  
    var index = 0;  
    var liHeight = li[index].offsetHeight;  
    for(var i = 0; i < li.length; i++) {  
        if(li[i].offsetHeight < liHeight) {  
            index = i;  
            liHeight = li[i].offsetHeight;  
        }  
    }  
    return index;  
}  