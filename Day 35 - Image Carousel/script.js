const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const imageContainer = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let currentImageIndex = 0;

let interval = setInterval(run, 2000);

function run() {
	currentImageIndex++;
	changeImage();
}

function changeImage() {
	if (currentImageIndex > img.length - 1) {
		currentImageIndex = 0;
	} else if (currentImageIndex < 0) {
		currentImageIndex = img.length - 1;
	}
	imgs.style.transform = `translateX(${-currentImageIndex * 500}px)`;
}

function resetInterval() {
	clearInterval(interval);
	interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
	currentImageIndex++;
	changeImage();
	resetInterval();
});

leftBtn.addEventListener("click", () => {
	currentImageIndex--;
	changeImage();
	resetInterval();
});
