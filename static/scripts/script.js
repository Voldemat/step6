const headerMenu = () => {
	const body = document.querySelector("body");
	const headerBurgerElement = document.querySelector(".header__burger");
	headerBurgerElement.addEventListener("click", function () {
		document.querySelector(".header__menu").classList.toggle("header__menu-active");
		body.classList.toggle("active");
		headerBurgerElement.classList.toggle("burger-active");
	});
};

document.addEventListener("DOMContentLoaded", function () {
	headerMenu();
});
