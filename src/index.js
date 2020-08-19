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

// Слайдер https://www.npmjs.com/package/tiny-slider
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";
import "../node_modules/tiny-slider/src/tiny-slider.scss";

var slider = tns({
	container: ".injury__slider",
	items: 2,
	// fixedWidth: 325,
	autoWidth: true,
	gutter: 20,
	mouseDrag: true,
	loop: false,
	speed: 300,
	controls: false,
	nav: false,
});
