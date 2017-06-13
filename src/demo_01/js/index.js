require('../index.html');
require('../css/style.css');
$(function(){
	window.onload = function(){
		var output = $('.output');
		$('.input').on('change',function(){
			output.html($(this).val());
		})
	}
});
