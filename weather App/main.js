const apikey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const temp = document.querySelector(".card-title");
const wind = document.querySelector(".wind");
const humity = document.querySelector(".humidity");
const cloud = document.querySelector(".cloud");
const searchbox = document.querySelector(".search");
const button = document.querySelector(".btn");
const error = document.querySelector(".error");
const col = document.querySelector(".col");

async function checkapi(cityname) {
  const response = await fetch(apiurl + cityname + `&appid=${apikey}`);
  if (response.status == 404) {
    error.style.display = "block";
    error.style.color = "red";
    col.style.backgroundColor = "#dc3545";
  } else {
    const data = await response.json();
    const citytemp = Math.round(data.main.temp);
    const windspeed = Math.round(data.wind.speed);
    const humidity = Math.round(data.main.humidity);
    const couldy = Math.round(data.main.temp_max);
    temp.textContent = `${cityname} Temperature is ${citytemp}°C`;
    wind.textContent = `Wind speed is ${windspeed} km/h`;
    humity.textContent = ` Humidity is ${humidity} %`;
    cloud.textContent = ` Max Temperature is ${couldy}°C`;
    error.style.display = "none";
    col.style.backgroundColor = "#B6D0E2";
    // console.log(data);
  }
}
button.addEventListener("click", (event) => {
  event.preventDefault();
  checkapi(searchbox.value);
});
