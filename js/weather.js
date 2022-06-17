const API_KEY = config.API_KEY;
const weathers = document.querySelector("#weathers");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = weathers.querySelector("span:first-child");
      const city = weathers.querySelector("span:nth-child(2)");
      const temperature = weathers.querySelector("span:last-child");

      weather.innerText = data.name;
      city.innerText = data.weather[0].main;
      temperature.innerText = `${data.main.temp}℃`;
    });
}

function onGeoError() {
  const weather = document.querySelector("#weather span:first-child");
  weather.innerText = "Can't find you. No weather for you.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
