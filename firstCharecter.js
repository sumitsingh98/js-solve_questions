// given string find first later of each word and combin  them by . 
//example input = 'sumit kumar singh' expected output: s.k.s
const arr = 'sumit kumar singh';
const result = arr.split(" ").map((num)=>num.charAt(0)).join('.');
console.log(result);