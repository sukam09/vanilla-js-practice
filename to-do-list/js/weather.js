const API_KEY = config.API_KEY;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");
      const temperature = document.querySelector("#weather span:last-child");

      weather.innerText = data.name;
      city.innerText = data.weather[0].main;
      temperature.innerText = `${data.main.temp}℃`;
    });
}

function onGeoError() {
  const weather = document.querySelector("#weather span:first-child");
  weather.innerText = "날씨 정보를 확인할 수 없어요";
  weather.classList.add("warning");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
