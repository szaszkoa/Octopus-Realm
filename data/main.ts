'use strict';

let gameData: any = {
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
}

function gatherShellfish(): void {
  gameData.shellfish += 1;
  document.getElementById('shellfish').innerHTML = `Shellfish: ${gameData.shellfish}`
}

function breedOctopus(): void {
  gameData.octopusCount += 1;
  document.getElementById('octopusPopulation').innerHTML = `Octopuses: ${gameData.octopusCount}`
}

function breedSquid(): void {
  gameData.squidCount += 1;
  document.getElementById('squidPopulation').innerHTML = `Squids: ${gameData.squidCount}`
}

/*

let resourceModifiers: any = {
  // shellfish per click modifier
  octopusPopulation: 0

}


// octopi hunting for shellfish
function sendOctopusToHunt(): void {
  gameData.shellfish += resourceModifiers.octopusPopulation == 0 ? gameData.shellfishPerClick : gameData.shellfishPerClick * resourceModifiers.octopusPopulation;
  document.getElementById('shellfishAvailable').innerHTML = `${gameData.shellfish} shellfish collected.`
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