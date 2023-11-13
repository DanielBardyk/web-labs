function handleChangeBgColor() {
	const backgroundColorKey = 'backgroundColor';
	const backgroundColor = localStorage.getItem(backgroundColorKey);
	const colorPicker = document.querySelector('#colorPicker');
	const blockForChaningBg = document.querySelector('.left-sidebar__change-bg')
	
	if (backgroundColor) {
		blockForChaningBg.style.backgroundColor = backgroundColor;
	}
	
	colorPicker.addEventListener('blur', function() {
		const selectedColor = colorPicker.value;
		blockForChaningBg.style.backgroundColor = selectedColor;
		localStorage.setItem(backgroundColorKey, selectedColor);
	});
}

export { handleChangeBgColor }
