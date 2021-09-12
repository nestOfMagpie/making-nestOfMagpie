const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("#nameText");
const greetingName = document.querySelector("#greeting-name");

function submitLoginForm(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.classList.add("hidden");
    greetingName.innerText = `Hello, ${username}`;
}

const savedUsername = localStorage.getItem("username");

if (savedUsername){
    greeting.classList.add("hidden");
    greetingName.innerText = `Hello, ${savedUsername}`;
} else if (savedUsername === "null") {
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", submitLoginForm);