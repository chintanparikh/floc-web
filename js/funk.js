$(document).ready(function()
{
    $(".event img").hover(function(img, e)
    {
        $(this).toggleClass("grayscale");
    });
});