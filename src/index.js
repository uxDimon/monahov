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

// Табы
const tabsButton = document.querySelectorAll(".about-doctor__tab-button");
const tabsContainer = document.querySelectorAll(".about-doctor__tab-container");

for (const i of tabsButton) {
	i.addEventListener("click", () => {
		for (const b of tabsButton) {
			b.classList.remove("tab-button-active");
		}
		i.classList.add("tab-button-active");

		for (const c of tabsContainer) {
			c.classList.remove("tab-container-active");
		}
		document.querySelector("#" + i.value).classList.add("tab-container-active");
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
