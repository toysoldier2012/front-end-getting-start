
function testAlert(message){
    alert(message);
}

document.getElementById('greeting').innerHTML="Hello world!";

document.querySelector('#open-nav-menu').addEventListener('click', function(){
    document.querySelector('header nav .wrapper').classList.add('nav-open');
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});


/**variable**/

var customer = "John";
const constant = 2000;
let variable = 200;

/**Array**/

let array = [0,1,2,3,4,5,6,7];
array.push(10);
array.unshift(-1);
let arrayConcat = array.concat([5646,879,12]);

/**Object**/
let student = {"name": "John", "yearOfBirth": 1990, "country":"Italy"};

let date = new Date("2023-09-19");
let date2 = new Date("2023-10-18");

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

setInterval(() => {
    let localTime = new Date();

    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
}, 1000);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}