function swapContent() {
	const headerTitleElement = document.querySelector('.header__title h1');
	const footerTitleElement = document.querySelector('.footer__title h1');

	const initialHeaderTitle = headerTitleElement.innerHTML;
	const initialFooterTitle = footerTitleElement.innerHTML;
	headerTitleElement.innerHTML = initialFooterTitle;
	footerTitleElement.innerHTML = initialHeaderTitle;
}

export { swapContent }