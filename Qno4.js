// 4.Write a JS code to find the power of a number using for loop

function power(base,exponent){
    var result =1;
    for(let i=0;i<exponent;i++){
        result *=base;
    }
    return result;   
}
console.log(power(3, 6));