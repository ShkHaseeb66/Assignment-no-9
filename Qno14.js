//14. Write a js program to delete all duplicate elements from an array
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
  
  const arr = [1, 2, 3, 4, 4, 5, 5, 6];
  const uniqueArr = removeDuplicates(arr);
  console.log(uniqueArr); 