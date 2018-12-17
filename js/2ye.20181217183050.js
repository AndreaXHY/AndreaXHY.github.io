(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="YizboesfbAipunbjm/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-17').attr('src', (dpi>1) ? 'images/poster-904.jpg' : 'images/poster-452.jpg');
$('.js-18').attr('src', (dpi>1) ? 'images/poster-904-1.jpg' : 'images/poster-452-1.jpg');
$('.js-19').attr('src', (dpi>1) ? 'images/poster-904-2.jpg' : 'images/poster-452-2.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/poster-904-3.jpg' : 'images/poster-452-3.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/poster-904-4.jpg' : 'images/poster-452-4.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/poster-904-5.jpg' : 'images/poster-452-5.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/poster-904-6.jpg' : 'images/poster-452-6.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/poster-904-7.jpg' : 'images/poster-452-7.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/poster-904-8.jpg' : 'images/poster-452-8.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/poster-904-9.jpg' : 'images/poster-452-9.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/wechatimg76-174.jpeg' : 'images/wechatimg76-87.jpeg');
$('.js-28').attr('src', (dpi>1) ? 'images/shang-hai-wai-guo-yu-da-xue_xiao-hui_png-80.png' : 'images/shang-hai-wai-guo-yu-da-xue_xiao-hui_png-40.png');}else{$('.js-17').attr('src', (dpi>1) ? 'images/poster-724.jpg' : 'images/poster-362.jpg');
$('.js-18').attr('src', (dpi>1) ? 'images/poster-724-1.jpg' : 'images/poster-362-1.jpg');
$('.js-19').attr('src', (dpi>1) ? 'images/poster-724-2.jpg' : 'images/poster-362-2.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/poster-724-3.jpg' : 'images/poster-362-3.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/poster-724-4.jpg' : 'images/poster-362-4.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/poster-724-5.jpg' : 'images/poster-362-5.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/poster-724-6.jpg' : 'images/poster-362-6.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/poster-724-7.jpg' : 'images/poster-362-7.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/poster-724-8.jpg' : 'images/poster-362-8.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/poster-724-9.jpg' : 'images/poster-362-9.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/wechatimg76-140.jpeg' : 'images/wechatimg76-70.jpeg');
$('.js-28').attr('src', (dpi>1) ? 'images/shang-hai-wai-guo-yu-da-xue_xiao-hui_png-64.png' : 'images/shang-hai-wai-guo-yu-da-xue_xiao-hui_png-32.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});