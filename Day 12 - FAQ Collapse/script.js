// My Code
// let buttons = document.querySelectorAll("button");

// let faqs = document.querySelectorAll(".faq");

// buttons.forEach((btn, index) => {
// 	btn.addEventListener("click", () => {
// 		// let currentActive = document.querySelector(".faq.active");
// 		// currentActive.classList.remove("active");
// 		faqs[index].classList.toggle("active");
// 	});
// });

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
	toggle.addEventListener("click", () => {
		toggle.parentNode.classList.toggle("active");
	});
});
