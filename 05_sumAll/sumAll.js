const sumAll = function( integer1, integer2 )
{
    if( (typeof(integer1) !== 'number') || (typeof(integer2) !== 'number'))
    {
        return "ERROR";
    }
    
    if( (integer1 < 0) || (integer2 < 0) )
    {
        return "ERROR";/* My function works with negative numbers but fine I'll throw an error if arguments are negative */
    }

    if( integer1 == integer2)
    {
        return integer1 + integer2;
    }

    if( integer1 > integer2 )
    {
        let temporary1 = integer1;
        integer1 = integer2;
        integer2= temporary1;
    }

    return integer1 + integer2 + (integer1 * (integer2 - integer1 - 1)) + (((integer2-integer1-1)**2 + (integer2-integer1-1))/2);

};

// Do not edit below this line
module.exports = sumAll;
