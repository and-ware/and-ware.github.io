jQuery(document).ready(function($) {
	$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');// 这行是 Opera 的补丁, 少了它 Opera 是直接用跳的而且画面闪烁 by willin

	$('#about').click(function(){
		$body.animate({scrollTop: $('.four1').offset().top}, 500);
		return false;// 返回false可以避免在原链接后加上#
	});
	$('#service').click(function(){
		$body.animate({scrollTop: $('.ask1').offset().top}, 500);
		return false;// 返回false可以避免在原链接后加上#
	});
	$('#contacts').click(function(){
		$body.animate({scrollTop: $('.footer').offset().top}, 500);
		return false;// 返回false可以避免在原链接后加上#
	});
});