function cubeNumber(number) {
if(typeof number !=="number"){
    return "please give integer number"
}
let final =Math.pow(number,3);
return final;

}
console.log(cubeNumber(5));

