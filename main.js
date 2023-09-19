
function testAlert(message){
    alert(message);
}

console.log("test in console");

document.getElementById('greeting').innerHTML="Hello world!";

document.querySelector('#open-nav-menu').addEventListener('click', function(){
    document.querySelector('header nav .wrapper').classList.add('nav-open');
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});


/**variable**/

var customer = "John";
console.log("Hello " + customer);

const constant = 2000;
let variable = 200;

/**Array**/

let array = [0,1,2,3,4,5,6,7];
array.push(10);
array.unshift(-1);
console.log(array);
let arrayConcat = array.concat([5646,879,12]);
console.log(arrayConcat);

/**Object**/
let student = {"name": "John", "yearOfBirth": 1990, "country":"Italy"};
console.log(student.name);

/**Greeting section**/
 
function celsiusToFahr(tempCels){
    return tempCels * 9 / 5 + 32;
}

const greetingText = "Good morning!"

const weatherCondition = "sunny";
const userLocation = "Paris";
let temperature = 22.54678;

let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(0) + "°F"} outside.`;
console.log(weatherText);

document.querySelector('#greeting').innerHTML = greetingText;
document.querySelector('#weather').innerHTML = weatherText;


