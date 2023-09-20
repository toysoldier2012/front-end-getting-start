
/**variable**/

var customer = "John";
const constant = 2000;
let variable = 200;

/**Array**/

let array = [0,1,2,3,4,5,6,7];
array.push(10);
array.unshift(-1);
let arrayConcat = array.concat([5646,879,12]);
    
const aThumbnailsImages = [
    {
        "src":"./assets/gallery/image1.jpg",
        "alt":"Thumbnail Image 1"
    },
    {
        "src":"./assets/gallery/image2.jpg",
        "alt":"Thumbnail Image 2"
    },
    {
        "src":"./assets/gallery/image3.jpg",
        "alt":"Thumbnail Image 3"
    },
];

/**Object**/
let student = {"name": "John", "yearOfBirth": 1990, "country":"Italy"};
let date = new Date("2023-09-19");
let date2 = new Date("2023-10-18");

function celsiusToFahr(tempCels){
    return tempCels * 9 / 5 + 32;
}

function navMenuHandler(){
    document.querySelector('#open-nav-menu').addEventListener('click', function(){
        document.querySelector('header nav .wrapper').classList.add('nav-open');
    });
    
    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

function greetingSectionHandler(){
    let currentTime = new Date();
    let greetingText;
    
    if(currentTime.getHours() < 12 && currentTime.getHours() > 5 )
        greetingText = "Good morning!";
    else if(currentTime.getHours() >= 12 && currentTime.getHours() < 18)
        greetingText = "Good afternoon!";
    else greetingText = "Good evening!";
    
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
        currentTime = new Date();
    
        document.querySelector("span[data-time=hours]").textContent = currentTime.getHours().toString().padStart(2, "0");
        document.querySelector("span[data-time=minutes]").textContent = currentTime.getMinutes().toString().padStart(2, "0");
        document.querySelector("span[data-time=seconds]").textContent = currentTime.getSeconds().toString().padStart(2, "0");
    }, 1000);
}

function galleryHandler(){
    let mainImage = document.querySelector("#gallery > img");
    mainImage.src = "/assets/gallery/image1.jpg";
    mainImage.alt = "image 1";
    
    let thumbnails = document.querySelector("#gallery .thumbnails");
    
    // src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" data-array-index="0" data-selected="true"
    aThumbnailsImages.forEach(function(image, index){
        let thumbImg = document.createElement("img");
        thumbImg.src = image.src;
        thumbImg.alt = image.alt;
        thumbImg.dataset.arrayIndex = index;
        thumbImg.dataset.selected = false;
        thumbImg.addEventListener("click", function(){
            thumbnails.childNodes.forEach((element) => {
                element.dataset.selected = false;
            });
            thumbImg.dataset.selected = true;
            mainImage.src = thumbImg.src;
            mainImage.alt = thumbImg.alt;
        });
        thumbnails.appendChild(thumbImg);
    });
    
    thumbnails.childNodes[0].dataset.selected = true;
}

// page load

navMenuHandler();
greetingSectionHandler();
galleryHandler();
