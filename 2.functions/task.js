//Задача 1

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}

	let avg = (sum / arr.length).toFixed(2);

	return {
		min,
		max,
		avg: +avg
	};
}

console.log(getArrayParams(-10, 5, 10));

//Задача 2

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	arr.forEach(el => {
		if (el % 2 === 0) {
			sumEvenElement += el;
		} else {
			sumOddElement += el;
		}
	});

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	arr.forEach(el => {
		if (el % 2 === 0) {
			sumEvenElement += el;
			countEvenElement++;
		}
	});

	return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

//Задача 3

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}
console.log(makeWork(arr, differenceMaxMinWorker));