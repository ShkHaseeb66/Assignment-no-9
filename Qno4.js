//4. Write a js program to find maximum and minimum element in an array.
const array=[1,20,40,3,5,60];
let max=array[0]
let min=array[0]
for(let i=1;i<array.length;i++){
    if(array[i]>max){
    max=array[i]
}
if(array[i]<min){
    min=array[i]

}
}
console.log("maximum number",max)
console.log("minimum number",min)
