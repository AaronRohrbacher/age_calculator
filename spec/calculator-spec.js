import { Calculator } from './../js/calculator.js';
describe('Calculator', function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator()
  });
  it('Converts years into seconds', () => {
    expect(calculator.convertSeconds(31)).toEqual(977616000)
  });

  it('Converts seconds into years', () => {
    expect(calculator.convertYears(977616000)).toEqual(31)
  });

  it('Returns the difference between a date and the current time in seconds (mortal earth seconds)', () => {
    expect(calculator.subtractDates(moment())).toEqual(0)
  });

  it("Returns a mortal beings's age in seconds on Mercury", () => {
    let earthAge = calculator.subtractDates(moment())
    expect(calculator.mercuryAge(earthAge)).toEqual(0)
  })

  it("Returns a mortal beings's age in seconds on Venus", () => {
    let earthAge = calculator.subtractDates(moment())
    expect(calculator.venusAge(earthAge)).toEqual(0)
  })

  it("Returns a mortal beings's age in seconds on Mars", () => {
    let earthAge = calculator.subtractDates(moment())
    expect(calculator.marsAge(earthAge)).toEqual(0)
  })

  it("Returns a mortal beings's age in seconds on Jupiter", () => {
    let earthAge = calculator.subtractDates(moment())
    expect(calculator.jupiterAge(earthAge)).toEqual(0)
  })

  it("Converts the number of seconds to years for any specific planet", () => {
    let myAge = calculator.convertSeconds(31)
    let mercuryAge = calculator.mercuryAge(myAge)
    let venusAge = calculator.venusAge(myAge)
    let marsAge = calculator.marsAge(myAge)
    let jupiterAge = calculator.jupiterAge(myAge)

    expect(calculator.convertYears(mercuryAge)).toEqual(7.44)
    expect(calculator.convertYears(venusAge)).toEqual(19.22)
    expect(calculator.convertYears(marsAge)).toEqual(58.28)
    expect(calculator.convertYears(jupiterAge)).toEqual(367.66)

  })

  it("Determines a person's life expectancy based on health factors", () => {
    expect(calculator.lifeExpectancy(5, false, 5)).toEqual(79)
  })

  it("Determines wheather a person has surpassed his life expectancy", () => {
    let lifeExpectancy = calculator.lifeExpectancy(5, false, 5);
    expect(calculator.compareLifeExpectancy(31, lifeExpectancy)).toEqual(false)
  })
});
