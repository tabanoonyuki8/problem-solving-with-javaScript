//finding bad date with array using function


function findingBadDate(arr){
    let count=0;
for(let i=0; i<arr.length;i++){
    if(arr[i]<0){
        count++;
    }
}
return count;
}
console.log(findingBadDate([-4, -9, -5, -33, -55]));
