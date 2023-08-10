function currtime(date) {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let days = [
    "Sunday",
    "Moday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let currentdt = document.querySelector(".ctime");
  currentdt.innerHTML = `${day} ${hours}:${minutes}`;
}

function changeCity(event) {
  event.preventDefault();
  let entercity = document.querySelector("#citysearch");
  let h1 = document.querySelector("h1");
  h1.innerHTML = entercity.value;
}

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let wspeed = Math.round(response.data.wind.speed);

  let temp = document.querySelector(".temperature");
  temp.innerHTML = temperature;
  let humi = document.querySelector("#hum");
  humi.innerHTML = `Humidity : ${humidity}`;
  let wispeed = document.querySelector("#win");
  wispeed.innerHTML = `WindSpeed : ${wspeed} km/hr`;
}

let apiKey = "88724523008dc9e1be18f6eb6a959b67";
let units = "metric";
let entercit = document.querySelector("#citysearch");
let h1 = document.querySelector("h1");
h1.innerHTML = entercit.value;
let city = "cape town";
console.log(city);
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showWeather);

let searchbutton = document.querySelector("#searchb");
searchbutton.addEventListener("click", changeCity);
console.log(currtime());
