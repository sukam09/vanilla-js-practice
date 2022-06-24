const loginForm = document.getElementById('login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const onLoginSubmit = (event) => {
  event.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  showGreeting(username);
};

const showGreeting = (username) => {
  const toDoForm = document.getElementById('todo-form');
  const toDoList = document.getElementById('todo-list');
  const logoutButton = document.createElement('button');

  loginForm.classList.add(HIDDEN_CLASSNAME);
  weathers.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  quotes.classList.remove(HIDDEN_CLASSNAME);

  greeting.innerText = `Good ${partsOfDay}, ${username}.`;
  logoutButton.innerText = 'Logout';
  logoutButton.addEventListener('click', onLogoutSubmit);
  greeting.appendChild(logoutButton);
};

const onLogoutSubmit = (event) => {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  loginInput.value = '';

  loginForm.classList.remove(HIDDEN_CLASSNAME);
  weathers.classList.add(HIDDEN_CLASSNAME);
  clock.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.add(HIDDEN_CLASSNAME);
  toDoList.classList.add(HIDDEN_CLASSNAME);
  quotes.classList.add(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  showGreeting(savedUsername);
}
