/*  =========================================================================
	 DEMO
	========================================================================= */

var tour = 0;
var nbMainButtonClicks = 0;
var isFullscreen = false;



function isDeviceMobile() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}


var isMobile = isDeviceMobile();
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

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
			await updateInputHint("Encore, n'ai crainte...");
			tour++;
			break;
		case 1 :
			document.getElementById("clue").classList.add("not-here");
			document.title = "... Bon, on a saisit que c'était la Tarzanne ...";
			document.getElementById("lay1").classList.add("blurred");
			document.getElementById("video-background").classList.remove("displayed-blur");
			document.getElementById("lay2").classList.add("hidden");
			document.getElementById("lay1").classList.add("hidden");
			await new Promise(r => setTimeout(r, 2000));
			await updateInputHint("");
			if(!isSafari) {
				document.getElementById("main-shadow").classList.remove("hidden");
				document.getElementById("main-shadow").classList.remove("not-here");
			}
			else {
				document.getElementById("main").classList.add("safari-compatible");
			}
			document.getElementById("main").classList.remove("not-here");
			document.getElementById("main").classList.remove("hidden");
			await new Promise(r => setTimeout(r, 2000));
			document.getElementById("main").classList.remove("blurred");
			if(!isSafari) {
				document.getElementById("main-shadow").classList.remove("blurred");
			}
			document.title = "!!! La TARZANNE nouvelle arrive !!!";
			tour++;
			break;

		default :
			break;
	}
}


function tryFullscreen() {
	if(document.fullscreenEnabled && !isFullscreen) {
		document.getElementsByTagName("body")[0].requestFullscreen();
		isFullscreen = true;
	}
}

function videoDelay(id, duration) {
	var video = document.getElementById(id);
	video.pause();
	setTimeout(function() {
		video.play();
	}, duration);
}


async function pageLoading() {
	try {
		window.scrollTo(0, 1);
		tryFullscreen();
	}
	catch(e)
	{
		console.log("FULLSCREEN FAIL");
	}
	if(!window.fullscreen) {
		console.log(isMobile);
		if(isMobile)
		{
			document.getElementsByTagName("body")[0].classList.add("mobile");
		}
	}
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
			//document.getElementById("main-shadow").getElementsByTagName("h1")[0].innerHTML = "Adresse mail copiee !";
			document.getElementById("main").getElementsByTagName("p")[0].innerHTML = "Clique une deuxieme fois pour ouvrir ton client mail";
			//document.getElementById("main-shadow").getElementsByTagName("p")[0].innerHTML = "Clique une deuxieme fois pour ouvrir ton client mail";
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