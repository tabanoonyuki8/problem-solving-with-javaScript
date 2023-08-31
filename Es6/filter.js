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
const newProdect=products.filter(n=>n.price<5000);

console.log(newProdect);