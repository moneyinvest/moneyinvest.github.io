$(document).ready(function()
{
    var destination=$('.about_us_inner-about_button').offset().top;
    $(window).scroll(function()
    {
        if($(this).scrollTop()>destination)
        {
            $('.nav_menu_button').fadeIn();
            $('.logo').fadeIn();
            $('.menu').fadeOut();
        }
    })
    $('.nav_menu_button').click(function()
    {
        $('.nav_menu_button').fadeOut();
        $('.logo').fadeOut();
        $('.menu').fadeIn(1000);
    })
})