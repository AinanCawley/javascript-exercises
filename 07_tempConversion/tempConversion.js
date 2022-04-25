const ftoc = function(fahrenheit)
{
  let celsius = (5/9) * (fahrenheit - 32);
  celsius *= 10;
  celsius = Math.round(celsius);
  celsius /= 10;
  return celsius;
};

const ctof = function(celsius)
{
  let fahrenheit = 32 + (9/5) * celsius;
  fahrenheit *= 10;
  fahrenheit = Math.round(fahrenheit);
  fahrenheit /= 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
