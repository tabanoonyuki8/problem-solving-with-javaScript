//use reduce,read the code
const people=[
    {name:"tabanoon",age:15 },
    {name:"Mim",age:20 },
    {name:"yuki",age:50 }
]
const findAge=people.map(a=>a.age);


 const result=findAge.reduce((prevoice,current)=>prevoice+current,0);
 console.log(result);