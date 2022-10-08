<!--
$(function(){
  $('#click_mmeun').click(function(){
    if($('#hidden_mmenuc').is(':hidden')){
		$('html, body').animate({scrollTop:0}, 300); 
		$('#hidden_mmenuc').fadeIn(230);
      $('#hidden_mmenub').fadeIn(300);
	  $('.channels-wrap').hide();
    }
    else{
		$('.channels-wrap').show();
	$('#hidden_mmenuc').fadeOut(230);
      $('#hidden_mmenub').fadeOut(300);
    }
  })
  
  $(".sider_tabs li").hover(function() {
        var _this = $(".sider_tabs li").index(this);
		$(".sider_tabs li a").removeClass("cur"); 
        $(".sider_tabs_con .con").addClass("hide"); 
        $(".sider_tabs_con .con").eq(_this).removeClass("hide"); 
		$(".sider_tabs li a").eq(_this).addClass("cur"); 
    });
  
  $(".feeds-tab li").hover(function() {
        var _this = $(".sider_tabs li").index(this);
		$(".sider_tabs li a").removeClass("cur"); 
        $(".sider_tabs_con .con").addClass("hide"); 
        $(".sider_tabs_con .con").eq(_this).removeClass("hide"); 
		$(".sider_tabs li a").eq(_this).addClass("cur"); 
    });  
  
  
  /*展开、收起文章*/

    var downinfo = $("#moreinfo");
    var downinfo_con = $(".text_jj");
    downinfo.click(function() {
        var downinfo_height = $(".tjcon").height();
        if (downinfo_con.height() == 232) {
            downinfo_con.animate({
                height: "" + downinfo_height + "px"
            });
            downinfo.html("<span class='sq'></span>收起内容")
        } else {
            downinfo_con.animate({
                height: "232px"
            });
            downinfo.html("<span></span>展开全部")
        }
    });

  })


-->