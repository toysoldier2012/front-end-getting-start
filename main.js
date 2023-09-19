
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

/**Greeting section**/

const greetingText = "Good morning!"

const weatherCondition = "sunny";
const userLocation = "Paris";
let temperature = 22.54678;

let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(0)}°C outside.`;
console.log(weatherText);

document.querySelector('#greeting').innerHTML = greetingText;
document.querySelector('#weather').innerHTML = weatherText;
