var $items = $('.nav-link');

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
            scrollTop: $(linkhref).offset().top - 100
        });

        e.preventDefault();
    });
});