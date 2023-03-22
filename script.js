/*  =========================================================================
	 DEMO
	========================================================================= */

var tour = 0;
var nbMainButtonClicks = 0;
var isFullscreen = false;

async function updateInputHint(text)
{
	document.getElementById("clue").classList.add("blurred");
	await new Promise(r => setTimeout(r, 1000));
	document.getElementById("clue").innerHTML = "<span id='clue-text'>" + text + "</span>";
	document.getElementById("clue").classList.remove("blurred");
}

async function nextTour() {
	switch(tour) {
		case 0 :
			document.title = "??? Ah lala ... C'est quoi au loin ???";
			document.getElementById("lay1").classList.remove("displayed-blur");
			await new Promise(r => setTimeout(r, 1));
			document.getElementById("lay2").classList.add("blurred");
			document.getElementById("video-background").classList.remove("not-here");
			await new Promise(r => setTimeout(r, 1));
			document.getElementById("video-background").classList.remove("hidden");
			await updateInputHint("Encore, n'ai crainte ...");
			tour++;
			break;
		case 1 :
			document.title = "... Bon, on a saisit que c'était la Tarzanne ...";
			document.getElementById("lay1").classList.add("blurred");
			document.getElementById("video-background").classList.remove("displayed-blur");
			document.getElementById("lay2").classList.add("hidden");
			document.getElementById("lay1").classList.add("hidden");
			await new Promise(r => setTimeout(r, 2000));
			await updateInputHint("");
			document.getElementById("main").classList.remove("not-here");
			document.getElementById("main-shadow").classList.remove("not-here");
			document.getElementById("main").classList.remove("hidden");
			document.getElementById("main-shadow").classList.remove("hidden");
			document.getElementById("clue").classList.add("not-here");
			await new Promise(r => setTimeout(r, 2000));
			document.getElementById("main").classList.remove("blurred");
			document.getElementById("main-shadow").classList.remove("blurred");
			document.title = "!!! La TARZANNE nouvelle arrive !!!";
			tour++;
			break;

		default :
			break;
	}
}


async function tryFullscreen() {
	try
	{
		if(document.fullscreenEnabled && !isFullscreen) {
			document.getElementsByTagName("body")[0].requestFullscreen();
			isFullscreen = true;
		}
	}
	catch(e) { console.log("fullscreen failed") }
}

function videoDelay(id, duration) {
	var video = document.getElementById(id);
	video.pause();
	setTimeout(function() {
		video.play();
	}, duration);
}


async function pageLoading() {
	window.scrollTo(0, 1);
	tryFullscreen();
	await new Promise(r => setTimeout(r, 4000));
	return;
}

async function pageOpening() {
	await pageLoading();

	// VIDEO DELAY
	videoDelay("vid1",0);
	videoDelay("vid2",700);
	videoDelay("vid3",1400);
	videoDelay("vid4",2100);
	videoDelay("vid5",2800);
	videoDelay("vid6",3500);

	// PAGE LOADING
	await new Promise(r => setTimeout(r, 1));
	document.getElementById("loader").classList.add("blurred");
	await new Promise(r => setTimeout(r, 1));
	document.getElementById("loader").classList.add("hidden");
	await new Promise(r => setTimeout(r, 1));
	document.getElementById("loader").classList.add("not-here");
	await new Promise(r => setTimeout(r, 1));
	document.getElementById("lay1").classList.remove("not-here");
	document.getElementById("lay1").classList.remove("hidden");
	await new Promise(r => setTimeout(r, 300));
	document.getElementById("lay1").classList.remove("blurred");

	document.getElementById("lay2").classList.remove("not-here");
	document.getElementById("lay2").classList.remove("hidden");
	await new Promise(r => setTimeout(r, 300));
	document.getElementById("lay2").classList.remove("blurred");
	await new Promise(r => setTimeout(r, 1750));

	document.getElementById("clue").classList.remove("not-here");
	document.getElementById("clue").classList.remove("hidden");
	document.getElementById("clue").classList.remove("blurred");

	document.title = "??? C'est quoi cette jungle ???";
}

function mainButtonClick() {
	switch(nbMainButtonClicks) {
		case 0 :
			document.getElementById("main").getElementsByTagName("h1")[0].innerHTML = "Adresse mail copiee !";
			document.getElementById("main-shadow").getElementsByTagName("h2")[0].innerHTML = "Adresse mail copiee !";
			document.getElementById("main").getElementsByTagName("p")[0].innerHTML = "Clique une deuxieme fois pour ouvrir ton client mail";
			document.getElementById("main-shadow").getElementsByTagName("p")[0].innerHTML = "Clique une deuxieme fois pour ouvrir ton client mail";
			navigator.clipboard.writeText("stakhavov@tarzanne.fr");
			nbMainButtonClicks++;
			break;
		case 1 :
			window.location="mailto:stakhavov@tarzanne.fr?subject=Je veux de la Tarzanne !!!";
			break;
		default :
			console.log("ERR : nbMainButtonClicks != 0 or 1, should not happen");
			break;
	}
}

	/*  ----------------------------------------
		 DEMO
		---------------------------------------- */

		/*  ---------------
			 DEMO
			--------------- */

document.addEventListener('DOMContentLoaded', function(event)
{
	pageOpening();
});