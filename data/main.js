'use strict';
var gameData = {
    shellfish: 0,
    shellfishPerClick: 1
};
// octopi hunting for shellfish
function octopusHunt() {
    gameData.shellfish += gameData.shellfishPerClick;
    document.getElementById('shellfishAvailable').innerHTML = gameData.shellfish + " shellfish collected";
}
