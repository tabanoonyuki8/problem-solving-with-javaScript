//odd number to even number using map
//using arrow function
 const number=(arrayNumber)=> {
     const numberElement =arrayNumber.map(a=>a+1);
     return numberElement;
 }
 console.log(number([1,3,5,7,9]));

 //easy way
// const number=[1,3,5,7,9].map(a=>a+1);
// console.log(number);