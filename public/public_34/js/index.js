if (document.location.protocol == "https:") {
	//window.location.href="http://"+window.location.host;
}


var setggao;
var normal_tpl_list;
var normal_tpl_list_kuaibo;
var normal_list = '{{#each this}}' +
	'<li class="{{this.class}}">' +
	'<a href="{{this.url}}" target="_blank">{{{this.title}}}{{#if this.relatedLinks}}{{{this.relatedLinks}}}{{/if}}</a>' +
	'</li>' +
	'{{/each}}';
var normal_list_kuaibao = '{{#each this}}' +
	'<li class="{{this.class}}">' +
	'<a href="{{this.url}}" target="_blank">{{#if this.titleshort}}{{{this.titleshort}}}{{else}}{{{this.title}}}{{/if}}{{#if this.relatedLinks}}{{{this.relatedLinks}}}{{/if}}</a>' +
	'</li>' +
	'{{/each}}';
function HandbarCompile_normal_list(id, data) {
	if (typeof normal_tpl_list != "function") {
		var tpl = normal_list;
		normal_tpl_list = Handlebars.compile(tpl);
	}
	if (typeof normal_tpl_list_kuaibo != "function") {
		var tpl_k = normal_list_kuaibao;
		normal_tpl_list_kuaibo = Handlebars.compile(tpl_k);
	}
	var list = eval(data);

	if (id == '40569') {
		$("#ul_s" + id).html(normal_tpl_list_kuaibo(list));
	} else {
		$("#ul_s" + id).html(normal_tpl_list(list));
	}
};
var Cookie = {
	get: function (k) {
		return ((new RegExp(["(?:; )?", k, "=([^;]*);?"].join(""))).test(document.cookie) && RegExp["$1"]) || "";
	},
	set: function (name, value, days) {
		var date = new Date();
		//设置过期天数
		var days = 30 * 365;
		var exp = new Date();
		exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
		var expires = '; expires=' + exp.toGMTString();
		document.cookie = name + "=" + value + expires + '; path=/';
	},
	del: function (k) {
		var date = new Date();
		//将date设置为过去的时间
		date.setTime(date.getTime() - 10000);
		document.cookie = k + "=; expires=" + date.toGMTString() + ";path=/";
	}
};
function dm(topid) {
	//关闭两会弹出
	$('#tc_close').click(function (e) {
		$('#tanchu').hide();
	});

	if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {

		var height = $(window).height();
		$(window).scroll(function () {
			var scroll_top = $(document).scrollTop();
			$('#' + topid).css({
				'top': scroll_top + height - 235
			});
		});
	}
}
/*
*显示广告
*
*/
function showad() {
	var length = $('div[id^=ggao_pid_67_]').length;
	var aid = '';
	var adhtml = '';
	$('div[id^=ggao_pid_67_]').each(function () {
		aid = $(this).attr('id').substr(12);
		adhtml = $(this).html();
		$('#layout_' + aid).html(adhtml);
	});
	$('#all_ad').remove();
	if (typeof (arr_gxnews_ggao_place) != 'object') { return; }
	//console.log(arr_gxnews_ggao_place);


	if (arr_gxnews_ggao_place[550] == 1) { // 订阅浮框、右边气球广告
		$('#layout_550').show();
	}

	if (arr_gxnews_ggao_place[738] == 1) { // 左侧浮框
		showFloorLeft('layout_738');
	}

	if (arr_gxnews_ggao_place[556] == 1) {
		var iframeHeight = arr_gxnews_ggao_height[556];
		$('#layout_556').html('<iframe id="iframe556" src="https://dq.gxnews.com.cn/ggao.html?https://dq.gxnews.com.cn/ggao/js/67/556_24b1398208696ec9d573020f5b1720d4.js" width="1000" height="' + iframeHeight + '" scrolling="no" frameborder="0"></iframe>');

		/*
		// 顶部通栏广告，全屏广告消失后，才显示
		setTimeout(function(){
			$('#layout_556').html('<iframe src="https://dq.gxnews.com.cn/ggao.html?https://dq.gxnews.com.cn/ggao/js/67/556_24b1398208696ec9d573020f5b1720d4.js" width="1000" height="90" scrolling="no" frameborder="0"></iframe>');
		},1000 * 8);
 */
	}



	if (arr_gxnews_ggao_place[557] == 1) {
		//$('#layout_556').hide();
		// 全屏广告
		var iframeHeight = arr_gxnews_ggao_height[557];
		$('#layout_557').html('<iframe id="iframe557" src="https://dq.gxnews.com.cn/ggao.html?https://dq.gxnews.com.cn/ggao/js/67/557_1e697b14d7ddd13bfc72ceb70360e495.js" width="1000" height="' + iframeHeight + '" scrolling="no" frameborder="0"></iframe>');

		/*
				setggao = setTimeout(function () {
			$('#layout_557').hide();
			$('#layout_556').show();
		}, 1000 * 4); //全屏广告显示时间，单位：毫秒
				 */
	}
	if (arr_gxnews_ggao_place[732] == 1) {
		// 全屏广告
		var iframeHeight = arr_gxnews_ggao_height[732];
		$('#layout_732').html('<iframe src="https://dq.gxnews.com.cn/ggao.html?https://dq.gxnews.com.cn/ggao/js/67/732_23ccef6334d8fac500c982e2bc9ca3aa.js" width="1000" height="' + iframeHeight + '" scrolling="no" frameborder="0"></iframe>');
		setggao = setTimeout(function () {
			$('#layout_732').hide();
		}, 1000 * 4); //全屏广告显示时间，单位：毫秒
	}
}
/*
* 显示广告位置编号
 */
