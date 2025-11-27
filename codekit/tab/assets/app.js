"use strict"

const liens = document.querySelectorAll(".Tab__li a");
//Ajouter une fonction sur les liens (cliquer) => toggle pas la solution car on ne reclique pas sur l'onglet pour le fermé
if(liens){
    for(let i of liens){
    i.addEventListener("click",LienActif);
    }
}

//D'ABORD !!! supprimer celle du lien actif(si je clique sur un lien, retirer la classe active des autres liens)
//On doit ajouter la classe active quand on clique sur un lien
function LienActif(event){
    const lienActif = document.querySelector(".Tab__li--actif");
    lienActif.classList.remove("Tab__li--actif");
    event.currentTarget.parentNode.classList.add("Tab__li--actif");
    const activeTab = document.querySelector(".Tab__contenu--actif");
    activeTab.classList.remove("Tab__contenu--actif");

    const tabSelectID = event.currentTarget.getAttribute("href");
    const tabSelect = document.querySelector(tabSelectID);
    tabSelect.classList.add("Tab__contenu--actif");
}



//ATTENTION à bien choisir si j'agis sur un élément du tableau ou sur le tableau (let n'existe que dans le boucle) + revoir le fonctionnement de event.currentTarget




