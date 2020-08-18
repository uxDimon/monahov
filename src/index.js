import "./styles.scss";

// Скрипт для бургер меню
const burgerButton = document.querySelectorAll(".main-manu__burger-button");
const burgerManu = document.querySelector(".burger-manu");

for (const i of burgerButton) {
	i.addEventListener("click", () => {
		burgerManu.classList.toggle("burger-manu__is-active");
		for (const b of burgerButton) {
			b.classList.toggle("main-manu__burger-button-cross");
		}
	});
}
