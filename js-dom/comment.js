//fisrt step

const clickButton=document.getElementById("button-id").addEventListener("click",function(){

const textFlied=document.getElementById("text-id");
const textFliedValue=textFlied.value;
const inputText=document.getElementById("p-id");
inputText.innerText=textFliedValue;
textFlied.value='';

})