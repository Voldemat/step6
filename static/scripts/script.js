window.swiper = Swiper;

const headerMenu = () => {
	const body = document.querySelector("body");
	const headerBurgerElement = document.querySelector(".header__burger");
	headerBurgerElement.addEventListener("click", function () {
		document.querySelector(".header__menu").classList.toggle("header__menu-active");
		body.classList.toggle("active");
		headerBurgerElement.classList.toggle("burger-active");
	});
};

const initSliders = () => {
	new Swiper(".tst-slider-1", {
		navigation:{
			nextEl:".tst-slider__button-next",
			prevEl:".tst-slider__button-prev"
		},
		slidesPerView:"auto",
		// loop:true,
		centeredSlides:true,
		centeredSlidesBounds:true,
		initialSlide:2,
		spaceBetween:15,
		breakpoints: {
			767: {
				slidesPerView: 2,
				centeredSlides:false,
				centeredSlidesBounds:false,
			},
			920:{
				centeredSlides:true,
				centeredSlidesBounds:true,
			},
			1200:{
			  slidesPerView:3,
			  centeredSlidesBounds:true,
		    }
		   },
		
	  });
};


document.addEventListener("DOMContentLoaded", function () {
	headerMenu();
	initSliders();
});
