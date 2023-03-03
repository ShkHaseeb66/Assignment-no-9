//7. Write a js program to count total number of negative elements in an
//array
const array = [-3, 5, -1, 0, -4, 7, -2,7,-6,-7,-9];
let count = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    count++;
  }
}

console.log("The total number of negative elements in the array is: " + count);

    
