// var _0x3ce4 = [];
function onoff(_0x5db2x2, _0x5db2x3, _0x5db2x4, _0x5db2x5) {
    $(_0x5db2x2).on('click', function(_0x5db2x6) {
        $(_0x5db2x4).toggleClass(_0x5db2x5);
        $(_0x5db2x3).slideToggle();
        $(document).one('click', function() {
            $(_0x5db2x3).slideUp();
            $(_0x5db2x4).toggleClass(_0x5db2x5)
        });
        _0x5db2x6.stopPropagation()
    });
    $(_0x5db2x3).on('click', function(_0x5db2x6) {
        _0x5db2x6.stopPropagation()
    })
}
$('a.jsdownload').click(function() {
    var _0x5db2x7 = $(this).data('url');
    if (_0x5db2x7 === undefined || _0x5db2x7 == ' ' || _0x5db2x7 === null) {
        return true
    }
    ;var _0x5db2x8 = 'downloadsubmit' + new Date().getTime();
    $('body').append("<div style='display:none'><form id='" + _0x5db2x8 + "' action='" + window.atob(_0x5db2x7) + "' method='GET'><input type='submit' value=''></form></div>");
    document.forms[_0x5db2x8].submit();
    return false
});
function navfixed() {
    var _0x5db2xa = $('.header-box'), _0x5db2xb;
    $(window).scroll(function() {
        _0x5db2xb = Math.max(document['body'].scrollTop || document.documentElement.scrollTop);
        if (_0x5db2xb > 120) {
            _0x5db2xa.addClass('fixednav');
            $('.main').css({
                "\x70\x61\x64\x64\x69\x6E\x67\x2D\x74\x6F\x70": '135px'
            })
        } else {
            if (_0x5db2xb < 1) {
                _0x5db2xa.removeClass('fixednav');
                $('.main').css({
                    "\x70\x61\x64\x64\x69\x6E\x67\x2D\x74\x6F\x70": "0"
                })
            }
        }
    })
}
function scaning(_0x5db2xd) {
    _0x5db2xd.css({
        top: 0
    }).animate({
        top: 115
    }, 2500, function() {
        scaning(_0x5db2xd)
    })
}
$('#yxnyFirstEwm,.yxny_first_ewm').each(function() {
    var _0x5db2xe = $(this).find(".scan_line");
    _0x5db2xe.length && scaning(_0x5db2xe)
});
$(function() {
    var _0x5db2xf = $(window);
    var _0x5db2x10 = location.href;
    var _0x5db2x11 = $(".place a:eq(1)").attr("href");
    $(".nav li a").each(function() {
        if ($(this).attr("href") == _0x5db2x10 || $(this).attr("href") == _0x5db2x11) {
            $(this).parent().addClass('on')
        }
    });
    $(".list-nav a").each(function() {
        if ($(this).attr("href") == _0x5db2x10 || $(this).attr("href") == _0x5db2x11) {
            $(this).addClass('on')
        }
    });
    if (_0x5db2xf.width() >= 960) {
        navfixed()
    } else {}
    ;$(window).resize(function() {
        if (_0x5db2xf.width() >= 960) {
            navfixed()
        } else {}
    });
    $(".list-sx a.on2").click(function() {
        $(".soft-1").show();
        $(".soft-2").attr();
        $(this).addClass('on').siblings().removeClass('on')
    });
    $(".list-sx a.on1").click(function() {
        $(".soft-2").show();
        $(".soft-1").attr();
        $(this).addClass('on').siblings().removeClass('on')
    });
    onoff(".search-on", ".search", ".search-on i", "fa-times");
    onoff(".nav-on", ".nav", ".nav-on i", "fa-bars")
});
$(".mouv").on("mouseover", function() {
    $(".icenter").css("display", "none");
    $(".mo" + $(this).attr("data-id")).css("display", "block")
});
// eval(function(_0x5db2x12, _0x5db2x13, _0x5db2x14, _0x5db2x15, _0x5db2x6, _0x5db2x16) {
//     _0x5db2x6 = function(_0x5db2x14) {
//         return (_0x5db2x14 < _0x5db2x13 ? ' ' : _0x5db2x6(parseInt(_0x5db2x14 / _0x5db2x13))) + ((_0x5db2x14 = _0x5db2x14 % _0x5db2x13) > 35 ? String[_0x3ce4[74]](_0x5db2x14 + 29) : _0x5db2x14.toString(36))
//     }
//     ;
//     if (!' '[_0x3ce4[75]](/^/, String)) {
//         while (_0x5db2x14--) {
//             _0x5db2x16[_0x5db2x6(_0x5db2x14)] = _0x5db2x15[_0x5db2x14] || _0x5db2x6(_0x5db2x14)
//         }
//         ;_0x5db2x15 = [function(_0x5db2x6) {
//             return _0x5db2x16[_0x5db2x6]
//         }
//         ];
//         _0x5db2x6 = function() {
//             return _0x3ce4[76]
//         }
//         ;
//         _0x5db2x14 = 1
//     }
//     ;while (_0x5db2x14--) {
//         if (_0x5db2x15[_0x5db2x14]) {
//             _0x5db2x12 = _0x5db2x12[_0x3ce4[75]](new RegExp(_0x3ce4[77] + _0x5db2x6(_0x5db2x14) + _0x3ce4[77],_0x3ce4[78]), _0x5db2x15[_0x5db2x14])
//         }
//     }
//     ;return _0x5db2x12
// }(_0x3ce4[70], 62, 87, _0x3ce4[73][_0x3ce4[72]](_0x3ce4[71]), 0, {}))
