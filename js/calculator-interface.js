import { Calculator } from './../js/calculator.js';
$(document).ready(function() {
  const calculator = new Calculator();

  $('#birthdate').submit(function(event) {
    event.preventDefault();
    let date = $('#date').val();
    let fitness = $('#fit').val();
    if ($('#smoke').val() === "true") {
      let smoke = true;
    } else {
      let smoke = false;
    }
    let drink = $('#drink').val();
    let age = calculator.subtractDates(date);

    $('#earth').text(calculator.convertYears(age));
    $('#mercury').text(calculator.convertYears(calculator.mercuryAge(age)));
    $('#venus').text(calculator.convertYears(calculator.venusAge(age)));
    $('#mars').text(calculator.convertYears(calculator.marsAge(age)));

    $('#lifeEarth').text(calculator.lifeExpectancy(fitness, smoke, drink))


  })
})
