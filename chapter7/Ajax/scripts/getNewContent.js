function getNewContent() {
    var requset = getHTTPObject();
    if (requset) {
        requset.open("GET", "example.txt", true);
        requset.onreadystatechange = function () {
            if (requset.readyState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(requset.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };
        requset.send(null);
    } else {
        alert('Sorry, your browser doesn\'t support XMLHTTPRequset');
    }
}
addLoadEvent(getNewContent);