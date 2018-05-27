function createRequest() {
	try {
		request = new XMLHttpRequset();
	} catch (tryMS) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (otherMS) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (falid) {
				request = null;
			}
		}
	}
	return request;
}