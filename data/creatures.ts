'use strict';

export let gameData: any = {
  shellfish: 1001,
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

abstract class Cephalopod {
  // price attributes
  protected _priceShellfish: number;
  protected _priceCrustean: number;
  protected _priceSeaWorm: number;
  // resource generation attributes
  protected _genShellfish: number;
  protected _genCrustean: number;
  protected _genSeaWorm: number;
  // animal name
  protected _animalName: string;

  constructor(name: string, priceShellfish: number, priceCrustean: number, priceSeaWorm: number, genShellfish: number, genCrustean: number, genSeaWorm: number) {
    this._animalName = name;

    this._priceShellfish = priceShellfish;
    this._priceCrustean = priceCrustean;
    this._priceSeaWorm = priceSeaWorm;

    this._genShellfish = genShellfish;
    this._genCrustean = genCrustean;
    this._genSeaWorm = genSeaWorm;
  }

}

export class Octopus extends Cephalopod {

  constructor() {
    super('Octopus', 100, 0, 0, 1, 0, 0);
  }

  public breedUnit(): any {
    if(gameData.shellfish>=this._priceShellfish){
      gameData.octopusCount += 1;
      gameData.shellfishGen += this._genShellfish;
      gameData.shellfish -= this._priceShellfish;
    }
  }
}

export class Squid extends Cephalopod {

  constructor() {
    super('Squid', 10000, 0, 0, 10, 1, 0)
  }

  protected breedUnit(): void {
    if(gameData.shellfish >= this._priceShellfish){
      gameData.squidCount += 1;
      gameData.shellfishGen += this._genShellfish;
      gameData.cruesteanGen += this._genCrustean;
      gameData.shellfish -= this._priceShellfish;
    }
  }
}

export class GiantOctopus extends Cephalopod {

  constructor() {
    super('Giant Octopus', 100000, 100, 0, 100, 10, 1)
  }

  protected breedUnit(): void {
    if(gameData.shellfish >= this._priceShellfish && gameData.crustean >= this._priceCrustean){
      gameData.giantOctopusCount += 1;
      gameData.shellfishGen += this._genShellfish;
      gameData.cruesteanGen += this._genCrustean;
      gameData.seaWormGen += this._genSeaWorm;
      gameData.shellfish -= this._priceShellfish;
      gameData.crustean -= this._priceCrustean;
    }
  }

}

export class ColossalSquid extends Cephalopod {

  constructor() {
    super('Colossal Squid', 1000000, 10000, 100, 1000, 100, 10)

  }
  protected breedUnit(): void {
    if (gameData.shellfish >= this._priceShellfish && gameData.crustean >= this._priceCrustean && gameData.seaWorm >= this._priceSeaWorm) {
      gameData.colossalSquidCount += 1;
      gameData.shellfishGen += this._genShellfish
      gameData.cruesteanGen += this._genCrustean;
      gameData.seaWormGen += this._genSeaWorm;
      gameData.shellfish -= this._priceShellfish;
      gameData.crustean -= this._priceCrustean;
      gameData.seaWorm -= this._priceSeaWorm;
    }
  }

}