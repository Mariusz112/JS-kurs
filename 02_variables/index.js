let age;
age = 21;
let firstname = "Imie";
let student = true;
age = age +1;
console.log("masz", age, "lat");
console.log(firstname);
console.log(student);


document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "Enroled " + student;