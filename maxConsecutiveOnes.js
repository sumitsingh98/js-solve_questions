//find maximum consecutive 1's in an array
//input : arr= [1,1,2,1,1,1,3,1,1,1,1,4,1,1,1,1,1,5,5,1];
//output : result = 5;
const arr= [1,1,2,1,1,1,3,1,1,1,1,4,1,1,1,1,1,5,5,1];
let count=0;
let maxCount=0;
for(let i=0; i<arr.length; i++){
    arr[i]===1? count+=1: count=0;
    maxCount = Math.max(maxCount,count);
}
console.log(maxCount);