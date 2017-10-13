export class Calculator {
  constructor(name) {
    this.name = name;
  }

  convertSeconds(years) {
    return (years * 31536000)
  }
}
