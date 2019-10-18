'use strict';
var gameData = {
    shellfish: 100,
    crustean: 0,
    seaWorm: 0,
    octopusCount: 0,
    squidCount: 0,
    giantOctopusCount: 0,
    colossalSquidCount: 0,
    shellfishPerClick: 10,
    shellfishGen: 0,
    crusteanGen: 0,
    seaWormGen: 0
};
// automatic resource generation
var mainGameLoop = window.setInterval(function () {
    gameData.shellfishGen == 0 ? undefined : autoLoop();
}, 1000);
function autoLoop() {
    gameData.shellfish += gameData.shellfishGen;
    document.getElementById('shellfish').innerHTML = "Shellfish: " + gameData.shellfish;
    gameData.crustean += gameData.crusteanGen;
    document.getElementById('crustean').innerHTML = "Crustean: " + gameData.crustean;
    gameData.seaWorm += gameData.seaWormGen;
    document.getElementById('seaWorm').innerHTML = "Sea Worm: " + gameData.seaWorm;
}
function gatherShellfish() {
    gameData.shellfish += 1;
    document.getElementById('shellfish').innerHTML = "Shellfish: " + gameData.shellfish;
}
function breedOctopus() {
    if (gameData.shellfish >= octopusData.shellfishPrice) {
        gameData.shellfish -= octopusData.shellfishPrice;
        gameData.shellfishGen += octopusData.shellfishGen;
        gameData.octopusCount += 1;
        document.getElementById('octopusPopulation').innerHTML = "Octopuses: " + gameData.octopusCount;
        document.getElementById('shellfish').innerHTML = "Shellfish: " + gameData.shellfish;
    }
}
function breedSquid() {
    if (gameData.shellfish >= squidData.shellfishPrice) {
        gameData.shellfish -= squidData.shellfishPrice;
        gameData.shellfishGen += squidData.shellfishGen;
        gameData.squidCount += 1;
        document.getElementById('squidPopulation').innerHTML = "Squids: " + gameData.squidCount;
        document.getElementById('shellfish').innerHTML = "Shellfish: " + gameData.shellfish;
    }
}
var octopusData = {
    shellfishPrice: 100,
    shellfishGen: 1
};
var squidData = {
    shellfishPrice: 1000,
    shellfishGen: 10,
    crusteanGen: 1
};
