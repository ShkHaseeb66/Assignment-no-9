//1. Write a js program to count frequency of each element in an array.

let array = [1, 2, 3, 2, 1, 3, 1, 1, 4];
let frequency = {};

for (let i = 0; i < array.length; i++) {
  if (frequency[array[i]]) {
    frequency[array[i]]++;
  } else {
    frequency[array[i]] = 1;
  }
}

console.log(frequency);
