/* const fibonacci = function(int) {
if (int < 0) return "OOPS" 
let sequence = [1, 1];

for (let i = 2; i < int; i++) {
    sequence.push((sequence[i-1])+(sequence[i-2]))
}

return sequence[sequence.length-1];
}


; */

const fibonacci = function(int) {
    if (int < 0) return "OOPS" 
    if (count === 0) return 0;
    let sequence = [1, 1]
    n = 0;
    
    while (n < int-2) {
    sequence.push((sequence[sequence.length-1] + sequence[sequence.length-2]))
    n++;
}

    return sequence[int-1]

}


// Do not edit below this line
module.exports = fibonacci;
