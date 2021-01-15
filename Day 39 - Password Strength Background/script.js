const background = document.getElementById("background");

const password = document.getElementById("password");

password.addEventListener("keydown", (e) => {
	background.style.filter = `blur(${20 - password.value.length * 2}px)`;
});
