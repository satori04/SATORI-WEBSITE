$(document).ready(function() {

    $(".links a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1200,
            easing: "swing"
        });
        return false;
    });

});