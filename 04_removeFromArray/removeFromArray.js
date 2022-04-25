const removeFromArray = function( array, ...thingsToRemove ) 
{  
    thingsToRemove.forEach( function(element) 
    {
        array.forEach( function(element2, index2) 
        {
            if( element2 === element )
            {
                delete array[index2];
            }
        })
    })

    return array.filter( (element) => { return element !== undefined } );
};

// Do not edit below this line
module.exports = removeFromArray;
