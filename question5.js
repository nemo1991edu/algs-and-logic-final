/*
write a function that loops through an array of numbers, and arrays, and adds all of the numbers
ex. [2, 3, 5, [1, 2], [3]] ---> 16
*/

const sumNestedArray = function (arr) {
    let result = 0;    
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result += sumNestedArray(array[i]);
        } else {
            result += array[i];
    }
}    
return result;
}

console.log((sumNestedArray([1, [2, 3, 4], 6, 7, 5]) === 28) ? "Test 1: Passing" : "Test 1: Failing");

console.log((sumNestedArray([1, [2, 3, 4], [2], 7, [3, 5, 6]]) === 33) ? "Test 2: Passing" : "Test 2: Failing");