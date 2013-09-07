$(document).ready(function() {
	timer = 0;
	seconds_since_start = 10800;
	$('#line').width(seconds_since_start);
    timer++;
    circles = Math.floor(seconds_since_start / 600);
    while (circles > 0)
    {
    	$('.timeline').append("<div class='dot' style='left: " + (circles * 600) + "px'>&nbsp;</dot>");
    	circles--;
    }
	$('.timeline').width($('#line').width() + 300);
	$('html, body').animate({scrollLeft: $(document).width()}, 800);
	setInterval(function() {
		$('#line').width($('#line').width() + 1);
		$('.timeline').width($('.timeline').width() + 1);
        $(window).scrollLeft($(window).scrollLeft() + 1);
        timer++;
        if (timer % 600 == 0)
        {
        	$('.timeline').append("<div class='dot' style='left: " + timer + "px'>&nbsp;</dot>");
        }
	}, 1000)
})