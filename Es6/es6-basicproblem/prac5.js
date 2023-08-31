//access object value
let data= {
location:[
    {
        latitude: '34.5 ',
        longtitude: "35.5,  64.5",
        city: "Dhaka",
        country:  "bangladesh",
    }
]
};
const result=data.location[0].city;
console.log(result);