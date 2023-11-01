export function tabs() {
	const head = document.querySelector('.tabs__head');
	const body = document.querySelector('.tabs__body');

	const getActiveTagName = () => {
		return head.querySelector('.tabs__caption--active').dataset.tab;
	}

	const setActiveContent = () => {
		if (body.querySelector('.tabs__item--active')) {
			body.querySelector('.tabs__item--active').classList.remove('tabs__item--active');
		}
		body.querySelector(`[data-tab=${getActiveTagName()}]`).classList.add('tabs__item--active');
	}

	if (!head.querySelector('.tabs__caption--active')) {
		head.querySelector('.tabs__caption').classList.add('tabs__caption--active');
	}

	setActiveContent(getActiveTagName());

	head.addEventListener("click", e => {
		const caption = e.target.closest('.tabs__caption');
		if (!caption) return;
		if (caption.classList.contains('tabs__caption--active')) return;

		if (head.querySelector('.tabs__caption--active')) {
			head.querySelector('.tabs__caption--active').classList.remove('tabs__caption--active');
		}
		caption.classList.add('tabs__caption--active');
		setActiveContent(getActiveTagName());
	})
}