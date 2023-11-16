const sumAll = function (a, b) {

    let strArgs = Array.from(arguments)

    strArgs.forEach((element) => {
        if (element < 0 || typeof element !== "number") {
            strArgs = false

        }
    })

    if (strArgs === false) {

        return 'ERROR'


    } else {

        let length = Math.abs(a - b) + 1

        return length * (a + b) / 2

    }


}



// Do not edit below this line
module.exports = sumAll;
