//convert string each word e.g 'hey user whats going on'
//expected output: resut = 'yeh resu stahw gniog no'
var string = "Welcome to this Javascript Guide!";
function reverseStr(string,seprator){
    return string.split(seprator).reverse().join(seprator);
}
var reverse = reverseStr(string,"");
var reverseByword = reverseStr(reverse," ")
console.log(reverseByword);