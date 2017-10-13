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
    let start = moment(date, "DD.MM.YYYY")
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



}
