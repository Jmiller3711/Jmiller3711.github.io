(function(){
	var navHandler = {
		el : document.querySelectorAll('[src="./javascript/navbar.js"]')
	}
	console.log("navHandler.el = " + navHandler.el );
	if(!navHandler.el.length) {
		alert("something ran navbar.js, but navbar.js was unable to figure out who called it.  It should be called with <script src='/navbar.js'></script>");
	}
	navHandler.el = navHandler.el[0];
	navHandler.gotNav = function(event) {
		var navbarActive = this.el.getAttribute('navbar-active');
		var parentDiv = document.createElement('div');
		parentDiv.innerHTML = event.target.response;
		if(navbarActive){
			var activeEls = parentDiv.querySelectorAll(navbarActive);
			var i;
			for(i=0; i<activeEls.length; i++){
				activeEls[i].classList.add('active');
			}
		}
		this.el.replaceWith(parentDiv);
	}
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", navHandler.gotNav.bind(navHandler));
	oReq.open("GET", "/navbar.html");
	oReq.send();
})();