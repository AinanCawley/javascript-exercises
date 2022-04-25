const reverseString = function(string)
{
    let length = string.length;
    let newString = "";

    for ( let i = 0, j = length; i < length; i++, j--)
    {
        newString += string.charAt(j-1);
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
