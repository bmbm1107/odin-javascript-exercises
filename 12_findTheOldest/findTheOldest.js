const findTheOldest = function (array) {


    array.some(person => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = (new Date()).getFullYear()
        }
    })


    array.sort((a, b) => ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) ? -1 : 1)
    return array[0]

};

// Do not edit below this line
module.exports = findTheOldest;
