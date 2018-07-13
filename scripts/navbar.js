(function () {
	var navHandler = {
		el: document.querySelectorAll('[src$="/navbar.js"]')
	}
	console.log("navHandler.el = " + navHandler.el);
	if (!navHandler.el.length) {
		alert("something ran navbar.js, but navbar.js was unable to figure out who called it.  It should be called with <script src='/navbar.js'></script>");
	}
	navHandler.el = navHandler.el[0];

	var navbarActive = navHandler.el.getAttribute('navbar-active');
	var parentDiv = document.createElement('div');

	//I use a back tick here so I don't have to worry about line breaks
	parentDiv.innerHTML = `
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="navbar-brand" href="#">Jordan Miller</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
	 aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item indexActive">
				<a class="nav-link" href="/index.html">Home
					<span class="sr-only">(current)</span>
				</a>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle brewActive" href="contact.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Brewing</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item brewHomeActive" href="./brewing/brewingHome.html">Brewing Home</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item brewSheetActive" href="./brewing/brewSheet.html">Brew Sheet</a>
					<a class="dropdown-item brewChoresActive" href="./brewing/beerChores.html">Chores</a>
					<a class="dropdown-item brewHistActive" href="./brewing/brewingHistory.html">History</a>
					<a class="dropdown-item brewToolsActive" href="./brewing/brewingTools.html">Tools</a>
					<a class="dropdown-item brewScheduleActive" href="./brewing/brewingSchedule.html">Schedule</a>
				</div>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle projectsActive" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
				 aria-expanded="false">Projects</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item beerCaddyActive" href="./personalProjects/beerCaddy.html">Beer Caddy</a>
					<a class="dropdown-item securitySystemActive" href="./personalProjects/securitySystem.html">Security System</a>
					<a class="dropdown-item webDevelopmentActive" href="./personalProjects/webDevelopment.html">Web Development</a>
				</div>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle sportsActive" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
				 aria-expanded="false">Sports</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item famFootballPoolActive" href="./sports/sportsFamilyFootballPool.html">Family Football Pool</a>
					<a class="dropdown-item marchMadnessActive" href="./sports/marchMadness.html">March Madness</a>
				</div>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle tutorinActive" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
				 aria-expanded="false">Tutoring</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item tutoringHomeActive" href="./tutoring/tutoringHome.html">Tutoring Home</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item tutoringAlgebraActive" href="./tutoring/tutoringAlgebra.html">Algebra</a>
					<a class="dropdown-item tutoringStatisticsActive" href="./tutoring/tutoringStatistics.html">Statistics</a>
					<a class="dropdown-item tutoringCalculusActive" href="./tutoring/tutoringCalculus.html">Calculus</a>
					<a class="dropdown-item tutoringProgramming" href="./tutoring/tutoringProgramming.html">Programming</a>
				</div>
			</li>
			<li class="nav-item">
				<a class="nav-link contactActive" href="contact.html">Contact</a>
			</li>
		</ul>
		<form class="form-inline my-2 my-lg-0">
			<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
			<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
	</div>
</nav>	
`;
	if (navbarActive) {
		var activeEls = parentDiv.querySelectorAll(navbarActive);
		var i;
		for (i = 0; i < activeEls.length; i++) {
			activeEls[i].classList.add('active');
		}
	}
	navHandler.el.replaceWith(parentDiv);
})();