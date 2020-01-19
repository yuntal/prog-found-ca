



1) // Declare and initialise a variable with a string value. 

var person = "John Doe";  

2) // Create an object variable called person and give it two properties (a key and a value) of your choice.  

var person = {
   name: "Jonathan",
   gender: "man",
}
console.log(person);

3)  // Create a variable called outOfStock and assign it a boolean value. Create an if else statement that checks the value of outOfStock. If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = true;

if(outOfStock === true) {
   console.log("The product is out of stock");
}
else {
   console.log("The product is not out of stock");
}
console.log (outOfStock);

4) // Create an array of five numbers. Loop through the array and console log each value.

var numbers = [0,1,2,3,4];
for (var numbers = 0; numbers <=4 ; numbers++) {
console.log (numbers);
}


5) // Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

for(var add = 15; add <= 25; add++) {
   console.log(add);
}

6) // Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

console.log(add == 20); 

7) // Create an array of two objects. Each object must have the same three properties (with different values): •	one property with a string valueone property with a number value•	one property with a boolean valueLoop through the array and console log the number value and the boolean value.

var dog = [
{
   name: "luke",
   age: 4,
   numberOfArms: true,
}
];
console.log(dog.length);
for(var i = 0; i < dog.length; i++){
   console.log(dog[i]);
}


var octopus = [
{
   name: "cedric",
   age: 3,
   numberOfArms: true,
}
];
console.log(octopus.length);
for(var i = 0; i < octopus.length; i++){
   console.log(octopus[i]);
}


8) // Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.Inside the function, log the string "I don't like " together with the argument.Call the function and pass in a value of your choice.

var whatIDontLike = function (animal) {
   console.log("i don't like" + " " + animal);
};

var whatIDontLike = function (animal) {
   console.log("i don't like" + " " + "snakes");
};
whatIDontLike("snakes");


9) // Create a function that accepts two arguments. Inside the function, subtract the second argument from the first and console log the result.

function myNumbers(y, t) {
   return y - t;
 }
 console.log (myNumbers(93, 12));   

10) // Create an empty array. Create a function that accepts one argument. Inside the function, add the argument to the array.Call the function and pass in a value of any type.

var emptyArray = [];
function myArray (logWord){
   console.log ("logword");
}
   emptyArray.push("logWord");

console.log (emptyArray);









