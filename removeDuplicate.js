//remove duplicate value from a array 
const arr=[10,20,30,40,50,10,30,60,80,60];
const result= arr.filter((val,index)=> arr.indexOf(val)===index);
console.log(result);

//const result = [...new Set(arr)] (we can use this method also to remove duplicate value easily)