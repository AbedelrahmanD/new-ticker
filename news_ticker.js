$.fn.news_ticker = function (options = {}) {
    var direction;
    var r_direction;
    if (options.direction == "right") {
        direction = "left";
        r_direction = "right";
        $(this).parent().css("direction", "ltr");
    } else {
        direction = "right";
        r_direction = "left";
        $(this).parent().css("direction", "rtl");
    }

    $(this).css({
        [r_direction]: "100%",
        [direction]: "unset",
    }).animate({
        [direction]: "100%",
        [r_direction]: "unset",
    }, {
        duration: parseInt($(this).width()) * options.speed,
        easing: 'linear',
        complete: function () {
            $(this).news_ticker(options);
        }
    });
};