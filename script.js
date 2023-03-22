/*  =========================================================================
	 DEMO
	========================================================================= */

var tour = 0;

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


async function pageLoading() {
	await new Promise(r => setTimeout(r, 4000));
	return;
}

async function pageOpening() {
	await pageLoading();
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