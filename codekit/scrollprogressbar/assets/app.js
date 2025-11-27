"use strict"

const progressBar = document.querySelector(".scrollBar__progress");

if(progressBar){
    window.addEventListener("scroll",updateScrollProgress);
}

function updateScrollProgress(){
    /*
    calcul:
    1 valeur de scroll total de la page (= document.body.scrollHeight)
    2 window.innerHeight (=hauteur du viewport)
    3 window.scrollY (=valeur de scroll)
    */

    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const readPercentage = (currentScroll / maxScroll) * 100;
    if (currentScroll >=0){
        progressBar.style.setProperty("--scrollbar-width",readPercentage + "%");
    }
}