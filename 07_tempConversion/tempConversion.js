const ftoc = function(fahrenheit) {
    let celsius = (fahrenheit-32) * (5/9);
    let oneDecCelsius = celsius.toFixed(1);
    return parseFloat(oneDecCelsius);
};

const ctof = function(celsius) {
  let fahrenheit = celsius * (9/5)+32;
  let oneDecFahrenheit = fahrenheit.toFixed(1);
  return parseFloat(oneDecFahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
