const fibonacci = function(number) 
{
    number = number * 1;
    if( (number>0) && (number==Math.round(number)) )
    {
        let previousPrevious = 0;
        let previous = 1;
        let current = 1;
        
        for( let i = 0; i < (number-1); i++ )
        {
            current = previousPrevious + previous;
            previousPrevious = previous;
            previous = current;
        }
            
        return current;
    }
    else
    {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
