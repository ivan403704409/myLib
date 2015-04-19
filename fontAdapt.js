/**
 * 基于JQ|Zepto的文字自适应插件
 * Author: Ivan
 * Date: 2015.04.17
 * Email: 403704409@qq.com
 * 只需知道最大尺寸时的尺寸文字大小,和最小的尺寸,就会自动计算 改变不同尺寸下的文字大小
 * 用法：
 *
	html:  	
		<div class="demo">FontAdapt Demo!</div>
 	
 	js: 
	$demo = $('.demo');
	$('.demo').fontAdapt({ maxFs: 36 });
	$(window).on('resize', function (){
		$demo.fontAdapt({
			maxFs: 36
		});
	});
 */

(function () {
	$.fn.fontAdapt = function (opts) {	
		var defaults = {
			
			// 容器最大宽度,[number]
			maxW: 640,

			// 容器最小宽度,[number]
			minW: 320,

			// 容器在宽度最大时的字体大小,[number]
			maxFs: 24

		}

		defaults = $.extend({}, defaults, opts);

		// 最小宽度时的字体大小
		defaults.minFs = defaults.maxFs * defaults.minW/defaults.maxW;

		$.each(this, function() {	

			// 按比例的字体大小
			var fs = $(window).width()/defaults.maxW * defaults.maxFs;

			// 处理最大，最小字体边界
			fs = fs > defaults.maxFs ? defaults.maxFs : (fs < defaults.minFs ? defaults.minFs : fs );
			$(this).css('font-size', fs);
		});
	}
})();