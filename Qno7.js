//Write a JS code to calculate the sum of digits in a number
function sumofdigits(number) {
    let sum =0;
    while (number) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }
  console.log(sumofdigits(12345))

  