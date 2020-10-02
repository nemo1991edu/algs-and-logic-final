/*
Write a function that takes in an array of strings, and converts them all 
into snake case 
(ex. (['Dogs are cute', 'Cats aRe also cute']) ---> ['dogs_are_cute', 'cats_are_also_cute']) notice the 
lowercase letters, and underscores connecting the words. 
return the entire array with the converted strings
*/
const snakeCaseArr = function (arr) {
    for (i = 0; i < arr.length; i++) { 
    let aux;    
    aux=arr[i].match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(word => word.toLowerCase())
    .join('_');
    arr[i]=aux;
    }
    return arr; 
};

console.log(snakeCaseArr(['Coding Is Fun']));

console.log(snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']));

console.log(snakeCaseArr(['Coding Is Fun']));

//console.log((snakeCaseArr(['Coding Is Fun']) === ['coding_is_fun']) ? "Test 1: Passing" : "Test 1: Failing");

//console.log((snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']) === ['coding_is_fun', 'dogs_are_cool']) ? "Test 2: Passing" : "Test 2: Failing");

//console.log((snakeCaseArr(['cats are CUTE', 'Dogs ARE cool']) === ['cats_are_cute', 'dogs_are_cool']) ? "Test 3: Passing" : "Test 3: Failing");