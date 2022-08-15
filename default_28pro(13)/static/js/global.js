$(function(){
	$('.nav .inner > ul > li > a').each(function() {
		if ($(this).attr('href').toLowerCase().replace(/\/|[&#].*/g,"") == document.URL.toLowerCase().replace(/\/|[&#].*/g,"")){
			$(this).attr('class','cur');
		}
	});
	/*顶部下拉菜单*/
	$('.nav li').each(function(){
		if($(this).children('ul').length > 0){
			$(this).children('a').after('<em></em>');
		}
	});
	$('.nav li').hover(function(){
		$(this).addClass('on').children('ul').addClass('show');
	},function(){
		$(this).removeClass('on').children('ul').removeClass('show');
	});
	/*搜索框*/
	$('.schBtn').click(function(){
		$('.search').fadeToggle(0);
		$('.navBtn, .nav').removeClass('open');
	});
	/*手机导航按钮*/
	$('.navBtn').click(function(){
		$(this).toggleClass('open');
		$('body, .nav').toggleClass('open');
		$('.search').removeAttr('style');
	});
	
	/*手机下拉菜单*/
	$('.nav li em').click(function(){
		$(this).toggleClass('open').siblings('ul').toggleClass('open').parent().siblings('li').children('em').removeClass('open').siblings('ul').removeClass('open');
	});	
	if($('.entry img').length > 0){
	    $('.entry img').removeAttr('height','auto');
	    $('.entry img').css('height','auto');
	}
	/*首页幻灯片*/
	if($('#slides').length > 0){
		$("#slides").on('initialize.owl.carousel initialized.owl.carousel ',
		function(e) {
			$('div.load').remove();                 
		});
		$('#slides').owlCarousel({
			items:1,
			loop:true, 
			mouseDrag:true,
			autoplay:true,
			nav:true,	
			dots:false
		}); 
	}
	// 鼠标引入$('#slides')元素设置$('#slides .owl-prev')的display属性为block，$('#slides .owl-next')的display属性为block，否则为none
	$('#slides').on('mouseover',function(){
		$('.owl-prev').css('display','block');
		$('.owl-next').css('display','block');
	}
	).on('mouseout',function(){
		$('.owl-prev').css('display','none');
		$('.owl-next').css('display','none');
	}
	);
});
// zbp.plugin.unbind("comment.reply", "system");
// zbp.plugin.on("comment.reply", "aymeight", function(id) {
// 	var i = id;
// 	$("#inpRevID").val(i);
// 	var frm = $('#comment'),
// 		cancel = $("#cancel-reply");

// 	frm.before($("<div id='temp-frm' style='display:none'>")).addClass("reply-frm");
// 	$('#AjaxComment' + i).before(frm);

// 	cancel.show().click(function() {
// 		var temp = $('#temp-frm');
// 		$("#inpRevID").val(0);
// 		if (!temp.length || !frm.length) return;
// 		temp.before(frm);
// 		temp.remove();
// 		$(this).hide();
// 		frm.removeClass("reply-frm");
// 		return false;
// 	});
// 	try {
// 		$('#txaArticle').focus();
// 	} catch (e) {}
// 	return false;
// });

// zbp.plugin.on("comment.get", "aymeight", function (logid, page) {
// 	$('span.commentspage').html("Waiting...");
// 	$.get(bloghost + "zb_system/cmd.php?act=getcmt&postid=" + logid + "&page=" + page, function(data) {
// 		$('#AjaxCommentBegin').nextUntil('#AjaxCommentEnd').remove();
// 		$('#AjaxCommentEnd').before(data);
// 		$("#cancel-reply").click();
// 	});
// })

// zbp.plugin.on("comment.postsuccess", "aymeight", function () {
// 	$("#cancel-reply").click();
// });