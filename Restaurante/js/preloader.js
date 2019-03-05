var $content = $('#content');
var $preloader = $('#preloader');
$content.hide();

window.onload = function(){
    $preloader.hide();
    $content.show();
    $content.removeClass("opacity");
}