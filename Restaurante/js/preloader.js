var $content = $('#content');
var $preloader = $('#preloader');
var $icon = $('#preloader-icon');
$content.hide();

window.onload = function(){
    $preloader.hide();
    $content.show();
    $content.removeClass("opacity");
}