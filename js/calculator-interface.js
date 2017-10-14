import { Calculator } from './../js/calculator.js';
$(document).ready(function() {
  const calculator = new Calculator();

  $('#birthdate').submit(function(event) {
    event.preventDefault();
    let date = $('#date').val();
    let fitness = $('#fit').val();
    let smoke;

    if ($('#smoke').val() === "false") {
      smoke = false;
    } else {
      smoke = true;
    }
    let drink = $('#drink').val();
    let age = calculator.subtractDates(date);

    let mercuryExp = calculator.convertYears(calculator.mercuryAge(calculator.convertSeconds(calculator.lifeExpectancy(fitness, smoke, drink))))
    let venusExp = calculator.convertYears(calculator.venusAge(calculator.convertSeconds(calculator.lifeExpectancy(fitness, smoke, drink))))
    let jupiterExp = calculator.convertYears(calculator.jupiterAge(calculator.convertSeconds(calculator.lifeExpectancy(fitness, smoke, drink))))
    let marsExp = calculator.convertYears(calculator.marsAge(calculator.convertSeconds(calculator.lifeExpectancy(fitness, smoke, drink))))

    $('#result').show();

    $('#earth').text(calculator.convertYears(age));
    $('#mercury').text(calculator.convertYears(calculator.mercuryAge(age)));
    $('#venus').text(calculator.convertYears(calculator.venusAge(age)));
    $('#mars').text(calculator.convertYears(calculator.marsAge(age)));

    $('#lifeEarth').text(calculator.lifeExpectancy(fitness, smoke, drink));
    $('#lifeMercury').text(mercuryExp);
    $('#lifeVenus').text(venusExp);
    $('#lifeJupiter').text(jupiterExp);
    $('#lifeMars').text(marsExp);
  });
});
