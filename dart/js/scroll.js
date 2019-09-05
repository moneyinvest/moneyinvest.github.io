$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$(".menu li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
        if(destination>window.innerHeight)
        {
            $("body,html").animate({scrollTop: destination }, 1200);
        }
        else 
        $("body,html").animate({scrollTop: destination }, 800);
	});
});