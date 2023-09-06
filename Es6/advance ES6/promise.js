const getData= new Promise ((reslove,reject) =>{
    //reslove(25);
    reject("no data")
});
getData
.then(data => console.log(data))
.catch (err => console.log('error',err))
