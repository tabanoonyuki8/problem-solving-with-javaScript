const arr=(number1,number2)=>{

let newArray=[];//new array

let conCat=number1.concat(number2);//concate array
for (var i = 0; i < conCat.length; i++) {
    newArray.push(conCat[i]); //using lop for avoid multiple array
}

// newArray.push(conCat);

// let maxNumber=Math.max(...newArray);
 let maxNumber=Math.max(...newArray);//rest argument
return maxNumber;//showing max
// return  newArray;

}
console.log(arr([1,50,6,12,2],[5,90,5,4,6,25]));//tow array input