
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

let date = new Date("2023-09-19");
console.log(date);
let date2 = new Date("2023-10-18");
console.log(date2 - date);

/**Greeting section**/
 
function celsiusToFahr(tempCels){
    return tempCels * 9 / 5 + 32;
}

const greetingText = "Good morning!"

const weatherCondition = "sunny";
const userLocation = "Paris";
let temperature = 22.54678;
let temperatureText = temperature.toFixed(0) + "°C";

let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperatureText} outside.`;

document.querySelector('#greeting').innerHTML = greetingText;
document.querySelector('#weather').innerHTML = weatherText;

document.querySelector('.weather-group').addEventListener('click', function(e){
    if(e.target.id == "fahr") {
        temperatureText = celsiusToFahr(temperature).toFixed(0) + "°F";
    } else if(e.target.id == "celsius") {
        temperatureText = temperature.toFixed(0) + "°C";
    }
    document.querySelector('p#weather').innerHTML = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperatureText} outside.`;
});
