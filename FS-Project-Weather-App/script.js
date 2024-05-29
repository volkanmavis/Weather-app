let inputField = document.querySelector("#input-weather");
let btn = document.querySelector("#search");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let logo = document.querySelector("#logo");

let currentCity = "";
let temp = 0
let min = 0
let max = 0
let stat = ""


inputField.addEventListener("input", (e) => {
    currentCity = e.target.value;
});

btn.addEventListener("click", fetchData);

function fetchData() {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=112cc55d5c5b24a79cce5c25e25fc695`
    )
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        box1.innerHTML = currentCity.toUpperCase() + " " +  " " + Math.round(data.main.temp - 273) + " C°";

        if(data.weather[0].main === "Clear"){
            logo.src = "./sun.png";

        }else if(data.weather[0].main === "Clouds"){
            logo.src = "./cloudy.png";

        }else if(data.weather[0].main === "Rain"){
            logo.src = "./rain.png";
        }else if(data.weather[0].main === "Snow"){
            logo.src = "./snowy.png";
        }
        box3.innerHTML = "";
        box4.innerHTML = "";
        let humidity = document.createElement("img");
        box3.appendChild(humidity);
        humidity.src = "./humidity.png";

        let wind = document.createElement("img");
        box4.appendChild(wind);
        wind.src = "./wind.png";

        box5.innerHTML = data.main.humidity + "%";

        
        box6.innerHTML = data.wind.speed + " km/h";

    })
    
}
