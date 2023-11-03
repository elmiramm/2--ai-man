export function toggleBurger() {
	const pageHeader = document.querySelector('.page-header');
	const burger = document.querySelector('.burger');
	const menuMain = document.querySelector('.page-header__main-nav');
	const menuUser = document.querySelector('.page-header__user-nav');
	if (pageHeader) {
		pageHeader.addEventListener('click', (e) => {
			const target = e.target;
			if (target === burger || target.closest('.burger')) {
				if (burger.getAttribute('aria-label') === "Open menu") {
					burger.classList.add('active-burger');
					burger.setAttribute('aria-label', 'Close menu');
					menuMain.classList.add('page-header__main-nav--open');
					menuUser.classList.add('page-header__user-nav--open');
				} else {
					burger.classList.remove('active-burger');
					burger.setAttribute('aria-label', 'Open menu');
					menuMain.classList.remove('page-header__main-nav--open');
					menuUser.classList.remove('page-header__user-nav--open');
				}
			}
		})
	}

}