const num=[2,0,5,6,3];
const target=9;
const newNumber=num.reduce((a,b)=>{
  
   const sum=a+b; 
   if(sum===target){
    console.log(a,b);
    
     } 
   return sum;
   
    
      
},0);
