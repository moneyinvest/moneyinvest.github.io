$(document).ready(function(){
var $slider_txt1= $('.slider_txt1');
var $slider_txt2= $('.slider_txt2');
var $slider_txt3= $('.slider_txt3');


$('.vertical_slider1').click(function(){
    if($('.slider_txt2').css('display')== 'none'&& $('.slider_txt3').css('display')== 'none'){
    $($slider_txt1).slideToggle(1000);
    }
    else 
    {
    $('.slider_txt2').slideUp(1000);
    $('.slider_txt3').slideUp(1000);
    $($slider_txt1).slideToggle(1000); 
    
    }
    });
 $('.vertical_slider2').click(function(){
    if($('.slider_txt1').css('display')== 'none'&& $('.slider_txt3').css('display')== 'none'){
    $($slider_txt2).slideToggle(1000);
    }
    else 
    {
    $('.slider_txt1').slideUp(1000);
    $('.slider_txt3').slideUp(1000);
    $($slider_txt2).slideToggle(1000); 
    }
    });

    $('.vertical_slider3').click(function(){
    if($('.slider_txt2').css('display')== 'none'&&$('.slider_txt1').css('display')== 'none'){
    $($slider_txt3).slideToggle(1000);
    }
    else 
    {
    $('.slider_txt1').slideUp(1000)
    $('.slider_txt2').slideUp(1000)
    $($slider_txt3).slideToggle(1000); 
    }
    
    });
    });
