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
  let city = entercity.value;
  h1.innerHTML = city;
  let apiKey = "88724523008dc9e1be18f6eb6a959b67";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}
function showWeather(response) {
  let icon = document.querySelector("#iconn");
  let city = document.querySelector("#city");
  let desc = document.querySelector("#descrip");
  let temp = document.querySelector(".temperature");
  let humi = document.querySelector("#hum");
  let wispeed = document.querySelector("#win");
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  celciustemp = Math.round(response.data.main.temp);
  city.innerHTML = response.data.name;
  desc.innerHTML = response.data.weather[0].main;
  temp.innerHTML = celciustemp;
  humi.innerHTML = `Humidity : ${Math.round(response.data.main.humidity)}`;
  wispeed.innerHTML = `WindSpeed : ${Math.round(
    response.data.wind.speed
  )} km/hr`;
}
function allIn(event) {
  event.preventDefault();
  function currentloc(position) {
    console.log(position);

    let Apkey = "88724523008dc9e1be18f6eb6a959b67";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Apkey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  navigator.geolocation.getCurrentPosition(currentloc);
}
function fahtemp(event) {
  event.preventDefault();
  let ftemp = document.querySelector(".temperature");
  degree.classList.remove("active");
  Fheit.classList.add("active");
  let fahte = (celciustemp * 9) / 5 + 32;
  ftemp.innerHTML = Math.round(fahte);
}
function degreetemp(event) {
  event.preventDefault();
  let temp = document.querySelector(".temperature");
  temp.innerHTML = Math.round(celciustemp);
}
let Fheit = document.querySelector("#Fahrenheit");
Fheit.addEventListener("click", fahtemp);

let degree = document.querySelector("#degrees");
degree.addEventListener("click", degreetemp);

let celciustemp = null;
let currentbttn = document.querySelector("#currentb");
currentbttn.addEventListener("click", allIn);
let searchbutton = document.querySelector("#searchb");
searchbutton.addEventListener("click", changeCity);
console.log(currtime());
