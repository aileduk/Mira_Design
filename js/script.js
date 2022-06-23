// BURGER MENU
const mobileBtn = document.querySelector(".mobile__btn");
const mobileBtnIcon = document.querySelector(".mobile__btn span");
const mobileNav = document.querySelector(".mobile__nav");

const toggleMenu = () => {
	mobileBtnIcon.classList.toggle("active");
	mobileNav.classList.toggle("active");
	document.body.classList.toggle("fixed");
};

mobileBtn.addEventListener("click", toggleMenu);

// SLIDER
new Swiper(".swiper", {
	loop: true,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		580: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1100: {
			slidesPerView: 3,
			dynamicBullets: true,
			centeredSlides: true,
			spaceBetween: 50,
		},
	},
});
