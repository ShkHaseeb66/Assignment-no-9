//5. Write a js program to find second largest element in an array
function FindSecondMax(array){
let max=array[0];
let secondmax=array[0];
for(let i=1;i<array.length;i++){
  if(array[i]>max){
  secondmax=max;
  max=array[i];
  }  

 else if(array[i]>secondmax &&array[i] !==max ){
  secondmax=array[i];
  
  }
}
return secondmax;
}


const array=[1,3,5,66,7,8,9]
console.log(FindSecondMax(array));