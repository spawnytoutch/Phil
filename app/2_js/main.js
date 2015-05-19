(function($) {

	$(document).ready(function() {

		setInterval(simpleSlider, 5000);

		function simpleSlider() {

			var curImg = $('.panoramaSlider .current');
			var nextImg = curImg.next('div');

			if (nextImg.length == 0) {
				nextImg = $('.panoramaSlider > div:first');
			}

			nextImg.animate({'right' : '0px'}, 500, function(){
				nextImg.addClass('current').removeAttr('style');
				curImg.removeClass('current');
			});

		}

	});

})(jQuery);