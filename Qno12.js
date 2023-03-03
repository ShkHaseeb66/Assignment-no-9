//12. Write a js program to print all unique elements in the array.
const arr = [1, 2, 3, 4, 1, 2, 5, 6, 7, 8, 6];


const uniqueElements = new Set(arr);


console.log([...uniqueElements]);
