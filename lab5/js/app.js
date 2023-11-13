import { swapContent } from './task1.js';
import { appendAreaToContentTextElem } from './task2.js';
import { generateFormInputs } from './task3.js';
import { handleChangeBgColor } from './task4.js';
import { handleContentChange } from './task5.js';

setTimeout(() => {
	// Task 1
	swapContent();

	// Task 2
	const circleRadius = 5;
	appendAreaToContentTextElem(circleRadius);

}, 1500);

// task 3
generateFormInputs();

// task 4
handleChangeBgColor();

// task 5
handleContentChange();