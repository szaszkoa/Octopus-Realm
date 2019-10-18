'use strict';

abstract class Cephalopod {
  // price attributes
  private _priceShellfish: number;
  private _priceCrustean: number;
  private _priceSeaWorm: number;
  // resource generation attributes
  private _genShellfish: number;
  private _genCrustean: number;
  private _genSeaWorm: number;

  private _animalName: string;

  constructor(name: string, priceShellfish: number, priceCrustean: number, priceSeaWorm: number, genShellfish: number, genCrustean: number, genSeaWorm: number) {
    this._animalName = name;

    this._priceShellfish = priceShellfish;
    this._priceCrustean = priceCrustean;
    this._priceSeaWorm = priceSeaWorm;

    this._genShellfish = genShellfish;
    this._genCrustean = genCrustean;
    this._genSeaWorm = genSeaWorm;
  }

  // create functions to icrease the price, and create the arrays storing the animals

  breed(newAnimal: any): void{
    
  }
}

class Octopus extends Cephalopod {

  constructor() {
    super('Octopus', 100, 0, 0, 1, 0, 0);
  }



}

class Squid extends Cephalopod {

  constructor() {
    super('Squid', 10000, 0, 0, 10, 1, 0)
  }

}

class GiantOctopus extends Cephalopod {

  constructor() {
    super('Giant Octopus', 100000,100,0,100,10,1)
  }
}

class ColossalSquid extends Cephalopod{

  constructor(){
    super('Colossal Squid', 1000000, 10000,100,1000,100,10)
  }
}