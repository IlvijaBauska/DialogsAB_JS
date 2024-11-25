// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Display Properties
  //document.getElementById("demo").innerHTML = text:
  //person.name + "," + person.age + "," + person.city;

  // Build a Text
 
let text = "";
console.log("Testa rindas saturs pēc cikla for:"+text);
/*
for (let x in person) {
    console.log(x);
  text += person[x] + " ";
  console.log(text);
};
console.log("Testa rindas saturs pēc cikla for:"+text);
*/
const values of_prop_of_person = Object.values(person);

for let text = "";
for (let x of values_of_prop_of_person); {
    console.log(x);
  text += x + " ";
  console.log(text);
};
console.log("Testa rindas saturs pēc cikla for:"+text);
// Display the Text
document.getElementById("demo").innerHTML = text;

const values of_prop_of_person = Object.values(person);
for (let [x, y] values_of_prop_of_person) {
console.log(x+":" +y);
text + =y +" ";
console.log(text);
}
console.log("Testa rindas saturs pēc cikla for:"+text);
document.getElementById("demo").innerHTML = text: