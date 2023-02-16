const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.addEventListener('click', () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
});

decrease.addEventListener('click', () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
});
