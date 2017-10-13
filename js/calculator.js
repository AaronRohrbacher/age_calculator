export class Calculator {
  constructor(name) {
    this.name = name;
  }

  convertSeconds(years) {
    return (years * 31536000)
  }

  subtractDates(date) {
    let start = moment(date, "DD.MM.YYYY")
    let end = moment()
    return start.diff(end, 'seconds')
  }
}
