submit = document.getElementById("user-input")
submit.addEventListener("input", conversion)  // input is a event type , there is submit , click

function conversion(){

let length = document.getElementById("length-l");
let volume = document.getElementById("volume-l");  // you can use outside the function as well
let mass = document.getElementById("Mass-l");     // 

let userInput = document.getElementById("user-input").value; // doc.get el - only gets the forms not the value so .value is use to get value entered by user
  
let meter = (userInput / 3.2808).toFixed(3);//
let feet = (userInput * 3.2808).toFixed(3);
let liter = (userInput * 3.785412).toFixed(3);
let gallon = (userInput * 0.264172).toFixed(3);
let kilogram = (userInput / 2.2046).toFixed(3);
let pound = (userInput * 2.2046).toFixed(3);

 length.innerHTML = `${userInput} meters = ${feet} feets | ${userInput} feet = ${meter} meter's`
 volume.innerHTML = `${userInput} liter = ${gallon} gallons | ${userInput} gallon = ${liter} liter's`
 mass.innerHTML =   `${userInput} kilo = ${pound} pound's | ${userInput} pound = ${kilogram} kilo's`

  
}