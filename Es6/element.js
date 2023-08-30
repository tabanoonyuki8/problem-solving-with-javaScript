// let arr=[2,5,15,1,5,1];
// let numberA;
// for (let i=0;i<arr.length;i++){
//  numberA=arr[i];
//  console.log(numberA);
// }
//spread number ...rest argument
const arr=[45,56,56,5,3,2,4,2];
const maxNumber=Math.max(...arr);
console.log(maxNumber);