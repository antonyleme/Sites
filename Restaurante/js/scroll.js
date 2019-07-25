var $items = $('.link-scroll');

console.log('teste')

$items.bind('click', function(){
    $items.each(function(){
        $(this).removeClass('active');
    });
    $(this).addClass('active');
});

$(document).ready(function(){
    $('.link-scroll').click(function(e){
        
        var linkhref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkhref).offset().top - 60
        });

        e.preventDefault();
    });
});

$(document).scroll(function(){
    $logodesk = $('.logo-desk');
    $logoscroll = $('.logo-scroll');
    $logobg =  $('.logo-desk-bg');
	if($(document).scrollTop() == 0){
        $logodesk.show();
        $logoscroll.hide();
        $logobg.show();
	}else{
        $logodesk.hide();
        $logoscroll.show();
        $logobg.hide();
	}
});