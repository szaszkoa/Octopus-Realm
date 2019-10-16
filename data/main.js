'use strict';
var gameData = {
    shellfish: 0,
    shellfishPerClick: 10 // set to 10 to avoid breaking fingers when testing. original value is 1
};
var resourceModifiers = {
    // shellfish per click modifier
    octopusPopulation: 1
};
// octopi hunting for shellfish
function sendOctopusToHunt() {
    gameData.shellfish += resourceModifiers.octopusPopulation == 1 ? gameData.shellfishPerClick : gameData.shellfishPerClick * resourceModifiers.octopusPopulation;
    document.getElementById('shellfishAvailable').innerHTML = gameData.shellfish + " shellfish collected.";
}
// breeding octopi
function breedOctopus() {
    var priceOfOctopus = 100;
    if (gameData.shellfish >= priceOfOctopus) {
        resourceModifiers.octopusPopulation += 1;
        gameData.shellfish -= priceOfOctopus;
        document.getElementById('shellfishAvailable').innerHTML = gameData.shellfish + " shellfish collected.";
        document.getElementById('octopusPopulation').innerHTML = resourceModifiers.octopusPopulation + " Octopi in you Realm.";
    }
    else {
        console.log('You cant afford to breed octopi');
    }
}
// automatic resource generation
var mainGameLoop = window.setInterval(function () {
    resourceModifiers.octopusPopulation == 1 ? undefined : sendOctopusToHunt();
}, 1000);
