$(function(){
	$('div.chapter a[href*="wikipedia"]').attr({
		rel: 'external',
		title: function(){
			return 'Learn more ' + $(this).text() + ' at wikipedia';
		},
		id: function(index, oldValue){
			return 'wikilink-' + index;
		}
	});
	$('<a href="#top">back to top</a>').insertAfter('div.chapter p');
	$('<a id="top"></a>').prependTo('body');
	/*$('span.footnote')
		.insertBefore('#footer')
		.wrapAll('<ol id="notes"></ol>')
		.wrap('<li></li>');*/
	var $notes = $('<ol id="notes"></ol>')
		.insertBefore('#footer');
	$('span.footnote').each(function(index){
		$(this)
			.before([
				'<a href="#footnote-',
				index + 1,
				'" id="context-',
				index + 1,
				'" class="context">',
				'<sup>',
				index + 1,
				'</sup></a>'
			].join(''))
			.appendTo($notes)
			.append([
				'&nbsp;(<a href="#content-',
				index + 1,
				'">context</a>)'
			].join(''))
			.wrap('<li id="footnote-' + (index + 1) + '"></li>');
		//$('<sup>' + (index + 1) + '</sup>').insertBefore(this);
		//$(this).appendTo($notes).wrap('<li></li>');
	});
	$('span.pull-quote').each(function(index){
		var $parentParagraph = $(this).parent('p');
		$parentParagraph.css('position', 'relative');
		var $cloneCopy = $(this).clone();
		$cloneCopy
			.addClass('pulled')
			.find('span.drop')
				.html('&hellip;')
			.end()
			//.text($cloneCopy.text())
			.prependTo($parentParagraph);
	});
	$('#f-author').click(function() {
		$('#f-author').wrapInner('<strong></strong>');
	});
});