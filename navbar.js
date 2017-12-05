(function(){
	var navHandler = {
		el : document.querySelectorAll('[src="/navbar.js"]')
	}
	if(!navHandler.el.length) {
		alert("something ran navbar.js, but navbar.js was unable to figure out who called it.  It should be called with <script src='/navbar.js'></script>");
	}
	navHandler.el = navHandler.el[0];
	navHandler.gotNav = function(event) {
		var parentDiv = document.createElement('div');
		parentDiv.innerHTML = event.target.response;
		this.el.replaceWith(parentDiv);
		console.log(this.responseText);
	}
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", navHandler.gotNav.bind(navHandler));
	oReq.open("GET", "/navbar.html");
	oReq.send();
})();