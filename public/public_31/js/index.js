$(document).ready(function(){
    /* 浏览器判断 */
    (function(){
        var DEFAULT_VERSION = "8.0",
            ua = navigator.userAgent.toLowerCase(),
            isIE = ua.indexOf("msie") > -1,
            safariVersion;

        if(isIE){
            safariVersion =  ua.match(/msie ([\d.]+)/)[1];
            if(safariVersion <= DEFAULT_VERSION ){
                document.write('请使用 IE9 及以上版本浏览器查看网页！');
                document.execCommand("Stop");
            }
        }
    })();

    /* focus rank */
    (function(){
        $('.focus-rank-tab span').hover(function(){
            focusRank = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.focus-rank-list div').eq(focusRank).addClass('active').siblings().removeClass('active');
        },function(){});

        /* ranking */
        $('.layer-column .ranking li').hover(function(){
            $(this).addClass('active').siblings().removeClass('active');
        },function(){});
    })();

    /* 头条下轮播图 */
    (function(){
        var idx,
            swipeLen,
            timerFocus,
            focusADom = $('.focus-container .box a'),
            focusSpanDom = $('.focus-container .pagination span');

        swipeLen = focusADom.length;

        function focusContainer(){

            idx = $('.focus-container .box .active').index();
            turnOpacity(idx);
        }

        function turnOpacity(idx){
            if(idx < swipeLen){
                idx++;
                focusADom.eq(idx).fadeIn().addClass('active').siblings().removeClass('active').fadeOut();
                focusSpanDom.eq(idx).addClass('active').siblings().removeClass('active');
                $('.focus-container .text p').eq(idx).addClass('active').siblings().removeClass('active');

                if(idx === swipeLen){
                    idx = 0;
                    focusADom.eq(idx).fadeIn().addClass('active').siblings().removeClass('active').fadeOut();
                    focusSpanDom.eq(idx).addClass('active').siblings().removeClass('active');
                    $('.focus-container .text p').eq(idx).addClass('active').siblings().removeClass('active');
                }
            }
        }

        focusSpanDom.hover(function () {
            idx = $(this).index();
            idx--;
            turnOpacity(idx);
        },function(){});

        $('.focus-container').hover(function(){
            clearInterval(timerFocus);
        },function(){
            timerFocus = setInterval(focusContainer, 3000);
        });

        timerFocus = setInterval(focusContainer, 3000);

        $(".focus-container .prev").on('click',function(){
            idx = $('.focus-container .box .active').index();

            if(idx > 0){
                idx--;
                focusADom.eq(idx).fadeIn().addClass('active').siblings().removeClass('active').fadeOut();
                focusSpanDom.eq(idx).addClass('active').siblings().removeClass('active');
                $('.focus-container .text p').eq(idx).addClass('active').siblings().removeClass('active');

            }else{
                idx = swipeLen - 1;
                focusADom.eq(idx).fadeIn().addClass('active').siblings().removeClass('active').fadeOut();
                focusSpanDom.eq(idx).addClass('active').siblings().removeClass('active');
                $('.focus-container .text p').eq(idx).addClass('active').siblings().removeClass('active');
            }
        });

        $(".focus-container .next").on('click',function(){
            idx = $('.focus-container .box .active').index();

            if(idx < swipeLen){

                if(idx === swipeLen - 1){
                    idx = 0;
                }else{
                    idx++;
                }
                focusADom.eq(idx).fadeIn().addClass('active').siblings().removeClass('active').fadeOut();
                focusSpanDom.eq(idx).addClass('active').siblings().removeClass('active');
                $('.focus-container .text p').eq(idx).addClass('active').siblings().removeClass('active');
            }
        });
    })();

    /* 名人轮播图 */
    (function(){
        var timerHof,
            hofContainerA = $('.hof-container a');

        function hofContainer(){
            idx = $('.hof-container .active').index();
            swipeLen = hofContainerA.length;

            if(idx < swipeLen){
                idx++;
                if(idx === swipeLen){
                    idx = 0;
                    hofContainerA.eq(idx).fadeIn().addClass('active').siblings().removeClass('active').fadeOut();
                    $('.hof .pagination span').eq(idx).addClass('active').siblings().removeClass('active');
                    $('.layer-text a').eq(idx).addClass('active').siblings().removeClass('active');
                }else{
                    hofContainerA.eq(idx).fadeIn().addClass('active').siblings().removeClass('active').fadeOut();
                    $('.hof .pagination span').eq(idx).addClass('active').siblings().removeClass('active');
                    $('.layer-text a').eq(idx).addClass('active').siblings().removeClass('active');
                }
            }
        }

        $('.hof .pagination span').hover(function(){
            idx = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.hof-container a').eq(idx).fadeIn().addClass('active').siblings().removeClass('active').fadeOut();
            $('.layer-text a').eq(idx).addClass('active').siblings().removeClass('active');
        },function(){});

        timerHof = setInterval(hofContainer, 3000);

        $('.hof').hover(function(){
            clearInterval(timerHof);
        },function(){
            timerHof = setInterval(hofContainer, 3000);
        });
    })();

    /* 返回顶部 */
    (function(){
        var scrollTop,
            timerScrollTop;

        $(window).scroll(function(){
            scr();
        });

        function scr() {
            scrollTop = $(window).scrollTop()+100;

            if(scrollTop >= 600){
                $('.go-top').fadeIn(400);
            }else{
                $('.go-top').fadeOut(200);
            }
        }

        scr();

        $('.go-top').on('click',function(){
            timerScrollTop = setInterval(goTop, 100);
        });

        function goTop(){

            scrollTop = $(window).scrollTop();

            $('html, body').animate({scrollTop: parseFloat(scrollTop / 3)}, 100);

            if(scrollTop <= 0){
                clearInterval(timerScrollTop);
            }
        }
    })();

    /* 专题轮播 */
    (function(){
        var clone,
            showNum = 3,
            sinNum,
            timerSpecial = setInterval(autoRun, 2000);

        var specialColumnLen = $('.special-column').length;

        if(specialColumnLen <= showNum) {
            sinNum = specialColumnLen % showNum;

            if(sinNum === (2 || 0)){
                sinNum = 1;
            }else if(sinNum === 1){
                sinNum = 3;
            }

            for (var x = 0; x < sinNum; x++){

                for(var y = 0; y < specialColumnLen; y++){
                    clone = $('.special-column').eq(y).clone();
                    $('.special-column:last').after(clone);
                }
            }
        }

        function autoRun(){
            $('.special-swipe').stop().animate({marginLeft: -258}, 500, function(){
                $('.special-swipe').css('marginLeft', '0');
                clone = $('.special-column:first').clone();
                $('.special-column:first').remove();
                $('.special-column:last').after(clone);
            })
        }

        $('.special-container').hover(function(){
            clearInterval(timerSpecial);
        },function(){
            timerSpecial = setInterval(autoRun, 2000);
        });

        $('.special-container .prev').on('click', function () {
            autoRun();
        });

        $('.special-container .next').on('click', function () {
            $('.special-swipe').css('marginLeft', -258);
            clone = $('.special-column:last').clone();
            $('.special-column:first').before(clone);
            $('.special-column:last').remove();

            $('.special-swipe').stop().animate({marginLeft: 0}, 500, function(){

                $('.special-swipe').css('marginLeft', 0);
            });
        });
    })();

    /* 图库内页 */
    (function(){
        var imgSrc,
            index,
            showImgNum = 8,
            indexNum,
            itemMargin,
            len = $('.items-box .items div').length,
            itemWidth = parseInt($('.items-box .items div').css('width')),
            itemBorderRadius = parseInt($('.items-box .items div').css('borderRadius')),
            itemMarginRight = parseInt($('.items-box .items div').css('marginRight')),
            itemWidthAll;

        $('.paging-number .all').text(len);

        $('.pic-container .items div').on('click', function(){
            index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            imgSrc = $(this).children('img').attr('src');

            $('.pic-container .show img').attr('src', imgSrc);
            $('.paging-number .num').text(++index);
        });

        $('.show-list .left-btn').on('click', function () {
            leftImg()
        });

        $('.pic-container .layer-left').on('click', function () {
            leftImg()
        });

        $('.show-list .right-btn').on('click', function () {
            rightImg()
        });

        $('.pic-container .layer-right').on('click', function () {
            rightImg()
        });

        function leftImg(){
            index = $('.items-box .items .active').index();

            if(index > 0){
                index--;
                imgSrc = $('.items-box .items .active').prev().children('img').attr('src');
                $('.items-box .items div').eq(index).addClass('active').siblings().removeClass('active');
                $('.paging-number .num').text(++index);
            }

            if(index > showImgNum - 1){
                index = index - showImgNum;

                itemWidthAll = itemWidth + itemMarginRight + itemBorderRadius * 2;

                itemMargin = itemWidthAll * 8;

                indexNum = -(itemWidthAll * index - itemMargin);

                $('.items-box .items').stop().animate({marginLeft: -(itemMargin - indexNum)});
            }

            $('.pic-container .show img').attr('src', imgSrc);
        }

        function rightImg(){
            index = $('.items-box .items .active').index();

            if(index < len - 1){
                console.log(index)

                index++;
                imgSrc = $('.items-box .items .active').next().children('img').attr('src');
                $('.items-box .items div').eq(index).addClass('active').siblings().removeClass('active');
                $('.paging-number .num').text(++index);

                if(index > showImgNum){
                    indexNum = index - showImgNum;
                    itemWidthAll = itemWidth + itemMarginRight + itemBorderRadius * 2;

                    itemMargin = itemWidthAll * 8;

                    indexNum = -(itemWidthAll * index - itemMargin);

                    $('.items-box .items').stop().animate({marginLeft: indexNum});
                }
            }

            $('.pic-container .show img').attr('src', imgSrc);
        }

        if($('.describe .text').html() === ''){
            $('.describe').hide();
        }
    })();

    /* 人物关系 */
    (function(){
        function imgTurn(type){
            var len = $('.relationships div').length;
            var idx = $('.relationships .active').index();

            if(type !== 0){
                if(idx >= 0) {
                    idx--;
                    $('.relationships div').eq(idx).addClass('active').siblings().removeClass('active');

                    if(idx < 0){
                        $('.relationships div').eq(len - 1).addClass('active').siblings().removeClass('active');
                    }
                }
            }else {
                if(idx < len){
                    idx++;
                    $('.relationships div').eq(idx).addClass('active').siblings().removeClass('active');
                }

                if(idx === len){
                    $('.relationships div').eq(0).addClass('active').siblings().removeClass('active');
                }

                console.log('get')
            }
        }


        $('.btn-l').on('click', function(){
            imgTurn()
        });

        $('.btn-r').on('click', function(){
            imgTurn(0)
        });
    })();

    $('.relevance .fl a').on('click', function(){
        var idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');

        $('.relevance .box section').eq(idx).addClass('active').siblings().removeClass('active');
    })
});