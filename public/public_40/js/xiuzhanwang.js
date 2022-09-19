
$(window).on("scroll", function() {
    if ($(document).scrollTop() > 600) {
        if (document.documentElement.clientWidth > 1268) {
            h = (document.documentElement.clientWidth / 2) + 620
        } else {
            h = document.documentElement.clientWidth - 70
        }
        ;$("#go-top").css({
            '\x6C\x65\x66\x74': h
        });
        $("#go-top").fadeIn(function() {
            $(this).removeClass("dn")
        })
    } else {
        $("#go-top").on(function() {
            $(this).addClass("dn");
        })
    }
});
$("#go-top .go").on("click", function() {
    $("html,body").animate({
        '\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70': 0
    }, 500)
});
$("#go-top .share").hover(function() {
    $(".shareDiv").show()
}, function() {
    $(".shareDiv").hide()
});

