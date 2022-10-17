
//全局函数
function pressCaptcha(obj){obj.value=obj.value.toUpperCase()};function ResumeError(){return true};window.onerror=ResumeError;function SetHome(obj,vrl){try{obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl)}catch(e){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(e){alert("Your Browser does not support")};var prefs=Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);prefs.setCharPref('browser.startup.homepage',vrl)}}};function addFavorite(){var vDomainName=window.location.href;var description=document.title;try{window.external.AddFavorite(vDomainName,description)}catch(e){window.sidebar.addPanel(description,vDomainName,"")}};function metHeight(group){tallest=0;group.each(function(){thisHeight=$(this).height();if(thisHeight>tallest){tallest=thisHeight}});group.height(tallest)};function metmessagesubmit(info3,info4){if(document.myform.pname.value.length==0){alert(info3);document.myform.pname.focus();return false};if(document.myform.info.value.length==0){alert(info4);document.myform.info.focus();return false}};function addlinksubmit(info2,info3){if(document.myform.webname.value.length==0){alert(info2);document.myform.webname.focus();return false};if(document.myform.weburl.value.length==0||document.myform.weburl.value=='http://'){alert(info3);document.myform.weburl.focus();return false}};function textWrap(my){var text='',txt=my.text();txt=txt.split("");for(var i=0;i<txt.length;i++){text+=txt[i]+'<br/>'};my.html(text)}
//以上JS代码不建议去除，尤其是全局函数。
/*模板定义函数*/
function proxy(dom,lei,type){
	if(dom){
		dom.hover(function(){
			$(this).addClass(lei);
			if(type==1){
				if($(this).find('.sub').length>0){
					$(this).find('.sub').show()
				}
				else{
					$(this).addClass(lei+'er')
				}
			}
		}
		,function(){
			$(this).removeClass(lei);
			if(type==1){
				if($(this).find('.sub').length>0){
					$(this).find('.sub').hide()
				}
				else{
					$(this).removeClass(lei+'er');
				}
			}
		})
	}
}
function navnow(dom,part2,part3,none){
	var li=dom.find(".navnow dt[id*='part2_']");
	var dl=li.next("dd.sub");
	if(none)dl.hide();
	if(part2.next("dd.sub").length>0)part2.next("dd.sub").show();
	if(part3.length>0)part3.parent('dd.sub').show();
	li.bind('click',function(){
		var fdl=$(this).next("dd.sub");
		if(fdl.length>0){
			fdl.is(':hidden')?fdl.show():fdl.hide();
			fdl.is(':hidden')?$(this).removeClass('launched'):$(this).addClass('launched');
		}
	})
}
function partnav(c2,c3,jsok){
	var part2=$('#part2_'+c2);
	var part3=$('#part3_'+c3);
	if(part2)part2.addClass('on');
	if(part3)part3.addClass('on');
	if(jsok!=0)navnow($('#sidebar'),part2,part3);
}
function DownWdith(group){
	tallest=0;
	group.each(function(){
		thisWdith=$(this).width();
		if(thisWdith>tallest){
			tallest=thisWdith
		}
	});
	group.width(tallest);
}
function Iframedom(){
	var Iframe=$("#iframe");
	var Iframe_Conts=Iframe.contents().find("body");
	Iframe_Conts.css("height","100%");
	var Iframe_div=Iframe_Conts.find("div.main_deng");
	var Iframe_div1=Iframe_Conts.find("div.main_zhuce");
	Iframe_div.css("margin","0px auto");
	Iframe_div1.css("margin","0px auto");
	var Iframe_Height=Iframe_Conts.outerHeight(true);
	Iframe.height(Iframe_Height);
}
function productlist(dom,l){
	var w=dom.width();
	var p=((w/l)-dom.find('li').width())/2;
	if(p<0)p=0;
	dom.find('li').css("margin","0px "+p+"px");
}
/*自定义函数结束*/
//以下为执行代码
var module=Number($("footer").attr('data-module')),classnow=Number($("footer").attr('data-classnow'));
if(module){//全部页面
	$("nav li:first").addClass('myCorner').attr({'data-corner':'tl 5px'});//圆角
	$("nav li:last").addClass('myCorner').attr({'data-corner':'tr 5px'});//圆角
	$("#web_logo,nav ul li a").bind("focus",function(){if(this.blur)this.blur();});//IE
	proxy($("nav ul li[class!='line']"),'hover');//鼠标经过导航
}
if(module!=10001){//所有内页
	var csnow=$("#sidebar").attr('data-csnow'),class3=$("#sidebar").attr('data-class3'),jsok=$("#sidebar").attr('data-jsok');
	partnav(csnow,class3,jsok);//侧栏导航点击展开隐藏
}
switch(module){
	case 10001://首页
		$('.dl-jqrun dl').each(function(){//首页成功案例区块排版
			var dt = $(this).find('dt');
			var dd = $(this).find('dd');
			var wt = $(this).width()-dt.width();
				dd.width(wt);
			var ht = dt.height()>dd.height()?dt.height():dd.height();
				dd.height(ht);
				dt.height(ht);
		});
		metHeight($(".contour-1"));//等高
		metHeight($(".contour-2"));
		//产品展示
		if($("#indexcar ol li").size()>0){
			$("#indexcar li h3").width($("#indexcar li img").width());
			$("#indexcar li").height($("#indexcar li").height());
			$("#indexcar ol").height($("#indexcar li").height());
			$("#indexcar").height($("#indexcar ol").height());
			var listnum = $("#indexcar").attr('data-listnum');
			productlist($("#indexcar"),listnum);
			$("#trigger").switchable("#indexcar > ol > li", {
				triggerType: "click",effect: "scroll",steps:1,visible:listnum
			}).autoplay().carousel();
			var api4 = $("#trigger").switchable();
			$("#car_next").click(function(){api4.next();});
			$("#car_prev").click(function(){api4.prev();});
		}
	break;
	case 3://产品模块
		var plist = $('#productlist');
		if(plist.size()>0){
			metHeight(plist.find('li'));
		}else{
			var pshow=$(".pshow");
			var pshow_ddwh=pshow.width()-pshow.find("dt").width();
			pshow.find("dd").width(pshow_ddwh);
			var parlt=$('.pshow dd li');
			parlt.each(function(){
				var parst=$(this).find('span');
				if(parst.height()<$(this).height())parst.height($(this).height());
			});
		}
	break;
	case 4://下载模块
		var showdownload = $('#showdownload');
		if(showdownload.size()>0){
			var parlt=$('.paralist li');
			parlt.each(function(){
				var parst=$(this).find('span');
				if(parst.height()<$(this).height())parst.height($(this).height());
			});
			DownWdith($('.paralist li span'));
			$('.paralist li:last').css("border-bottom","0");
		}
	break;
	case 5://图片模块
		var ilist = $('#imglist');
		if(ilist.size()>0){
			metHeight(ilist.find('li'));
		}
	break;
}
$('.myCorner').corner();//圆角
var ie6 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);
if (jQuery.browser.msie && ie6){
	$(document.body).fixpng({scope:'img'});
}