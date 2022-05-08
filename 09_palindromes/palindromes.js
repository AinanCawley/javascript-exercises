const palindromes = function (string) 
{
    const nonWords = /\W/gm;
    string = string.replaceAll( nonWords, "" );
    string = string.toLowerCase();
    
    if( string.length == 0 )
    {
        return true;
    }
    else
    {
        if(string==reverseString(string))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    function reverseString(stringToReverse)
    {
        let reversedString = "";

        while( stringToReverse.length !== 0 )
        {
            reversedString = reversedString + stringToReverse.slice(-1);
            stringToReverse = stringToReverse.slice(0,-1);
        }

        return reversedString;
    };
};

// Do not edit below this line
module.exports = palindromes;
