
//if number smaller then 7 then given number else square
function isLGSeven(number){
let abs=number-7;
if(abs<7){
    return abs;
}
else{
    return number*2;
}
}
console.log(isLGSeven(-15));
