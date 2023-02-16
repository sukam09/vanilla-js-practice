const clock = document.querySelector('#clock');
let partsOfDay;

const setClock = () => {
  const now = new Date();
  const hours = convTo12Hour(now.getHours());
  const minutes = String(now.getMinutes()).padStart(2, '0');
  partsOfDay = getPartsOfDay(hours);
  clock.innerText = `${convTo12Hour(hours)}:${minutes}`;
};

const convTo12Hour = (hours) => (hours > 12 ? hours - 12 : hours);

const getPartsOfDay = (hours) => {
  if (hours < 12) {
    return 'morning';
  } else if (hours < 17) {
    return 'afternoon';
  } else {
    return 'evening';
  }
};

setClock();
setInterval(setClock, 1000);
