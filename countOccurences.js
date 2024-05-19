//Write a code to display which character is coming how many times in a given string
//input: str = 'malayalam'
//expected : occurences of m is :2
//occurences of a is :4
//occurences of l is :2
//occurences of y is :1
const countOccurences=(str)=> {
    let exists={}
    for (let i= 0; i < str.length; i++) {
       if(exists[str[i]]) {
           exists[str[i]]+=1;
       }
       else {
         exists[str[i]]=1;
       }
    }
    for(let item in exists) {
       console.log("occurences of "+item+" is :"+exists[item])
    }
  }
  countOccurences('malayalam')