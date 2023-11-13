function getCookie(key) {
	const cookies = document.cookie.split(';');

	for (let i = 0; i < cookies.length; i++) {
		 const cookie = cookies[i].trim();

		 if (cookie.startsWith(`${key}=`)) {
			  return cookie.substring(key.length + 1);
		 }
	}
	return null;
}

function deleteCookie(key) {
	document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/lab5;`;
}

const keyCountMaxValue = 'countMaxValue';

function generateFormInputs() {
	const countMaxValueFromCookie = getCookie(keyCountMaxValue);
	const isFormNeedToRender = true;

	if(countMaxValueFromCookie) {
		const result = window.confirm(`Maximal value count: ${countMaxValueFromCookie}. Do you want to clear cookies?`);

		if (result) {
			deleteCookie(keyCountMaxValue);
		} else {
			window.alert('You have cookies. You need to refresh the page');
			isFormNeedToRender = false;
		}
	}

	if (isFormNeedToRender) {
		const form = document.getElementById('numberForm');
	
		const firstParentDiv = document.createElement('div');
		const secondParentDiv = document.createElement('div');
	
		for (let i = 1; i <= 10; i++) {
			const input = document.createElement('input');
			input.type = 'number';
			input.id = `number${i}`;
			input.name = `number${i}`;
			input.required = true;
	
			if (i < 6) {
				firstParentDiv.appendChild(input);
			} else {
				secondParentDiv.appendChild(input);
			}
		}
	
		form.appendChild(firstParentDiv);
		form.appendChild(secondParentDiv);
	
		const submitButton = document.createElement('input');
		submitButton.type = 'submit';
		submitButton.value = 'Submit';
		submitButton.classList.add('submit-button');
		form.appendChild(submitButton);
	
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const inputValues = [];
			for (let i = 1; i <= 10; i++) {
				const inputId = `number${i}`;
				const inputValue = document.getElementById(inputId).value;
				inputValues.push(Number(inputValue));
			}
	
			const maxValue = Math.max(...inputValues);
			const countMaxValue = inputValues.filter(value => value === maxValue).length;
	
			window.alert(`Maximal value count: ${countMaxValue}`);
			document.cookie = `${keyCountMaxValue}=${JSON.stringify(countMaxValue)}`;
		})
	}
}

export { generateFormInputs }