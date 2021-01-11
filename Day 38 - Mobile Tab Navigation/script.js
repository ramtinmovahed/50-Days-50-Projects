const contents = document.querySelectorAll(".content");

const items = document.querySelectorAll("li");

items.forEach((item, index) => {
	item.addEventListener("click", (e) => {
		HideAllContents();
		HideAllItems();
		item.classList.add("active");
		contents[index].classList.add("show");
	});
});
function HideAllContents() {
	contents.forEach((content) => content.classList.remove("show"));
}

function HideAllItems() {
	items.forEach((item) => item.classList.remove("active"));
}
