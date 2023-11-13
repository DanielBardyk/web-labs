function handleContentChange() {
	const linkToChangeContent = document.querySelectorAll(".link-to-change-content");
	
	linkToChangeContent.forEach(function (link, index) {
		const blockContentInLocalStorage = JSON.parse(localStorage.getItem(`blockContent_${index}`) || null);
	
		const parentDiv = link.parentElement;
		const paragraph = parentDiv.querySelector('p');
		let isDefaultButtonCreated = {
			[index] : false
		}
	
		function showSetDefaultButton(contentInLocalStorage) {
			if (contentInLocalStorage) {
				paragraph.innerHTML = contentInLocalStorage.changed;

				if (!isDefaultButtonCreated[index]) {
					const button = document.createElement('button');
					button.textContent = 'Set default';
					paragraph.parentNode.appendChild(button);
					isDefaultButtonCreated[index] = true;

					button.addEventListener('click', function () {
						paragraph.innerHTML = contentInLocalStorage.default;
						localStorage.removeItem(`blockContent_${index}`);
						button.remove();
						isDefaultButtonCreated[index] = false;
					});
				}
			}
		}
	
		showSetDefaultButton(blockContentInLocalStorage);
	
		link.addEventListener("dblclick", function () {
	
			const paragraphContent = paragraph.innerHTML.replace(/\t/g, '');
	
			paragraph.innerHTML = '';
			link.innerHTML = '';

			let maxLength = 200;
			
			if (index == 2) {
				maxLength = 100;
			} else if (index == 4) {
				maxLength = 450;
			}
			
			paragraph.insertAdjacentHTML("beforeEnd", `
				<textarea name="" id="${'input_' + index}" class="inputToChange" maxlength="${maxLength}"></textarea>
				<button id="${'button_' + index}">Save</button>
			`);
	
			const textarea = document.querySelector(`#${'input_' + index}`);
			const button = document.querySelector(`#${'button_' + index}`);
	
			textarea.innerText = paragraphContent;
	
			button.addEventListener("click", function () {
				const randomColor = generateLightColor();

				if (index == 4) {
					parentDiv.parentNode.parentNode.style.backgroundColor = randomColor;
				}
				parentDiv.style.backgroundColor = randomColor;
				parentDiv.parentNode.style.backgroundColor = randomColor;
	
				let changedContent = {};
	
				if (blockContentInLocalStorage) {
					changedContent = {
						default: blockContentInLocalStorage.default,
						changed: textarea.value
					}
					localStorage.setItem(
						`blockContent_${index}`, 
						JSON.stringify(changedContent)
					);
				} else {
					changedContent = {
						default: paragraphContent,
						changed: textarea.value
					}
					localStorage.setItem(
						`blockContent_${index}`, 
						JSON.stringify(changedContent)
					);
				}
	
				paragraph.innerHTML = textarea.value;
				link.innerHTML = "Double click to change the content";
				showSetDefaultButton(changedContent);
			})
	
			function generateLightColor() {
				const red = Math.floor(Math.random() * 156) + 100;
				const green = Math.floor(Math.random() * 156) + 100;
				const blue = Math.floor(Math.random() * 156) + 100;
	
				const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
		  
				return color;
		  }
		});
	});
}

export { handleContentChange }