/*
* 幻灯片小插件
* @author 洋
* @email shiyang5463@qq.com
* @date 2017/3/18
*/

!(function($){
    $.fn.news_SliderImg = function(options){
        var defaults = {
            'container' : '.J_bImgslider',
            'btn_prev' : '.J_prev',
            'btn_next' : '.J_next',
            'section_ul' : '#J_slierPic',
            'section_li' : 'li',
            'slidePage' : '#J_slidePage',
            'duration' : 600,      //幻灯片切换速度
            'delay' : 2000,      //幻灯片自动切换时间
            'pagination' : true,    //是否显示分页
            'autoPlay' : true,     //是否自动播放
            'autoPlaytime' : null,
            'indexs' : 0           //幻灯片每张索引值  
        }
        var opt = $.extend(defaults , options || {});
        var container = $(opt.container);
        var section_ul = container.find(opt.section_ul);
        var section_li = container.find(opt.section_li);
        var btn_prev = container.find(opt.btn_prev);
        var btn_next = container.find(opt.btn_next);
        var slidePage = container.find(opt.slidePage);
        var imgText = container.find(opt.imgText);
        var textCon = imgText.find(opt.textCon);
        var index = opt.indexs;
        var section_li_length = section_li.size();

        return this.each(function(){
            section_ul.width(section_li.width() * section_li_length);
            if(opt.pagination){
                for(var i = 0; i < section_li_length; i++){
                    var pageNum = ('<a href="javascript:;"></a>');
                    slidePage.append(pageNum);
                    if(i == 0){
                        slidePage.find('a').eq(i).addClass('cur');    
                    }
                }
                slidePage.find('a').on('mouseover' , function(){
                    index = $(this).index();
                    $(this).addClass('cur').siblings().removeClass('cur');
                    section_ul.stop().animate({'left' : -section_li.width() * index} , opt.duration);    
                });
            }

            var pageCount = slidePage.find('a');

            btn_prev.on('click' , function(){                
                sliderMove(pageCount , 'J_prev');
            });

            btn_next.on('click' , function(){                
                sliderMove(pageCount , 'J_next');    
            });

            function sliderMove(obj,classType){
                if(classType == 'J_prev'){
                    index--;
                    if(index < 0){
                        index = section_li_length - 1;
                    }    
                }else if(classType == 'J_next'){
                    index++;
                    if(index > section_li_length - 1){
                        index = 0;
                    }
                }
                obj.eq(index).addClass('cur').siblings().removeClass('cur');
                section_ul.stop().animate({'left' : -section_li.width() * index} , opt.duration);    
            }

            //设置是否自动播放    
            if(opt.autoPlay){
                container.hover(function(){
                    clearInterval(opt.autoPlaytime);
                },function(){
                    clearInterval(opt.autoPlaytime);
                    opt.autoPlaytime = setInterval(function(){
                        sliderMove(pageCount , 'J_next');
                    } , opt.delay);    
                }).trigger('mouseleave')
            }
        })
    }

    $(function(){
        /*小图幻灯片*/
        $('.J_slideSImg').news_SliderImg({
            'container' : '.J_slideSImg',
            'section_ul' : '#J_slierSpic',
            'slidePage' : '#J_slideSpage',
            'pagination' : true,    //是否显示分页
            'autoPlay' : true,   //设置是否自动播放
            'delay' : 3000,      //幻灯片自动切换时间
        });

        var big = $('.big-pic li');
        var small = $('.small-pic li');
        big.eq(0).show();

        small.on('mouseover' , function(){
            var index = $(this).index();
            $(this).addClass('cur').siblings().removeClass('cur');
            big.eq(index).fadeIn().siblings().fadeOut();
        })

        $('.J_introSideImg').each(function(){
            var $J_prev = $(this).parent().find('.J_prev');
            var $J_next = $(this).parent().find('.J_next');
            var imgUl = $(this).find('ul');
            var imgLi = $(this).find('li');
            var imgLiWidth = $(this).find('li').width() + 28;
            var index = 0;

            imgUl.width(imgLi.size() * imgLiWidth);

            /*图片有4张或者少于4张的时候两侧的按钮隐藏*/
            if(imgLi.length <= 4){
                $('.c_icon').hide();
            }

            $J_prev.on('click' , function(){
                imgSideMove('J_prev');
            });

            $J_next.on('click' , function(){
                imgSideMove('J_next');
            })

            function imgSideMove(element){
                if(element == 'J_prev'){
                    index--;
                    if(index < 0){
                        index = imgLi.size() - 4;
                    }
                }else if(element == 'J_next'){
                    index++;
                    if(index > imgLi.size() - 4){
                        index = 0;
                    }
                }
                imgUl.stop().animate({'left' : -imgLiWidth * index} , 300);
            }
        })
    })
})(jQuery);

!$(function(){
    var piccarousel=$('div[data-plugin=piccarousel]');
    piccarousel.each(function(){
        var sliderID=$(this).attr('id');
        var cWidth=parseInt($(this).attr('data-cwidth'));        //容器宽度
        var cHeight=parseInt($(this).attr('data-cheight'));      //容器高度
        var width=parseInt($(this).attr('data-width'));          //图片宽度
        var height=parseInt($(this).attr('data-height'));        //图片高度
        var scale=parseFloat($(this).attr('data-scale'));        //图片高度
        var play=parseInt($(this).attr('data-play'));             //是否自动播放
        var speed=parseInt($(this).attr('data-speed'));           //旋转速度
        var delay=parseInt($(this).attr('data-delay'));           //间隔时间
        var vertical=$(this).attr('data-vertical');
        $('#'+sliderID).PicCarousel({
            'width':cWidth,
            'height':cHeight,
            'posterWidth':width,
            'posterHeight':height,
            'scale':scale,
            'speed':speed,
            'autoPlay':play,
            'delay':delay,
            'verticalAlign':vertical
        });
    });
});















