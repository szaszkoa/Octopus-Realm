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

// automatic resource generation
let mainGameLoop: any = window.setInterval(() => {
  gameData.shellfishGen == 0 ? undefined : autoLoop();
}, 1000)

function autoLoop(): void {
  gameData.shellfish += gameData.shellfishGen;
  document.getElementById('shellfish').innerHTML = `Shellfish: ${gameData.shellfish}`;
  gameData.crustean += gameData.crusteanGen;
  document.getElementById('crustean').innerHTML = `Crustean: ${gameData.crustean}`;
  gameData.seaWorm += gameData.seaWormGen;
  document.getElementById('seaWorm').innerHTML = `Sea Worm: ${gameData.seaWorm}`;
}

function gatherShellfish(): void {
  gameData.shellfish += 1;
  document.getElementById('shellfish').innerHTML = `Shellfish: ${gameData.shellfish}`
}

function breedOctopus(): void {
  if (gameData.shellfish >= octopusData.shellfishPrice) {
    gameData.shellfish -= octopusData.shellfishPrice;
    gameData.shellfishGen += octopusData.shellfishGen;
    gameData.octopusCount += 1;
    document.getElementById('octopusPopulation').innerHTML = `Octopuses: ${gameData.octopusCount}`
    document.getElementById('shellfish').innerHTML = `Shellfish: ${gameData.shellfish}`
  }
}

function breedSquid(): void {
  if (gameData.shellfish >= squidData.shellfishPrice) {
    gameData.shellfish -= squidData.shellfishPrice;
    gameData.shellfishGen += squidData.shellfishGen;
    gameData.squidCount += 1;
    document.getElementById('squidPopulation').innerHTML = `Squids: ${gameData.squidCount}`
    document.getElementById('shellfish').innerHTML = `Shellfish: ${gameData.shellfish}`
  }
}


let octopusData: any = {
  shellfishPrice: 100,
  shellfishGen: 1,
}

let squidData: any = {
  shellfishPrice: 1000,
  shellfishGen: 10,
  crusteanGen: 1,

}

let giantOctopusData: any = {
  shellfishPrice: 10000,
  shellfishGen: 1000,
  crusteanGen: 10,
  seaWormGen: 1,
}

let colossalSquidData: any = {
  shellfishPrice: 100000,
  crusteanPrice: 10000,
  seaWormPrice: 100,
  shellfishGen: 1000,
  crusteanGen: 100,
  seaWormGen: 10
  
  
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