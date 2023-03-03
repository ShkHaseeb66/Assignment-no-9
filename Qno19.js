//19. Write a js program to sort array elements in ascending or descending
//order.

let arr = [5, 1, 9, 3, 7, 2];

arr.sort(function(a, b) {
  return a - b;
});
console.log(arr); 
arr.sort(function(a, b) {
  return b - a;
});
console.log(arr); 
