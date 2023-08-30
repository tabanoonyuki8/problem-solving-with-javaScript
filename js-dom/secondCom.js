const clickButton=document.getElementById("button-id").addEventListener("click",function(){

    const textFlied=document.getElementById("text-id");
    const textFliedValue=textFlied.value;
    const inputText=document.getElementById("p-id");
    const newP=document.createElement('p');

    newP.innerText=textFliedValue;
    inputText.appendChild(newP);
    textFlied.value='';
    
    })