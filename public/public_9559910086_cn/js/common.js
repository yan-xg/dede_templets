/*
Theme ID: ydit
Author: 老白
Author QQ：525887672
Author Email：525887672@qq.com
Author URI: http://www.ylefu.com/
*/
//PC搜索
$(function(){
    $(".mnav").click(function(){
        $(".mnav i").toggleClass("fa-remove");
        $(".mnav i").toggleClass("fa-bars");
        $(".nav").slideToggle(0);
        // $(".search").slideUp(100);
    });
    $(".msearch").click(function(){
        $(".msearch i").toggleClass("fa-serach");
        $(".msearch i").toggleClass("fa-remove");
        $(".search").slideToggle(0);
    });
});
//空白关闭
// $(document).mouseup(function() {
// 	$(".nav").hide();
// });
//SuperSlide
$(function () {
    //幻灯
    jQuery(".slider").slide({
        mainCell: ".bd ul",
        effect: "leftLoop",
        autoPlay: true,
        delayTime: 700
    });
    //tab
    // jQuery(".txtScroll").slide({
    // 	mainCell: ".bdgd ul",
    // 	autoPage: true,
    // 	effect: "top",
    // 	autoPlay: true,
    // 	easing: "easeInQuint",
    // 	delayTime: 700
    // });
    // //滚动
    // jQuery(".htab").slide({
    // 	trigger: "click",
    // 	delayTime: 200
    // });
});



//菜单返回显示
$(function(){
    var yd_seviye = $(document).scrollTop();
    var yd_yuksekligi = $('.header').outerHeight();
    $(window).scroll(function() {
        var yd_cubugu = $(document).scrollTop();
        if (yd_cubugu > yd_yuksekligi){$('.header').addClass('gizle');}
        else {$('.header').removeClass('gizle');}
        if (yd_cubugu > yd_seviye){$('.header').removeClass('sabit');}
        else {$('.header').addClass('sabit');}
        yd_seviye = $(document).scrollTop();
    });
});
//CSS


//返回顶部
$(window).scroll(function () {
    var sc = $(window).scrollTop();
    var rwidth = $(window).width() + $(document).scrollLeft();
    var rheight = $(window).height() + $(document).scrollTop();
    if (sc > 0) {
        $("#goTop").show();
        // $("#goTop").css("left", (rwidth - 80) + "px");
        // $("#goTop").css("top", (rheight - 120) + "px");
        $("#goTop").css("right", "30px");
        $("#goTop").css("bottom", "30px");
    } else {
        $("#goTop").hide();
    }
});
$("#goTop").click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 300);
});
//CSS:

//高亮
$(function () {
    var datatype = $("#monavber").attr("data-type");
    $(".navbar>li ").each(function () {
        try {
            var myid = $(this).attr("id");
            if ("index" == datatype) {
                if (myid == "nvabar-item-index") {
                    $("#nvabar-item-index").addClass("active");
                }
            } else if ("category" == datatype) {
                var infoid = $("#monavber").attr("data-infoid");
                if (infoid != null) {
                    var b = infoid.split(' ');
                    for (var i = 0; i < b.length; i++) {
                        if (myid == "navbar-category-" + b[i]) {
                            $("#navbar-category-" + b[i] + "").addClass("active");
                        }
                    }
                }
            } else if ("article" == datatype) {
                var infoid = $("#monavber").attr("data-infoid");
                if (infoid != null) {
                    var b = infoid.split(' ');
                    for (var i = 0; i < b.length; i++) {
                        if (myid == "navbar-category-" + b[i]) {
                            $("#navbar-category-" + b[i] + "").addClass("active");
                        }
                    }
                }
            } else if ("page" == datatype) {
                var infoid = $("#monavber").attr("data-infoid");
                if (infoid != null) {
                    if (myid == "navbar-page-" + infoid) {
                        $("#navbar-page-" + infoid + "").addClass("active");
                    }
                }
            } else if ("tag" == datatype) {
                var infoid = $("#monavber").attr("data-infoid");
                if (infoid != null) {
                    if (myid == "navbar-tag-" + infoid) {
                        $("#navbar-tag-" + infoid + "").addClass("active");
                    }
                }
            }
        } catch (E) {}
    });
    $("#monavber").delegate("a", "click", function () {
        $(".navbar>li").each(function () {
            $(this).removeClass("active");
        });
        if ($(this).closest("ul") != null && $(this).closest("ul").length != 0) {
            if ($(this).closest("ul").attr("id") == "munavber") {
                $(this).addClass("active");
            } else {
                $(this).closest("ul").closest("li").addClass("active");
            }
        }
    });
});


//视频自适应
function video_ok(){
    $('.article_content embed, .article_content video, .article_content iframe').each(function(){
        var w = $(this).attr('width'),
            h = $(this).attr('height')
        if( h ){
            $(this).css('height', $(this).width()/(w/h))
        }
    })
}
//文章图片自适应，自适应CSS宽度需设置为width:100%
$(function(){
    $(".article_content").find("img").css({ //去除style="width:;height:;"
        "width" : "",
        "height" : ""
    });
});
function img_ok(){
    $('.article_content img').each(function(){
        var w = $(this).attr('width'),
            h = $(this).attr('height')
        if( h ){
            $(this).css('height', $(this).width()/(w/h))
        }
    });
}
//重写了common.js里的同名函数
function RevertComment(i){$("#inpRevID").val(i);var frm=$('#comment'),cancel=$("#cancel-reply"),temp=$('#temp-frm');var div=document.createElement('div');div.id='temp-frm';div.style.display='none';frm.before(div);$('#AjaxComment'+i).before(frm);frm.addClass("");cancel.show();cancel.click(function(){$("#inpRevID").val(0);var temp=$('#temp-frm'),frm=$('#comment');if(!temp.length||!frm.length)return;temp.before(frm);temp.remove();$(this).hide();frm.removeClass("");return false});try{$('#txaArticle').focus()}catch(e){}return false}
//重写GetComments，防止评论框消失
function GetComments(logid,page){$('span.commentspage').html("Waiting...");$.get(bloghost+"zb_system/cmd.php?act=getcmt&postid="+logid+"&page="+page,function(data){$('#AjaxCommentBegin').nextUntil('#AjaxCommentEnd').remove();$('#AjaxCommentEnd').before(data);$("#cancel-reply").click()})}
function CommentComplete(){$("#cancel-reply").click()}