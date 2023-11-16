    const reverseString = function(string) {
// actually, this function does exactly the same as .split('').reverse().join('')
        let newString =[];
      
    if (string === undefined || string === null) return "ERROR"

        for (letter of string) {

            newString.unshift(letter)
        
            
    }

    return newString.join('')

    };

// Do not edit below this line
module.exports = reverseString;
