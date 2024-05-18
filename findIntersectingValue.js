//need for find intersecting value from two Array 
//input : arr=[10,20,30,40,50]
//input: arr2 = [20,40,70]
//expected OutPut: result = [20,40]
const arr=[10,20,30,40,50];
const arr2 = [20,40,70];
const result=[];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr[i]===arr2[j]){
result.push(arr[i]);
        }
    }
}
console.log(result);
