// By: /u/oralekin:

// Takes only 5 minutes to set-up 

// This overlay ensures that you aren't squinting for 5 minutes looking for the proper pixel position and still getting it wrong, putting everyone even further behind. 

// NOTE: THIS IS NOT A BOT AND WILL NOT PLACE PIXELS FOR YOU. THIS MERELY STREAMLINES THE EXPERIENCE BY HELPING YOU FOCUS ON THE ART INSTEAD OF THE PIXEL MEASUREMENTS.

// Red pixel isn't part of the draft

// So just replace it with the needed color

// HOW TO INSTALL (EASY AND COMPLETE GUIDE EVEN FOR THOSE WITH NO COMPUTERS EXPERIENCE):-
// [WORKS ON CHROME AND OPERA]

// https://preview.redd.it/i1lkmg51uyq81.png?width=922&format=png&auto=webp&s=64b4e99909dec75cd74c27b5236ff10dd91fe3cc
// The inner smaller boxes indicate the color desired by the draft. 

// You have to place the pixel yourself.

// Click on this link https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en 10 million users use this plugin... no need to feel intimidated by this lol

// Then click on "Add extension"

// 2) A window pops up explaining how the extension works but that's useless since you have this tutorial. Go to r/place on Reddit and click the puzzle piece.

// https://preview.redd.it/64ld88howyq81.png?width=1918&format=png&auto=webp&s=edf384d811060cb33afd437d402faaf525fc9ac1 

// 3) Press "Tampermonkey"

// https://preview.redd.it/k47s05etwyq81.png?width=1293&format=png&auto=webp&s=3e8149c5ce00f2b232fdb55f4ccc79d3941cbc9f

// 4) Press "Create a new script"

// https://preview.redd.it/jl6dbsv5xyq81.png?width=772&format=png&auto=webp&s=976eaf7cb164aee9c8cc6298af427be696fecb57

// 5) Delete the default code given here

// https://preview.redd.it/ifvjoq5bxyq81.png?width=1507&format=png&auto=webp&s=94af94957e270223329ae13da1d7fb1f3978814a

// https://preview.redd.it/3ltloh9fxyq81.png?width=1490&format=png&auto=webp&s=13ad691eb22c847f0e9fe858c80f35bc7ab8ed57

// 6) Copy the code given below and paste it there as it is. Do not worry about the formatting, just copy and paste....

// ==UserScript==  

// @name osu! Logo template  

// @namespace http://tampermonkey.net/  

// @version 0.1  

// @description try to take over the canvas!  

// @author oralekin  

// @match https://hot-potato.reddit.com/embed*  

// @icon https://www.google.com/s2/favicons?sz=64&domain=reddit.com  

// @grant none  

// ==/UserScript==

if (window.top !== window.self) {

window.addEventListener('load', () => {

document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(

(function () {

const i = document.createElement("img");

i.src = "https://cdn.discordapp.com/attachments/959650191542202368/959896070329081866/overlay10461.png"; 

i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";

console.log(i);

return i;

})())

}, false);

}
