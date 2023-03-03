//20. Write a js program to sort even and odd elements of array separately.
// Sample input array
const arr = [5, 3, 2, 8, 1, 4];


function sortEvenOdd(arr) {
  const evenArr = [];
  const oddArr = [];

  
  arr.forEach((num) => {
    if (num % 2 === 0) {
      evenArr.push(num);
    } else {
      oddArr.push(num);
    }
  });

  
  evenArr.sort((a, b) => a - b);
  oddArr.sort((a, b) => a - b);

  
  return [...evenArr, ...oddArr];
}


const sortedArr = sortEvenOdd(arr);

console.log(sortedArr);

