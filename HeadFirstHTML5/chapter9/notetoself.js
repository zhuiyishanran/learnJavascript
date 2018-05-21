window.onload = init;

function init() {
	var button = document.getElementById('add_button');
	button.onclick = createSticky;

	var stickiesArray = localStorage["stickiesArray"];
	if (!stickiesArray) {
		stickiesArray = [];
		localStorage.setItem("stickiesArray", stickiesArray);
	}

	for (var i = 0; i < stickiesArray.length; i++) {
		var key = stickiesArray[i];
		var value = localStorage[key];
		addStickyToDOM(value);
	}
}

function createSticky(){
	var value = document.getElementById("note_text").value;
	var key = "sticky_" + localStorage.length;
	localStorage.setItem(key, value);

	addStickyToDOM(value);
}

function addStickyToDOM(value) {
	var stickies = document.getElementById('stickies');
	var sticky = document.createElement('li');
	var span = document.createElement('span');
	span.setAttribute("class", "sticky");
	span.innerHTML = value;
	sticky.appendChild(span);
	stickies.appendChild(sticky);
}

function clearStickyNotes() {
	localStorage.clear();
	var stickyList = document.getElementById("stickies");
	var stickies = stickyList.childNodes;
	for (var i = stickies.length-1; i >= 0; i--) {
		stickyList.removeChild(stickies[i]);
	}
}