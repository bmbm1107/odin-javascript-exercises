

const repeatString = function(string, num) {

    if (num < 0) return 'ERROR'

    message = ''

    for (let i=0; i < num; i++){

    message = message.concat(string)

    }

    return message
};

// Do not edit below this line
module.exports = repeatString;
