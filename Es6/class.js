class Instractor {

name;
loacation;
constructor(teacherName,teacherLocation){
this.name=teacherName;
this.loacation=teacherLocation
}
designation="web development";
setSupportSessionn(time){
    console.log(`start support session ${time}`);
}

}

const teacherOne=new Instractor("Tabnoon","jatrabari");
console.log(teacherOne);
teacherOne.setSupportSessionn(5.00);