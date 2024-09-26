const jeu = document.getElementById("jeu");
const title = document.getElementById("title");
const coucou = document.getElementById("coucou");

// points joueur
let cpt = 0;

// button
let vel = 600;
let widthBtn = 40;
coucou.style.background = "purple";
coucou.style.width = `${widthBtn}px`;
coucou.style.height = `${widthBtn}px`;
coucou.style.borderRadius = "10px";
// game panel
let height = 300;
let width = 300;
jeu.style.height = `${height}px`;
jeu.style.width = `${width}px`;
jeu.style.border = "solid red";
jeu.style.borderRadius = "10px";
// titre 
title.innerHTML = 
`Score  : ${cpt} ||| 
button dimensions : ${widthBtn} |||
height : ${height} |||
width: ${width}`;

function Compte(){
    cpt++;
    height = Math.floor(height*1.1) ;
    width = Math.floor(width*1.1) ;
    widthBtn = Math.floor(widthBtn*0.95) ;
    jeu.style.height = `${height}px`;
    jeu.style.width = `${width}px`;
    coucou.style.width = `${widthBtn}px`;
    coucou.style.height = `${widthBtn}px`;
    title.innerHTML = 
    `Score  : ${cpt} ||| 
    button dimensions : ${widthBtn} |||
    height : ${height} |||
    width: ${width}`;
}

coucou.style.position = "absolute";
function Coucou() {
    let left = Math.random() * Math.max(width-coucou.clientWidth, 0);
    let top = Math.random() * Math.max(height-coucou.clientHeight, 0);
    coucou.style.left = left + "px";
    coucou.style.top = top + "px";
}

coucou.addEventListener('click', Compte);
window.setInterval(Coucou, vel);