// Задача 1

"use strict"

function solveEquation(a, b, c) {
	let discriminant = b * b - 4 * a * c;
	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		let root = -b / (2 * a);
		return [root];
	} else {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];
	}
}
console.log(solveEquation(1, 5, 4))

// Задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof percent !== "number" || typeof contribution !== "number" || typeof amount !== "number" || typeof countMonths !== "number") {
		return "Параметры содержат неправильное значение";
	}

	let monthlyInterest = percent / 100 / 12;
	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (monthlyInterest + monthlyInterest / (Math.pow(1 + monthlyInterest, countMonths) - 1));
	let totalAmount = monthlyPayment * countMonths;

	return parseFloat(totalAmount.toFixed(2));
}
console.log (calculateTotalMortgage(10, 0, 50000, 12))