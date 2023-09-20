/**variable**/
/**Array**/

let array = [0,1,2,3,4,5,6,7];
array.push(10);
array.unshift(-1);
let arrayConcat = array.concat([5646,879,12]);
let openWeatherAPIKey = 'xxxxxxxxxxxxxxxxxxxxxxxx';
let openWeatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${openWeatherAPIKey}&units=metric`;
    
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

const aProducts = [
    {
        "title": "AstroFiction",
        "author": "John Doe",
        "price": 49.9,
        "image": "./assets/products/img6.png"
    },
    {
        "title": "Space Odissey",
        "author": "Marie Anne",
        "price": 35,
        "image": "./assets/products/img1.png"
    },
    {
        "title": "Doomed City",
        "author": "Jason Cobert",
        "price": 0,
        "image": "./assets/products/img2.png"
    },
    {
        "title": "Black Dog",
        "author": "John Doe",
        "price": 85.35,
        "image": "./assets/products/img3.png"
    },
    {
        "title": "My Little Robot",
        "author": "Pedro Paulo",
        "price": 0,
        "image": "./assets/products/img5.png"
    },
    {
        "title": "Garden Girl",
        "author": "Ankit Patel",
        "price": 45,
        "image": "./assets/products/img4.png"
    }
];
const aProductsFree = aProducts.filter(product => product.price == 0);
const aProductsPaid = aProducts.filter(product => product.price > 0);


function celsiusToFahr(tempCels){
    return tempCels * 9 / 5 + 32;
}

function navMenuHandler(){
    document.querySelector('#open-nav-menu').addEventListener('click', function(){
        document.querySelector('header nav .wrapper').classList.add('nav-open');
    });
    
    document.querySelectorAll("#close-nav-menu").forEach(button => button.addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    }));
}

function greetingSectionHandler(){
    let currentTime = new Date();
    let greetingText;
    
    if(currentTime.getHours() < 12 && currentTime.getHours() > 5 )
        greetingText = "Good morning!";
    else if(currentTime.getHours() >= 12 && currentTime.getHours() < 18)
        greetingText = "Good afternoon!";
    else greetingText = "Good evening!";

    document.querySelector('#greeting').innerHTML = greetingText;
    
    weatherHandler();

    setInterval(() => {
        currentTime = new Date();
    
        document.querySelector("span[data-time=hours]").textContent = currentTime.getHours().toString().padStart(2, "0");
        document.querySelector("span[data-time=minutes]").textContent = currentTime.getMinutes().toString().padStart(2, "0");
        document.querySelector("span[data-time=seconds]").textContent = currentTime.getSeconds().toString().padStart(2, "0");
    }, 1000);
}

function weatherHandler(){
    
    navigator.geolocation.getCurrentPosition(position => {
        let url = openWeatherAPIUrl.replace("{lat}", position.coords.latitude).replace("{lon}", position.coords.longitude);
        fetch(url).then(response => response.json()).then(data => {
            console.log(data);
            const userLocation = data.name;
            const weatherCondition = data.weather[0].main;
            const temperature = data.main.temp;

            let temperatureText = temperature.toFixed(0) + "°C";
            
            let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperatureText} outside.`;
            
            document.querySelector('#weather').innerHTML = weatherText;
            
            document.querySelector('.weather-group').addEventListener('click', function(e){
                console.log(e.target.id)
                if(e.target.id == "fahr") {
                    temperatureText = celsiusToFahr(temperature).toFixed(0) + "°F";
                } else if(e.target.id == "celsius") {
                    temperatureText = temperature.toFixed(0) + "°C";
                }
                document.querySelector('p#weather').innerHTML = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperatureText} outside.`;
            });
        });
    });
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

function productAreaHandler(type){
    if(type === "free")
        generateProductArea(aProductsFree);
    else if(type === "paid")
        generateProductArea(aProductsPaid);
    else  generateProductArea(aProducts);
}

function generateProductArea(products){
    let productArea = document.querySelector(".products-area");

    productArea.textContent = "";

    products.forEach(product => {

        let productItem = document.createElement("div");
        productItem.classList.add("product-item");
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;

        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");
        
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.innerHTML = product.title;
        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.innerHTML = product.author;
        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        priceTitle.innerHTML = "Price"
        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.innerHTML = product.price;

        productDetails.appendChild(productTitle);
        productDetails.appendChild(productAuthor);
        productDetails.appendChild(priceTitle);
        productDetails.appendChild(productPrice);

        productItem.appendChild(productImage);
        productItem.appendChild(productDetails);

        productArea.appendChild(productItem);
    });
}

function productFilterHandler(){
    document.querySelector(".products-filter > label[for='all'] > span").innerHTML = aProducts.length;
    document.querySelector(".products-filter > label[for='free'] > span").innerHTML = aProductsFree.length;
    document.querySelector(".products-filter > label[for='paid'] > span").innerHTML = aProductsPaid.length;

    document.querySelector(".products-filter").addEventListener("click", function(typeProduct){
        if(typeProduct.target.id == "all")
            productAreaHandler("all");
        else if(typeProduct.target.id == "free")
            productAreaHandler("free");
        else if(typeProduct.target.id == "paid")
            productAreaHandler("paid");
    });
}

// page load

navMenuHandler();
greetingSectionHandler();
galleryHandler();
generateProductArea(aProducts)
productFilterHandler();