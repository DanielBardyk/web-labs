function appendAreaToContentTextElem(radius) {
	const area = Math.PI * Math.pow(radius, 2);

	const contentTextDiv = document.querySelector('.content__text');
	const newParagraph = document.createElement('p');
	newParagraph.textContent = area;
	contentTextDiv.appendChild(newParagraph);
}

export { appendAreaToContentTextElem }