
// Audio si appui sur logo
var audio = document.getElementById("audio");
// var audio2 = document.getElementById("audio2");
var annee = document.getElementById("annee");

var logo = document.getElementById("logo");
logo.addEventListener("click",action);
// annee.addEventListener("click",action2);

function action(){
  console.log(document.documentElement.scrollTop);
	audio.play();
}
// function action2(){
//   console.log(document.documentElement.scrollTop);
//   audio2.play();
// }


// Apparition / Disparition menu
var header = document.getElementById("header");
var separ = document.getElementById("separ");
var menu1 = document.getElementById("menu");
var entete = document.getElementById("entete");
var lien = document.getElementsByClassName("lien");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        header.style.backgroundColor = "#ddd3b0";
        header.style.marginTop = "-10.3vw";
        header.style.position = "fixed";
        header.style.boxShadow = "0 0 8px rgba(0,0,0,.4)";
        header.style.opacity = "0";
        header.addEventListener("mouseover",menu);
        header.addEventListener("mouseout",menu2);


        //<!> Modif importante de menu
        header.style.height = "6vw"; 

        logo.style.width ="3vw";
        logo.style.height ="3vw";

        separ.style.width = "0.1vw";
        separ.style.height = "3.5vw";
        separ.style.marginLeft = "5.5vw";
        separ.style.marginTop = "0.6vw";

        annee.style.fontSize = "1vw";
        annee.style.marginLeft = "6vw";
        annee.style.marginTop = "1.6vw";

        menu1.style.marginTop = "1.5vw";
        menu1.style.marginRight = "-22vw";

        lien[0].style.fontSize = "1.2vw";
        lien[1].style.fontSize = "1.2vw";
        lien[2].style.fontSize = "1.2vw";
        lien[3].style.fontSize = "1.2vw";
        lien[4].style.fontSize = "1.2vw";
        lien[0].style.paddingLeft = "1.5vw";
        lien[1].style.paddingLeft = "1.5vw";
        lien[2].style.paddingLeft = "1.5vw";
        lien[3].style.paddingLeft = "1.5vw";
        lien[4].style.paddingLeft = "1.5vw";

        // <!>
    }
    else{
        header.style.backgroundColor = "none";
        header.style.marginTop = "-10.3vw";
        header.style.position = "absolute";
        header.style.opacity = "1";
        header.style.boxShadow = "0 0 0";
        header.removeEventListener("mouseover",menu);
        header.removeEventListener("mouseout",menu2);


        //<!>
        header.style.height = "10vw"; 

        logo.style.width ="7vw";
        logo.style.height ="7vw";

        separ.style.width = "0.3vw";
        separ.style.height = "8vw";
        separ.style.marginLeft = "10vw";
        separ.style.marginTop = "0.4vw";

        annee.style.fontSize = "2.8vw";
        annee.style.marginLeft = "11vw";
        annee.style.marginTop = "2.3vw";

        menu1.style.marginTop = "3.4vw";
        menu1.style.marginRight = "-9vw";

        lien[0].style.fontSize = "1.5vw";
        lien[1].style.fontSize = "1.5vw";
        lien[2].style.fontSize = "1.5vw";
        lien[3].style.fontSize = "1.5vw";
        lien[4].style.fontSize = "1.5vw";

        lien[0].style.paddingLeft = "2.9vw";
        lien[1].style.paddingLeft = "2.9vw";
        lien[2].style.paddingLeft = "2.9vw";
        lien[3].style.paddingLeft = "2.9vw";
        lien[4].style.paddingLeft = "2.9vw";
        // <!>
    }
}
function menu(){
  if (header.style.opacity == "0"){
  header.style.opacity = "1";}
}
function menu2(){
  header.style.opacity = "0";
}