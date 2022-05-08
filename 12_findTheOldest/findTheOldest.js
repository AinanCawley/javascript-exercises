const findTheOldest = function(array) 
{
    //yearOfBirth
    //yearOfDeath

    let date = new Date();
    let currentYear = date.getFullYear();


    array.sort( function comparison( a, b )
    {
        let aAge;
        let bAge;

        if( "yearOfDeath" in a )
        {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        else
        {
            aAge = currentYear - a.yearOfBirth;
        }

        if( "yearOfDeath" in b )
        {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        else
        {
            bAge = currentYear - b.yearOfBirth;
        }

        return (bAge - aAge);
    });

    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