function layoutPlace() {
	var url = window.location.href;
	var arr1 = arr2 = new Array();
	if (url.indexOf('?') >= 0) {
		arr1 = url.split('?');

		if (arr1[1].indexOf('#') >= 0) {
			arr2 = arr1[1].split('#');
		}
		else {
			arr2[0] = arr1[1];
		}
	}
	if (arr2[0] == 'gxnews_view_ggao_pid') {
		if (arr2[1] != '') {
			$('#' + arr2[1]).css({ 'border': '3px solid #F00' });
		}
		$('.layout-place').each(function (i) {
			var arr2 = new Array();
			arr2 = (this.id).split('_');
			$(this).append('<div class="place">位置ID：' + arr2[1] + '</div>');


		});
	}
}
/*
* 显示定制栏目div
*/
function showFloor(floorid) {
	var height = $(window).height() / 3;
	var width = ($(window).width() - 1020) / 2;
	var rightwidth = width - 135;
	$('#' + floorid).css({
		'right': rightwidth
	});
	/*
	if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
		$('#'+floorid).css({
			'top':height
		});
		$(window).scroll(function () {
			var scroll_top = $(document).scrollTop();
			$('#'+floorid).css({
				'top':scroll_top+height
			});
		});
	}else{
		$('#'+floorid).show();
	}
	*/

	$('#' + floorid).show();
}
/*
* 显示左侧悬浮框定
*/
function showFloorLeft(floorid) {
	var height = $(window).height() / 3;
	var width = ($(window).width() - 1020) / 2;
	var leftwidth = width - 135;
	$('#' + floorid).css({
		'left': leftwidth
	});
	$('#' + floorid).show();
}
//用户设置栏目
function selectCol(floorid) {
	$('#' + floorid + " strong").hide();
	$('#' + floorid + " li").hover(function () {
		$(this).find('strong').show();
	}, function () {
		$(this).find('strong').hide();
	});
	$('#reset').click(function (e) {
		$('div[name*=floor]').show();
		Cookie.del('gxnewsCol');
		$('#' + floorid + " strong").removeAttr('class');
		$('#' + floorid + " strong").each(function (e) {
			var colname = $(this).parent().find('span').text();
			$(this).attr('title', '点击隐藏' + colname);
		});
		$('#' + floorid + " a").removeAttr('class')

	});
	$('#' + floorid + " span").click(function (e) {
		if ($(this).parent().attr('class') == 'hidehover') {
			var spantext = $(this).text();
			alert('"' + spantext + '"栏目已隐藏');
		} else {
			var id = $('#' + floorid + " span").index(this) + 1;
			$("html,body").animate({ scrollTop: $("#gxnews-floor" + id).offset().top }, 600);
			$('#' + floorid + " a").removeClass('fhover');
			$(this).parent().addClass('fhover');
		}
	});
	$('#' + floorid + " strong").click(function (e) {
		var colname = $(this).parent().find('span').text();
		if ($(this).attr('class') == 'change') {
			var floorname = $(this).attr('id');
			$('div[name=' + floorname + ']').show();
			$(this).removeClass('change');
			$(this).attr('title', '点击隐藏' + colname);
			$(this).parent().removeAttr('class');
			if (Cookie.get('gxnewsCol').length) {
				var cookietemp = Cookie.get('gxnewsCol');
				if (cookietemp.indexOf(floorname) >= 0) {
					cookietemp = cookietemp.replace(floorname + ',', '');
					cookietemp = cookietemp.replace(',' + floorname, '');
					floorname = cookietemp.replace(floorname, '');
				}
				Cookie.set('gxnewsCol', floorname);
			}
		} else {
			var floorname = $(this).attr('id');
			if (Cookie.get('gxnewsCol').length) {
				var cookietemp = Cookie.get('gxnewsCol');
				var cookiearrt = new Array();
				cookiearrt = cookietemp.split(',');
				if (cookiearrt.length > 2) {
					alert('不允许隐藏所有栏目');
					return false;
				} else {
					floornamestr = Cookie.get('gxnewsCol') + ',' + floorname;
				}
			} else {
				floornamestr = floorname;
			}
			$('div[name=' + floorname + ']').hide();
			$(this).addClass('change');
			$(this).parent().addClass('hidehover');
			$(this).attr('title', '点击显示' + colname);
			$(this).text('+');
			Cookie.set('gxnewsCol', floornamestr);
		}
	});
}
//读取用户设置
function showCol() {
	var column = Cookie.get('gxnewsCol').split(',');
	for (key in column) {
		$('div[name=' + column[key] + ']').hide();
		$('#' + column[key]).parent().addClass('hidehover');
		var colname = $('#' + column[key]).find('span').text();
		$('#' + column[key]).addClass('change').attr('title', '点击显示' + colname);
	}
}

