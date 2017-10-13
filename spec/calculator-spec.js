import { Calculator } from './../js/calculator.js';
describe('Calculator', function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator()
  });
  it('Converts years into seconds', () => {
    expect(calculator.convertSeconds(31)).toEqual(977616000)
  });

  it('Returns the difference between a date and the current time in seconds', () => {
    expect(calculator.subtractDates(moment())).toEqual(0)
  });
});
