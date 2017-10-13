import { Calculator } from './../js/inventory.js';

describe('Calculator', function() {
  let calculator;

  beforeEach(function() {
    calculator = new Calculator()
  });
  it('Converts years into seconds', () => {
    expect(calculator.convertSeconds(31)).toEqual(977616000)
  });
