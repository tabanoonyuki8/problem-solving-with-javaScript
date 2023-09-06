console.log(1);
console.log(2);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//async
setTimeout(() => {
    console.log("lazy");
},4000);
console.log(4);
function doSomething(){
    console.log(3);
}