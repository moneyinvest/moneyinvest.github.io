$(document).ready(function()
{

 $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var body_width= $('body').width();
    if(body_width<1200){
    var scroll_picca =$('.about_txt').offset().top;
    //если мы докрутили до нужного элемента 
    ;
    if ($(this).scrollTop() > scroll_picca) {
      // создаем эффекты и анимацию
      $('.navbar').fadeIn(500);
     
    }
    else 
    {
        $('.navbar').fadeOut(500);
        $('.menu_button').fadeIn(500);
    }
    
}
}); 
$('.menu_button').click(function()
{
    $(this).fadeOut(500);
    $('.navbar').fadeIn(500);
    $('.row').removeClass('justify-content-between');
    $('.row').addClass('justify-content-center');

})
})

