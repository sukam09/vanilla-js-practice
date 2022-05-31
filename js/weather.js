const API_KEY = "2d77145ed4e2b0de2032f025e4baf96e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`현재 위치\n위도: ${lat} 경도: ${lng}`);
}

function onGeoError(position) {
  alert("날씨 정보를 확인할 수 없어요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
