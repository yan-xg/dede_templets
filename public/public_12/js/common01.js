//WAPdaohang手机导航
        jQuery(document).ready(function ($) {

            /* prepend menu icon */

            $('#navs-wrap').prepend('<div id="menu-icon"></div>');

            /* toggle nav */

            $("#menu-icon").on("click", function () {

                $("#navs").slideToggle();

                $(this).toggleClass("active");

            });

        });

//daohanggaoliang导航高亮
jQuery(document).ready(function($){ 
var datatype=$("#hamburgermenu").attr("data-type");
    $(".menu>li ").each(function(){
        try{
            var myid=$(this).attr("id");
            if("index"==datatype){
                if(myid=="nvabar-item-index"){
                    $("#nvabar-item-index a:first-child").addClass("on");
                }
            }else if("category"==datatype){
                var infoid=$("#hamburgermenu").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="navbar-category-"+b[i]){
                            $("#navbar-category-"+b[i]+" a:first-child").addClass("on");
                        }
                    }
                }
            }else if("article"==datatype){
                var infoid=$("#hamburgermenu").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="navbar-category-"+b[i]){
                            $("#navbar-category-"+b[i]+" a:first-child").addClass("on");
                        }
                    }
                }
            }else if("page"==datatype){
                var infoid=$("#hamburgermenu").attr("data-infoid");
                if(infoid!=null){
                    if(myid=="navbar-page-"+infoid){
                        $("#navbar-page-"+infoid+" a:first-child").addClass("on");
                    }
                }
            }else if("tag"==datatype){
                var infoid=$("#hamburgermenu").attr("data-infoid");
                if(infoid!=null){
                    if(myid=="navbar-tag-"+infoid){
                        $("#navbar-tag-"+infoid+" a:first-child").addClass("on");
                    }
                }
            }
        }catch(E){}
    });
});



//zicaidan
$(function(){var toTopHeight=$("#moveside").offset().top;$(window).scroll(function(){if($(document).scrollTop()>toTopHeight){if('undefined'==typeof(document.body.style.maxHeight)){var scrollTop=$(document).scrollTop();$("#moveside").css({'position':'absolute','top':scrollTop+'px'});}else{$("#moveside").addClass("moveside");}}else{if('undefined'==typeof(document.body.style.maxHeight)){$("#moveside").css({'position':'absolute','top':toTopHeight+'px'});}else{$("#moveside").removeClass("moveside");}}});});
//tab悬浮
;(function($){$.fn.navfix=function(mtop,zindex){var nav=$(this),mtop=mtop,zindex=zindex,dftop=nav.offset().top-$(window).scrollTop(),dfleft=nav.offset().left-$(window).scrollLeft(),dfcss=new Array;dfcss[0]=nav.css("position"),dfcss[1]=nav.css("top"),dfcss[2]=nav.css("left"),dfcss[3]=nav.css("zindex"),$(window).scroll(function(e){$(this).scrollTop()>dftop?$.browser.msie&&$.browser.version=="6.0"?nav.css({position:"absolute",top:eval(document.documentElement.scrollTop),left:dfleft,"z-index":zindex}):nav.css({position:"fixed",top:mtop+"px",left:dfleft,"z-index":zindex}):nav.css({position:dfcss[0],top:dfcss[1],left:dfcss[2],"z-index":dfcss[3]})})}})(jQuery)
//悬浮设置
$(document).ready(function(e) {
 $('#mynav').navfix(0,999);    
});
//第一个值： 你期望导航在距离顶部多少的位置浮动
//第二个值： 导航zindex



