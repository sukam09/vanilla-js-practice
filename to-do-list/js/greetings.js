const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
}

function paintGreeting(username) {
  const toDoForm = document.getElementById("todo-form");
  const toDoList = document.getElementById("todo-list");
  const logoutButton = document.createElement("button");

  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);

  greeting.innerText = `${username}님 안녕하세요!`;
  logoutButton.innerText = "로그아웃";
  logoutButton.addEventListener("click", onLogoutSubmit);
  greeting.appendChild(logoutButton);
}

function onLogoutSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  loginInput.value = "";

  // 이미 html에서 js 파일을 모두 실행한 상태이므로 todo.js에 있는 변수들에 접근할 수 있음
  // global variable이므로 다른 파일에서도 접근할 수 있다!
  greeting.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.add(HIDDEN_CLASSNAME);
  toDoList.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 새로고침해도 로그인 세션을 유지하길 원해서 한번 더 실행
  paintGreeting(savedUsername);
}
