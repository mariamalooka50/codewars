const array = [1, 2, 3, 4];
let newArray = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(newArray);