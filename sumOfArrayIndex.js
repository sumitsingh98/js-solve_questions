//write a program for sum of array based on their indexes 
//input: arr=[1,2,3,4,5]
//input: arr2=[1,2,3,4]
//expected output: result = [2,4,6,8,5];

const arr=[1,2,3,4,5];
const arr2=[1,2,3,4];
var a,b;
if(arr.length>arr2.length){
    a=arr;
    b=arr2;
}else{
    a=arr2;
    b=arr;
}
const result = a.map((num,idx)=>num+(b[idx]|| 0));
console.log(result);