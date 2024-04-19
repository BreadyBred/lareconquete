
// Audio si appui sur logo
var audio = document.getElementById("audio");

var logo = document.getElementById("logo");
logo.addEventListener("click",action);

function action(){
	audio.play();
}