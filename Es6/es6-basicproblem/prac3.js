//add all elements using reduce
const number=[25,4,5,3,56,5,3,2];
const total=number.reduce((prevoice,current) =>
    prevoice+current
,0)
console.log(total);