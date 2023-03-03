//8. Write a js program to copy all elements from an array to another array.
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [];

for (let i = 0; i < originalArray.length; i++) {
  copiedArray.push(originalArray[i]);
}

console.log("Original array: " + originalArray);
console.log("Copied array: " + copiedArray);
