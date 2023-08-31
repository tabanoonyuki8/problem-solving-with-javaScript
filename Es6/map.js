
// function arrayDouble(arr){
   
//     const double=arr.map(x=>x*2);
//     return double;


// }

// console.log(arrayDouble([25,56,2,5,6,5,8,6]));

const products=[
    {
        id:1,
         name:"laptop",
         price: 52000
    },
    {
        id:2,
         name:"watch",
         price: 2000
    },
    {
        id:3,
         name:"mobile",
         price: 70000
    }
]
const iteam=products.map(p=>p.price);
console.log(iteam);