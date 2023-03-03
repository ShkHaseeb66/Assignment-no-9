//Write a js program to count total number of even and odd elements in
//an array.
function EvenOddcount(array){
    let evencount=0;
    let oddcount=0;
    for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        evencount++
    }
    else {
    oddcount++
}
    }
    return {even:evencount, odd:oddcount};
}
const array=[1,2,3,4,5,6,7,8,9]
console.log(EvenOddcount(array))