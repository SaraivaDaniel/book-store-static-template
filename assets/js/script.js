var onResize = function() {
    $("body").css("padding-top", $(".navbar.fixed-top").outerHeight());
};

$(document).ready(function() {
    $(window).resize(onResize);
    onResize();
});