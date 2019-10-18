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
function gatherShellfish() {
    gameData.shellfish += 1;
    document.getElementById('shellfish').innerHTML = "Shellfish: " + gameData.shellfish;
}
function breedOctopus() {
    gameData.octopusCount += 1;
    document.getElementById('octopusPopulation').innerHTML = "Octopuses: " + gameData.octopusCount;
}
function breedSquid() {
    gameData.squidCount += 1;
    document.getElementById('squidPopulation').innerHTML = "Squids: " + gameData.squidCount;
}
