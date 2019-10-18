'use strict';

import {gameData, Octopus, Squid, GiantOctopus, ColossalSquid } from './creatures';


let octopus = new Octopus;
let octopus2 = new Octopus;
let octopus3 = new Octopus;

console.log(octopus)
console.log(octopus.breedUnit());

console.log(gameData)

document.getElementById('shellfish').innerHTML = `${gameData.shellfish} shellfish collected.`

/*

let resourceModifiers: any = {
  // shellfish per click modifier
  octopusPopulation: 0

}


// octopi hunting for shellfish
function sendOctopusToHunt(): void {
  gameData.shellfish += resourceModifiers.octopusPopulation == 0 ? gameData.shellfishPerClick : gameData.shellfishPerClick * resourceModifiers.octopusPopulation;
}

// breeding octopi
function breedOctopus(): any {
  let priceOfOctopus = 100;
  if (gameData.shellfish >= priceOfOctopus) {
    resourceModifiers.octopusPopulation += 1;
    gameData.shellfish -= priceOfOctopus;
    document.getElementById('shellfishAvailable').innerHTML = `${gameData.shellfish} shellfish collected.`
    document.getElementById('octopusPopulation').innerHTML = `${resourceModifiers.octopusPopulation} Octopi in you Realm.`
  } else {
    console.log('You cant afford to breed octopi');
  }
}

// automatic resource generation
let mainGameLoop: any = window.setInterval(() => {
  resourceModifiers.octopusPopulation == 0 ? undefined : sendOctopusToHunt()
}, 1000)

/** saving game to be added later

//game loading
let saveGame: object = JSON.parse(localStorage.getItem('octopusRealm'))
if (saveGame != null) {
  gameData = saveGame;

  // game saving loop
  let saveGameLoop: any = window.setInterval(() => {
    localStorage.setItem('octopusRealm', JSON.stringify(gameData));
  }, 15000)

}

*/