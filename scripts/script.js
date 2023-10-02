var openButton = document.querySelector("body>nav:nth-of-type(1) ul li:nth-of-type(1) button");
var nav = document.querySelector("body > nav > section:last-of-type");

openButton.onclick = openMenu;

function openMenu() {  
  nav.classList.add("openMenu");
}

var dichtButton = document.querySelector("body > nav section:last-of-type article:last-of-type button");

dichtButton.onclick = dichtMenu;

function dichtMenu() {  
  nav.classList.remove("openMenu");
}