var refresh_count = 0;
var Period = 60; // 周期，单位：秒
function autoRefresh() {
	//var b=new Date();
	//console.log(b);
	refresh_count += 1;
	var rest = Period - refresh_count;
	$(".con-button input#auto_refresh").val("自动刷新(" + rest + ")");
	if (refresh_count == Period) {
		$(".con-button input#force_refresh").trigger("click");
		refresh_count = 0;
	}
	setTimeout("autoRefresh()", 1000);
}
//语音
function sound(soundid) {
	$('#' + soundid).click(function () {
		gxnewsFun.yuyin();
	});
}


$(document).ready(function (e) {
	//显示日期
	$('#datenow').text(datefun.showdate());
	//显示星期农历
	//$('#weekdate').text(datefun.showweek() + "  " + datefun.showlunar());
	$('#weekdate').text(datefun.showweek());


	//定制栏目
	showFloor('floor');
	//showFloorLeft('layout_738');
	selectCol('floor');
	showCol();
	//浏览页面跳至相应栏目
	$(window).scroll(function () {
		$("div[name*=floor]").each(function () {
			if ($(window).scrollTop() > ($(this).offset().top - $(window).height())) {
				if (!$(this).is(':hidden')) {
					var name = $(this).attr('name');
					$('#floor a').removeClass('fhover');
					$('#' + name).parent().addClass('fhover');
				}
			}
		});

	});
	//设为首页
	$('#home').click(function (e) {
		common.setHome(this, 'http://www.gxnews.com.cn');
	});
	//加入收藏
	$('#favorite').click(function (e) {
		common.addFavorite('http://www.gxnews.com.cn', '广西新闻网');
	});
	//回到顶部
	common.returnTop('retop');
	//到底部
	common.returnBottom('retbottom');
	$(window).resize(function (e) {
		showFloor('floor');
	});
	//关闭订阅
	$('#floor_close').click(function (e) {
		$('#floor').hide();
	});
	//滚动新闻
	common.marqueeLeft('scroll', '40');
	//栏目切换
	tab.tabChange('tabnews', 'strong', 'divnews', 'con-red');
	tab.tabChange('tabgxnews', 'strong', 'divgxnews', 'con-red');

	//东盟固定底部栏
	//dm('tanchu');

	//春节动画
	/*setTimeout(function(){
		$('.ny-swf').fadeOut();
	},1000 * 5);
	 $('.ny-close').click(function(){
	 $('.ny-swf').hide();
	 });
	 $('.ny-botton').click(function(){
	 $('.ny-swf').show();
	 });
	*/

	//地图热点
	//$('#map').maphilight();

	//更多导航
	gxnewsFun.morenav('head-nav', 'ul');
	//语音
	sound('soundid');

	$('#change_city').on('click', function () {
		$('ul.cityerea').stop().toggle(300);
	});

	$('i,.con-button input#force_refresh').click(function () {
		var thisSortDiv = $(this).parent();
		var sortid = parseInt(thisSortDiv.attr("sid"));
		var currentpage = parseInt(thisSortDiv.attr("p"));
		var perpage = parseInt(thisSortDiv.attr("pp"));
		var maxpage = parseInt(thisSortDiv.attr("maxpage"));
		if (currentpage == maxpage) currentpage = -1;
		var curstart = currentpage * perpage + perpage;
		var nextpage = currentpage + 1;

		if (sortid) {
			/* $.getJSON("https://v.gxnews.com.cn/index.php?c=www&a=getArticles&sortids="+sortid+"&start="+curstart+"&limit="+perpage+"&callback=?", function(result){
				 if(result!='""'){
					 HandbarCompile_normal_list(sortid,result);
					 thisSortDiv.attr("p",nextpage);
				 }
			 });*/
			$.ajax({
				type: "get",
				async: false,
				url: "https://v.gxnews.com.cn/index.php?c=www&a=getArticles&sortids=" + sortid + "&start=" + curstart + "&limit=" + perpage + "&callback=?",
				dataType: "jsonp",
				jsonp: "callback",
				jsonpCallback: "city",
				success: function (result) {
					if (result != '""') {
						HandbarCompile_normal_list(sortid, result);
						thisSortDiv.attr("p", nextpage);
					}
				},
				error: function () {
					console.log('fail');
				}
			});
		} else {
			// alert("栏目信息没有配置");
		}
	});

	$('.cityerea').find('li a').on('click', function () {
		var sortid = $(this).attr('sortid');
		var cityname = $(this).html();
		var areagxval = $(this).html();
		$('#cityereaMore a').hide();
		$('#more' + sortid).show();
		/*$.getJSON("https://v.gxnews.com.cn/index.php?c=www&a=getArticles&sortids="+sortid+"&limit="+10+"&callback=?", function(result){
			console.log(result);
			if(result!='""'){
				HandbarCompile_normal_list("city",result);
				$("#cityname").html(cityname);
				$('ul.cityerea').hide().removeClass('fallback');
			}
		});*/
		$.ajax({
			type: "get",
			async: false,
			url: "https://v.gxnews.com.cn/index.php?c=www&a=getArticles&sortids=" + sortid + "&limit=" + 10 + "&callback=?",
			dataType: "jsonp",
			jsonp: "callback",
			jsonpCallback: "city",
			success: function (result) {
				if (result != '""') {
					HandbarCompile_normal_list("city", result);
					$("#cityname").html(cityname);
					$('ul.cityerea').hide().removeClass('fallback');
				}
			},
			error: function () {
				console.log('fail');
			}
		});
	});

	$(".qrcode").each(function () {
		var text = $(this).attr("text");
		$(this).qrcode({
			render: "canvas", //也可以替换为table
			width: 100,
			height: 100,
			text: text
		});
	});

	$('.qr').hover(function () {
		var aid = $(this).attr('aid');
		$("#qrcode_" + aid).stop().slideToggle();
	});

	autoRefresh();
	//显示广告
	showad();
	layoutPlace();

	loadHDdata(8, 5); //首府论坛
	loadHDdata(5, 4); //网友互动
	loadHDdata(25, 4); //博客精选
	loadHDdata(110, 5); //博客精选

	//猜你喜欢
	var gxnewsUnlike = $.cookie('gxnewsUnlike') ? $.cookie('gxnewsUnlike') : '';
	var gxnewsUnlikeArr = gxnewsUnlike.split(',');
	var gxnewsUnlikeArrLength = gxnewsUnlikeArr.length;
	var limitGxnewsUnlike = 16;
	unlikeCount(limitGxnewsUnlike);
	for (var u = 0; u < gxnewsUnlikeArr.length; u++) {
		$('#li' + gxnewsUnlikeArr[u]).remove();
	}

	$('i.click-close').click(function () {
		unlikeCount(limitGxnewsUnlike);
		var id = $(this).attr('data-id');
		if (gxnewsUnlikeArrLength == 100) {
			gxnewsUnlikeArr.shift();
		}
		gxnewsUnlikeArr.push(id);
		gxnewsUnlike = gxnewsUnlikeArr.join(',')
		$.cookie('gxnewsUnlike', gxnewsUnlike, { expires: 365 });
		//ajax
		$.ajax({
			type: "get",
			async: false,
			url: "https://v.gxnews.com.cn/index.php?c=www&a=setArticleNotlikke&articleids=" + id + "&callback=?",
			dataType: "jsonp",
			jsonp: "callback",
			jsonpCallback: "city",
			success: function (result) {
				$('#li' + id).remove();
			},
			error: function () {
				console.log('fail');
			}
		});

	});

});

//猜你喜欢
function unlikeCount(num) {
	var count = $('#ul_like63 li').length;
	if (count - 1 < num + 1) {
		$('i.click-close').remove();
	}
}

//红豆数据
function loadHDdata(classid, num) {
	$.getJSON("https://hd3g.gxnews.com.cn/api/index.php?model=listclass&ac=custom&classid=" + classid + "&num=" + num + "&callback=?", function (result) {
		if (result != '""') {
			HandbarCompile_normal_list("hd" + classid, result.results.threads);
		}
	});
}

//大标题自动调整字体大小
$(function () {
	$(".top-news h2").each(function () {
		var h2 = $(this);
		var a = h2.find(">a");
		var b = h2.find(">a>b");
		if (b.length && b.width() > h2.width()) {
			var fsize = Math.floor(h2.width() / b.width() * 25.4);
			b.css("font-size", fsize + "px");
		}
	});
});