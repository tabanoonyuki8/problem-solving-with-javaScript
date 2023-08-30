function canPay(changeArray, totalDue) {
let sum=0;
for(let i=0; i<changeArray.length;i++){
    sum=sum+changeArray[i];
}
if(sum>=totalDue){
    return true;
}
else{
    return false;
}

}
console.log(canPay([1,5,5],10));