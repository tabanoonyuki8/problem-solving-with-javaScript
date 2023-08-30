  
    // const buttonId=document.getElementById("btn-id").addEventListener('mousemove',function(){

    //     console.log("enter");
    // })
    // const textId=document.getElementById("text").addEventListener("focus",function(){
    //     console.log("indise the input flied");
    // })
    // document.getElementById("text").addEventListener("blur",function(){
    //     console.log("indise the input flied");
    // })
    const deleteBtn=document.getElementById("delete-btn").addEventListener("click",function(){
        document.getElementById("h1-id").style.display="none";
    });

    const delelteInput=document.getElementById("delete-input").addEventListener("keyup",function(event){
        const text=event.target.value;
        const deleteCOnfrim=document.getElementById('delete-btn');
        if(text ==='delete'){
            deleteCOnfrim.removeAttribute('disabled');
        
        }
        else{
            deleteCOnfrim.setAttribute("disabled",true);
        }
    })