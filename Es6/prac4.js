const arr=(numbersOFArray)=> { //arrow function parameter
    let newArr=[];//new array
for(let i=0; i<numbersOFArray.length;i++){ //array length
    let numberElemnt= numbersOFArray[i];//array element
    if(numberElemnt.length%2==0){//array element length and cheak condtion even 
       
  newArr.push(numberElemnt);//push to new array
    }
}
return newArr;//new array return
}
console.log(arr(["mim","sajib","yuki","mimi","shila","java"]));//call array