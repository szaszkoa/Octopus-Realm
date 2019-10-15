'use strict';

let gameData: any = {
  shellfish: 0,
  shellfishPerClick: 1
}

// octopi hunting for shellfish

function octopusHunt(): void {
  gameData.shellfish += gameData.shellfishPerClick;
  document.getElementById('shelllfishAvailable').innerHTML = `${gameData.shellfish} shellfish collected`
}