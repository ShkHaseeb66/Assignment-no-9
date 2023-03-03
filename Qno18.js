//18. Write a js program to search an element in an array
function searchElement(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return i;
      }
    }
  
    return -1;
  }

  const input = [1, 2, 3, 4, 5];
  const elementToSearch = 3;
  const index = searchElement(input, elementToSearch);
  console.log(index); 
  