

const renameCount = new Map<string, number>();

export class PokemonServiceCommon {
  private _fibonacciSequence(num: number): number {
    if(num <= 1) return num;
    return this._fibonacciSequence(num - 1) + this._fibonacciSequence(num - 2);
  }

  private _isPrime  (num: number): boolean  {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    for (let index = 5; index * index <= num; index += 6) {
      if (num % index === 0 || num % (index + 2) === 0) return false;
    }
    return true;
  };
  

  catchPokemon ():  { probality: number, isCatching: boolean} {
    const randomNumber = Math.random();
    return {probality: randomNumber, isCatching: randomNumber < 0.5}
  };

  releasePokemon (): { primeNumber: number, isPrime: boolean} {
    const primeNumber = this.generateRandomPrime();
    const isPrime = this._isPrime(primeNumber);
    return {
      primeNumber,
      isPrime
    }
    
  }

  generateRandomPrime  (): number{
    let num = Math.floor(Math.random() * 100) + 1;
    while (!this._isPrime(num)) {
      num = Math.floor(Math.random() * 100) + 1;
    }
    return num;
  };
  
  renamePokemon (
    name: string,
  ): string{

    const currentRenameCount = renameCount.get(name) || 0;
    const fibonacciNumber = this._fibonacciSequence(currentRenameCount);
    const renamePokemon = `${name}-${fibonacciNumber}`;
    renameCount.set(name, currentRenameCount + 1);
    return renamePokemon;
  };
  

}

