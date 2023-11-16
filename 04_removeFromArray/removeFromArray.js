const removeFromArray = function(arr, ...int) {

   outer: for (let j = 0; j <= (int.length-1); j++) {


            for (let i = 0; i <= (arr.length-1); i++) {

                    if (arr[i] === int[j]) {

                            arr.splice(i, 1);
                            continue outer;
                        }  


            }

 
        
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
