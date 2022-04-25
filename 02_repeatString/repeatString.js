const repeatString = function(string, numberOfTimes)
{

    if (numberOfTimes < 0)
    {
        return "ERROR";
    }
    else
    {
        let newString = "";

        for( let i = 0; i < numberOfTimes; i++ )
        {
            newString = newString + string;
        }

        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
