const add = function(a, b) 
{
  return a + b;
};

const subtract = function(a, b) 
{
	return a - b;
};

const sum = function(array) 
{
	let sum = 0;

  array.forEach( function( element, index )
  {
    sum += array[index];
  });

  return sum;
};

const multiply = function(array) 
{
  if(array.length == 0)
  {
    return 0;
  }
  else
  {
    let product = 1;

    array.forEach( function(element, index)
    {
      product *= array[index];
    });

    return product;
  }
};

const power = function(a,b) 
{
	return a ** b;
};

const factorial = function(a) 
{
  let result = 1;
  if( a == Math.round(a) )
  {
    for( let i = 1; i <= a; i++ )
    {
      result *= i;
    }
    return result;
  }
  else
  {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
