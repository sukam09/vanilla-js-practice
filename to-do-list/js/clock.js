const clock = document.querySelector("h2#clock"); // clock이 h2의 자식이 아니므로 띄면 안됨
const dayOfWeek = "일월화수목금토";

function getClock() {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1); // getMonth()는 0부터 시작
  const date = String(dateObj.getDate());
  const hours = convTo12Hour(dateObj.getHours());
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  const seconds = String(dateObj.getSeconds()).padStart(2, "0");
  const day = dayOfWeek[dateObj.getDay()];

  clock.innerText = `${year}년  ${month}월  ${date}일 ${day}요일\n${hours}:${minutes}:${seconds}`;
}

function convTo12Hour(hours) {
  const ampm = hours >= 12 ? "오후" : "오전";
  if (hours > 12) {
    hours -= 12;
  }
  return `${ampm} ${hours}`;
}

getClock();
setInterval(getClock, 1000); // callback 함수 쓸때 인자로 () 제외하고 함수명만 넘겨줘야 함에 주의
