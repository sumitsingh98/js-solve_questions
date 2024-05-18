//find mising number from a array 
//input : arr=[3,4,6,7];
//expected output: result = 5
const finsMisingNum = num => {
    const max = Math.max(...num);
    const min = Math.min(...num);
    const mising = [];
    for(i=min; i<max; i++){
        if(!num.includes(i)){
            mising.push(i);
        }
    }
    return mising;
}
console.log(finsMisingNum([5,6,9,10]));