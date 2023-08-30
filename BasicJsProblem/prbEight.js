//array math min & error handaling








function sortMaker(arr) {


    if(arr[0]===arr[1]){
        return "equal";
    }
    else if(arr[0]<0 || arr[1]<0){
        return "Invalid";
    }
    else{
      let  newOne=Math.max(arr[0],arr[1]);
      let   secodOne=Math.min(arr[0],arr[1]);
     

        
        return secodOne ,newOne;
}

}

console.log(sortMaker([4,2]));
