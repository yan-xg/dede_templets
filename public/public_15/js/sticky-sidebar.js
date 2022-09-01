(function(f){f.fn.theiaStickySidebar=function(b){var be={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:true,minWidth:0,disableOnResponsiveLayouts:true,sidebarBehavior:"modern"};b=f.extend(be,b);b.additionalMarginTop=parseInt(b.additionalMarginTop)||0;b.additionalMarginBottom=parseInt(b.additionalMarginBottom)||0;d(b,this);function d(b,be){var d=W(b,be);if(!d){console.log("TST: Body width smaller than options.minWidth. Init is delayed.");f(document).scroll(function(b,be){return function(d){var da=W(b,be);if(da){f(this).unbind(d)}}}(b,be));f(window).resize(function(b,be){return function(d){var da=W(b,be);if(da){f(this).unbind(d)}}}(b,be))}}function W(b,be){if(b.initialized===true){return true}if(f("body").width()<b.minWidth){return false}da(b,be);return true}function da(b,be){b.initialized=true;f("head").append(f('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));be.each(function(){var be={};be.sidebar=f(this);be.options=b||{};be.container=f(be.options.containerSelector);if(be.container.length==0){be.container=be.sidebar.parent()}be.sidebar.parents().css("-webkit-transform","none");be.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});be.stickySidebar=be.sidebar.find(".theiaStickySidebar");if(be.stickySidebar.length==0){var d=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;be.sidebar.find("script").filter(function(f,b){return b.type.length===0||b.type.match(d)}).remove();be.stickySidebar=f("<div>").addClass("theiaStickySidebar").append(be.sidebar.children());be.sidebar.append(be.stickySidebar)}be.marginTop=parseInt(be.sidebar.css("margin-top"));be.marginBottom=parseInt(be.sidebar.css("margin-bottom"));be.paddingTop=parseInt(be.sidebar.css("padding-top"));be.paddingBottom=parseInt(be.sidebar.css("padding-bottom"));var W=be.stickySidebar.offset().top;var da=be.stickySidebar.outerHeight();be.stickySidebar.css("padding-top",0);be.stickySidebar.css("padding-bottom",0);W-=be.stickySidebar.offset().top;da=be.stickySidebar.outerHeight()-da-W;if(W==0){be.stickySidebar.css("padding-top",0);be.stickySidebarPaddingTop=0}else{be.stickySidebarPaddingTop=0}if(da==0){be.stickySidebar.css("padding-bottom",0);be.stickySidebarPaddingBottom=0}else{be.stickySidebarPaddingBottom=0}be.previousScrollTop=null;be.fixedScrollTop=0;dD();be.onScroll=function(be){if(!be.stickySidebar.is(":visible")){return}if(f("body").width()<be.options.minWidth){dD();return}if(be.options.disableOnResponsiveLayouts){var d=be.sidebar.outerWidth(be.sidebar.css("float")=="none");if(d+50>be.container.width()){dD();return}}var W=f(document).scrollTop();var da="static";if(W>=be.container.offset().top+(be.paddingTop+be.marginTop-be.options.additionalMarginTop)){var g=be.paddingTop+be.marginTop+b.additionalMarginTop;var a=be.paddingBottom+be.marginBottom+b.additionalMarginBottom;var Y=be.container.offset().top;var fb=be.container.offset().top+e(be.container);var ad=0+b.additionalMarginTop;var c;var X=be.stickySidebar.outerHeight()+g+a<f(window).height();if(X){c=ad+be.stickySidebar.outerHeight()}else{c=f(window).height()-be.marginBottom-be.paddingBottom-b.additionalMarginBottom}var eE=Y-W+be.paddingTop+be.marginTop;var eW=fb-W-be.paddingBottom-be.marginBottom;var fg=be.stickySidebar.offset().top-W;var dT=be.previousScrollTop-W;if(be.stickySidebar.css("position")=="fixed"){if(be.options.sidebarBehavior=="modern"){fg+=dT}}if(be.options.sidebarBehavior=="stick-to-top"){fg=b.additionalMarginTop}if(be.options.sidebarBehavior=="stick-to-bottom"){fg=c-be.stickySidebar.outerHeight()}if(dT>0){fg=Math.min(fg,ad)}else{fg=Math.max(fg,c-be.stickySidebar.outerHeight())}fg=Math.max(fg,eE);fg=Math.min(fg,eW-be.stickySidebar.outerHeight());var aa=be.container.height()==be.stickySidebar.outerHeight();if(!aa&&fg==ad){da="fixed"}else if(!aa&&fg==c-be.stickySidebar.outerHeight()){da="fixed"}else if(W+fg-be.sidebar.offset().top-be.paddingTop<=b.additionalMarginTop){da="static"}else{da="absolute"}}if(da=="fixed"){be.stickySidebar.css({position:"fixed",width:be.sidebar.width(),top:fg,left:be.sidebar.offset().left+parseInt(be.sidebar.css("padding-left"))})}else if(da=="absolute"){var fU={};if(be.stickySidebar.css("position")!="absolute"){fU.position="absolute";fU.top=W+fg-be.sidebar.offset().top-be.stickySidebarPaddingTop-be.stickySidebarPaddingBottom}fU.width=be.sidebar.width();fU.left="";be.stickySidebar.css(fU)}else if(da=="static"){dD()}if(da!="static"){if(be.options.updateSidebarHeight==true){be.sidebar.css({"min-height":be.stickySidebar.outerHeight()+be.stickySidebar.offset().top-be.sidebar.offset().top+be.paddingBottom})}}be.previousScrollTop=W};be.onScroll(be);f(document).scroll(function(f){return function(){f.onScroll(f)}}(be));f(window).resize(function(f){return function(){f.stickySidebar.css({position:"static"});f.onScroll(f)}}(be));function dD(){be.fixedScrollTop=0;be.sidebar.css({"min-height":"0px"});be.stickySidebar.css({position:"static",width:""})}function e(b){var be=b.height();b.children().each(function(){be=Math.max(be,f(this).height())});return be}})}}})(jQuery);$(document).ready(function(){$(".side-hot .sidebar,.side-hot .sidebox").theiaStickySidebar({additionalMarginTop:24,additionalMarginBottom:10})});