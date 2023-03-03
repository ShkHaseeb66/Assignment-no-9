//8. Write a JS code to find the largest number in an array

function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] >= largest) {
        largest = numbers[i];
      }
    }
    return largest;
  }
  console.log(findLargestNumber([1,2,3,4,5,6,890]))