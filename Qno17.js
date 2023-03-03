//17. Write a js program to put even and odd elements of array in two
//separate array
function separateEvenOdd(arrayinput){
    let evenarray=[]
    let oddarray=[]
    for(let i=0;i<arrayinput.length;i++){
    if(arrayinput[i]%2==0){
evenarray.push(arrayinput[i])
    }else {
        oddarray.push(arrayinput[i])
    }
}
return {even:evenarray,odd:oddarray}
}
const input = [1, 2, 3, 4, 5, 6];
const result = separateEvenOdd(input);
console.log(result.even); 
console.log(result.odd); 