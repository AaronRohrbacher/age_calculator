export class Calculator {

  constructor(name) {
    this.name = name;
  }

  convertSeconds(years) {
    return (years * 31536000)
  }

  convertYears(seconds) {
    return (seconds/31536000)
  }

  subtractDates(date) {
    let start = moment(date, "YYYY-MM-DD")
    let end = moment()
    return end.diff(start, 'seconds')
  }

  mercuryAge(seconds) {
    return seconds * .24
  }

  venusAge(seconds) {
    return seconds * .62
  }

  marsAge(seconds) {
    return seconds * 1.88
  }

  jupiterAge(seconds) {
    return seconds * 11.86
  }

  lifeExpectancy(fitness, smoke, drink) {
    let totalYears = 79

    if (fitness <= 3) {
      totalYears -= 2
    }
    if (smoke === true) {
      totalYears -= 3
    }
    if (drink >= 8) {
      totalYears -= 4
    }
    return totalYears;
  }

  compareLifeExpectancy(age, lifeExpectancy) {
    if (age > lifeExpectancy) {
      return true;
    } else {
      return false;
    }
  }
}
