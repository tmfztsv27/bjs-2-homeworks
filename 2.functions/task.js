//Задача 1
function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: undefined, max: undefined, avg: undefined };
}

let min = Math.min(...arr);
let max = Math.max(...arr);
let sum = arr.reduce((acc, curr) => acc + curr, 0);
let avg = sum / arr.length;
  return { min, max, avg };
}
let params = getArrayParams(3, 5, 1, 9, 6);
console.log(params);
function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
