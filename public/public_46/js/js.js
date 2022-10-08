//二级菜单
function showMenu(thisObj){
	$(thisObj).hover(
		function(){
			$(thisObj+">a").next().show();
		},
		function(){
			$(thisObj+">a").next().hide();
		}
	)
}

//tab选项卡
function tab(tabItem,tabCon){
	$(tabItem).mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var _index = $(this).index();
		$(tabCon).eq(_index).show().siblings().hide();
	})
}
