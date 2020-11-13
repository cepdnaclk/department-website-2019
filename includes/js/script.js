




function setSize() {
    var body = $("body").height();
    var win = $(window).height();
    var win_width = $(document).width();
 
    $("#carousel").css('margin-top', '150px');
    if (body < win) {
        $("body").height(win);
        //$("#main").height(win - $("#footerContainer").height() - $("#myCarousel").height());
        $("#indexDetails").height($("body").height() - $("#footerContainer").height() - $("#myCarousel").height() + 180);
    } else {
        $("body").css('height', 'auto');
        $("#mainBody").css('height', 'auto');
        $("#footerContainer").css('position', 'relative');
        $("#indexDetails").css('height', 'auto');

    }
}

$(document).ready(function () {
    setSize();
});



$(window).on('resize', function () {
    setSize();
   
    //alert($(window).width());
    if ($(window).width() < 750) {
        $("#mainBody").css('background-color', 'black');
        $("body").css('height', 'auto');
        $("#mainBody").css('height', 'auto');
        $("#indexDetails").css('height', 'auto');
    } else {

        $("#mainBody").css('background-color', '');

    }


});