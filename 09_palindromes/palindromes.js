const palindromes = function (aString) {
    let clearString = aString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,' ').toLowerCase()
    let letters = clearString.split('').filter((letter) => (letter !== ' '))
    let reverseLetters = letters.map((x) => x).reverse()
   
    return letters.every((letter, index) => (letter === reverseLetters[index]))


};

// Do not edit below this line
module.exports = palindromes;
