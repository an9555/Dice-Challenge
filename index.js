var player_1 = Math.floor(Math.random() * 6) +1; 
var random_1 = "images/dice" + player_1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",random_1);

var player_2 = Math.floor(Math.random() * 6)+1;
var random_2= "images/dice" + player_2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",random_2);

if (player_1>player_2){document.querySelector("h1").innerHTML="🎌Player 1 Win"}
if (player_2>player_1){document.querySelector("h1").innerHTML="Player 2 Win🎌"}
if (player_1==player_2){document.querySelector("h1").innerHTML="Draw!"} 
