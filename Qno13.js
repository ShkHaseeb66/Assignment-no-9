//13. Write a js program to count total number of duplicate elements in an
//array
let arr = [1, 2, 3, 2, 4, 5, 3, 6];

let duplicates = {};

for (let i = 0; i < arr.length; i++) {
  if (arr[i] in duplicates) {
    duplicates[arr[i]]++;
  } else {
    duplicates[arr[i]] = 1;
  }
}

let totalDuplicates = 0;

for (let key in duplicates) {
  if (duplicates[key] > 1) {
    totalDuplicates += duplicates[key] - 1;
  }
}

console.log(totalDuplicates);
