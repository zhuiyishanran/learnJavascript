$(function(){
	var $speech = $('div.speech');
	var defaultSize = $speech.css('fontSize');
	$('#switcher button').click(function(){
		var num = parseFloat($speech.css('fontSize'));
		if (this.id == 'switcher-large'){
			num *= 1.4;
		} else if (this.id == 'switcher-small'){
			num /= 1.4;
		} else {
			num = parseFloat(defaultSize);
		}
		$speech.animate({fontSize:num + 'px'}, 'fast');
	});
	var $firstPara = $('p').eq(1);
	$firstPara.hide();
	$('a.more').click(function(event){
		event.preventDefault();
		/*if ($firstPara.is(':hidden')){
			$firstPara.slideDown('slow');
			$(this).text('read less');
		} else {
			$firstPara.slideUp('slow');
			$(this).text('read more');
		}*/
		//$firstPara.slideToggle('slow');
		$firstPara.animate({opacity:'toggle', height:'toggle'}, 'slow');
		var $link = $(this);
		if ($link.text() == 'read more'){
			$link.text('read less');
		} else {
			$link.text('read more');
		}
		
		});
	$('div.label').click(function(){
			var paraWidth = $('div.speech p').outerWidth();
			var $switcher = $(this).parent();
			var switcherWidth = $switcher.outerWidth();
			$switcher
				.css({position: 'relative'})
				.fadeTo('fast', 0.5)
				.animate({left: paraWidth - switcherWidth}, {
					duration: 'slow',
					queue: false
				})
				.fadeTo('slow', 1.0)
				.slideUp('slow', function(){
					$switcher.css({backgroundColor: '#abcdef'});
				})
				.slideDown('slow')
	});
	$('p').eq(2)
		.css('border', '1px solid #333')
		.click(function(){
			var $clickedItem = $(this);
			$clickedItem.next().slideDown('slow', function(){
				$clickedItem.slideUp('slow');
			});
		});
	$('p').eq(3).css('backgroundColor', '#ccc').hide();
	$('#container').hide();
	$('#container').show('slow');
	$('p').mouseover(function(){
		$(this).css('backgroundColor', '#abcdef');
	});
	$('p').mouseout(function(){
		$(this).css('backgroundColor', '');
	});
	$('h2').click(function(){
		var $h2 = $('h2');
		$h2.fadeTo('fast', 0.5).css('margin-left', '20px')
		.queue($speech.fadeTo('slow', 0.5));
	});
});