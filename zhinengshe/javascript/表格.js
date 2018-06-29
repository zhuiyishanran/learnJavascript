window.onload = function () {
	//var atext = document.getElementsByTagName('input')[0];
	//var atab = document.getElementsByTagName('tbody');
	var oTab = document.getElementById('tab1');
	var oldColor = '';
	var tBodies = document.getElementsByTagName('tbody');
	var rows = document.getElementsByTagName('tr');

	for (var i=0; i<oTab.tBodies[0].rows.length; i++){
		oTab.tBodies[0].rows[i].onmouseover = function() {
			oldColor = this.style.background;
			this.style.background = 'green';
		};
		oTab.tBodies[0].rows[i].onmouseout = function() {
			this.style.background = oldColor;
		};
		if (i%2==0) {
			oTab.tBodies[0].rows[i].style.background = '';
		} else {
			oTab.tBodies[0].rows[i].style.background = '#555';
		}
	}
};