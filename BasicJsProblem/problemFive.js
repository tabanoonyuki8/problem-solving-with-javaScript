//gems daimonds calculation

function gemsTODaimond(a,b,c){
let first=a*21;
let second=b*32;
let third=c*43;
let sum=first+second+third;
if(sum>2000){
    let final=sum-2000;
    return final;
}
else{
    return sum;
}



}
console.log(gemsTODaimond(100,5,1));
