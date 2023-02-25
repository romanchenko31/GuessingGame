class GuessingGame {
  constructor() {
    this.min = 1;
    this.max = 100;
    this.guessNum = 0;
  }

  setRange(minValue, maxValue) {
    this.min = minValue;
    this.max = maxValue;
  }

  guess() {
    this.guessNum = Math.floor((this.min + this.max + 1) / 2);
    return this.guessNum;
  }

  lower() {
    this.max = this.guessNum;
  }

  greater() {
    this.min = this.guessNum;
  }
}
module.exports = GuessingGame;
