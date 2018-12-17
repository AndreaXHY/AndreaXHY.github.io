(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="YizboesfbAipunbjm/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/wechatimg75-1920.jpeg' : 'images/wechatimg75-960.jpeg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/1-1920.jpeg' : 'images/1-960.jpeg');
var a='data-src'; if($('.js .slide2').hasAttr('src')) { a='src'; } $('.js .slide2').attr(a, (dpi>1) ? 'images/wechatimg69-1920.jpeg' : 'images/wechatimg69-960.jpeg');
var a='data-src'; if($('.js .slide3').hasAttr('src')) { a='src'; } $('.js .slide3').attr(a, (dpi>1) ? 'images/wechatimg72-1920.jpeg' : 'images/wechatimg72-960.jpeg');
var a='data-src'; if($('.js .slide4').hasAttr('src')) { a='src'; } $('.js .slide4').attr(a, (dpi>1) ? 'images/wechatimg71-1920.jpeg' : 'images/wechatimg71-960.jpeg');
var a='data-src'; if($('.js .slide5').hasAttr('src')) { a='src'; } $('.js .slide5').attr(a, (dpi>1) ? 'images/wechatimg70-1920.jpeg' : 'images/wechatimg70-960.jpeg');
$('.js-2').attr('src', (dpi>1) ? 'images/13-520.jpeg' : 'images/13-260.jpeg');
$('.js-3').attr('src', (dpi>1) ? 'images/xin-hua-bei-ying-462.jpeg' : 'images/xin-hua-bei-ying-231.jpeg');
$('.js-4').attr('src', (dpi>1) ? 'images/wechatimg78-482.jpeg' : 'images/wechatimg78-241.jpeg');
$('.js-5').attr('src', (dpi>1) ? 'images/wechatimg77-520.jpeg' : 'images/wechatimg77-260.jpeg');
$('.js-7').attr('src', (dpi>1) ? 'images/shang-hai-wai-guo-yu-da-xue_xiao-hui_png-64.png' : 'images/shang-hai-wai-guo-yu-da-xue_xiao-hui_png-32.png');
$('.js-8').attr('src', (dpi>1) ? 'images/wechatimg76-140.jpeg' : 'images/wechatimg76-70.jpeg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1800,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 5000});var wl = new woolite();
wl.init();
wl.addAnimation($('.js-6')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});