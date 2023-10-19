export function toggleBurger() {
	const pageHeader = document.querySelector('.page-header');
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.page-header__right');
	if (pageHeader) {
		pageHeader.addEventListener('click', (e) => {
			const target = e.target;
			if (target === burger || target.closest('.burger')) {
				if (burger.getAttribute('aria-label') === "Open menu") {
					burger.classList.add('active-burger');
					burger.setAttribute('aria-label', 'Close menu');
					menu.classList.add('page-header__right--open');
				} else {
					burger.classList.remove('active-burger');
					burger.setAttribute('aria-label', 'Open menu');
					menu.classList.remove('page-header__right--open');
				}
			}
		})
	}

}