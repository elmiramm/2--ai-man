import Swiper from "swiper";
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Parallax, Autoplay]);

export function swiperSlider() {
	// if (document.querySelector('.slider-section__body')) {
	// 	new Swiper('.slider-section__body', {
	// 		observer: true, //обновляет swiper при изменении элементов слайдера
	// 		observeParents: true, //обновляет swiper при изменении в родительских элементах слайдера
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		// slidesPerGroup: 4, //если нужно чтобы кол-во dots было меньше кол-ва slides. Slides будут перелистываться группами
	// 		// centeredSlides: true, //Активный слайд по центру
	// 		loop: true, // pза последним слайдем будет идти заново первый
	// 		watchOverflow: false,
	// 		speed: 800,
	// 		loopAdditionalSlides: 5,
	// 		preloadImage: false,
	// 		// parallax: true,
	// 		simulateTouch: false, //вкл/выкл перетаскинавия на ПК
	// 		pagination: {
	// 			el: '.slider-section__controls .dots',
	// 			clickable: true, //true - можно кликнуть на dotts и перейти на нужный слайд
	// 			dynamicBullets: false, // ]true - dots будут менять размер в зависимости от того насколько далеко расположены от активного dots
	// 		},
	// 		// autoplay: {
	// 		// 	delay: 3000, //Пауза м.д. прокрутками
	// 		// 	stopOnLastSlide: false,
	// 		// 	disableOnInteraction: false,
	// 		// },
	// 		effect: 'slide', //значение по умолчанию - перелистывает слайды, 'fade' - смена прозрачности
	// 		// navigation: {
	// 		// 	nextEl: '.slider-section .slider-arrow--next',
	// 		// 	prevEl: '.slider-section .slider-arrow--prev',
	// 		// },
	// 		// breakpoints: { //Mobile First - значения от заданной точки и больше 
	// 		// 	279: {
	// 		// 		slidesPerView: 1.1,
	// 		// 		spaceBetween: 15,
	// 		// 	},
	// 		// 	768: {
	// 		// 		slidesPerView: 2,
	// 		// 		spaceBetween: 20,
	// 		// 	},
	// 		// 	992: {
	// 		// 		slidesPerView: 3,
	// 		// 		spaceBetween: 32,
	// 		// 	},
	// 		// }
	// 	});
	// }
	if (document.querySelector('.slider-things__body')) {
		new Swiper('.slider-things__body', {
			observer: true, //обновляет swiper при изменении элементов слайдера
			observeParents: true, //обновляет swiper при изменении в родительских элементах слайдера
			slidesPerView: 4.5,
			spaceBetween: 0,
			slidesPerGroup: 1, //если нужно чтобы кол-во dots было меньше кол-ва slides. Slides будут перелистываться группами
			// centeredSlides: true, //Активный слайд по центру
			loop: true, // за последним слайдем будет идти заново первый
			watchOverflow: false,
			speed: 800,
			loopAdditionalSlides: 3,
			preloadImage: false,
			// parallax: true,
			simulateTouch: true, //вкл/выкл перетаскинавия на ПК
			// pagination: {
			// 	el: '.slider-section__controls .dots',
			// 	clickable: true, //true - можно кликнуть на dotts и перейти на нужный слайд
			// 	dynamicBullets: false, // ]true - dots будут менять размер в зависимости от того насколько далеко расположены от активного dots
			// },
			autoplay: {
				delay: 1000, //Пауза м.д. прокрутками
				stopOnLastSlide: false,
				disableOnInteraction: false,
			},
			// effect: 'slide', //значение по умолчанию - перелистывает слайды, 'fade' - смена прозрачности
			navigation: {
				nextEl: '.slider-things__controls .slider-arrow--next',
				prevEl: '.slider-things__controls .slider-arrow--prev',
			},
			breakpoints: { //Mobile First - значения от заданной точки и больше 
				0: {
					slidesPerView: 1.5,
				},
				415: {
					slidesPerView: 2.2,
				},
				584: {
					slidesPerView: 2.8,
				},
				700: {
					slidesPerView: 3,
				},
				990: {
					slidesPerView: 3.75,

				},
				1250: {
					slidesPerView: 4.5,
				},
			}
		});
	}
	if (document.querySelector('.slider-reviews__body')) {
		new Swiper('.slider-reviews__body', {
			observer: true, //обновляет swiper при изменении элементов слайдера
			observeParents: true, //обновляет swiper при изменении в родительских элементах слайдера
			slidesPerView: 1,
			spaceBetween: 0,
			// slidesPerGroup: 4, //если нужно чтобы кол-во dots было меньше кол-ва slides. Slides будут перелистываться группами
			// centeredSlides: true, //Активный слайд по центру
			loop: true, // pза последним слайдем будет идти заново первый
			watchOverflow: false,
			speed: 800,
			loopAdditionalSlides: 5,
			preloadImage: false,
			// parallax: true,
			simulateTouch: true, //вкл/выкл перетаскинавия на ПК
			// pagination: {
			// 	el: '.slider-reviews__controls .dots',
			// 	clickable: true, //true - можно кликнуть на dotts и перейти на нужный слайд
			// 	dynamicBullets: false, // ]true - dots будут менять размер в зависимости от того насколько далеко расположены от активного dots
			// },
			// autoplay: {
			// 	delay: 3000, //Пауза м.д. прокрутками
			// 	stopOnLastSlide: false,
			// 	disableOnInteraction: false,
			// },
			effect: 'slide', //значение по умолчанию - перелистывает слайды, 'fade' - смена прозрачности
			navigation: {
				nextEl: '.slider-reviews .slider-arrow--next',
				prevEl: '.slider-reviews .slider-arrow--prev',
			},
			// breakpoints: { //Mobile First - значения от заданной точки и больше 
			// 	279: {
			// 		slidesPerView: 1.1,
			// 		spaceBetween: 15,
			// 	},
			// 	768: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20,
			// 	},
			// 	992: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 32,
			// 	},
			// }
		});
	}
}