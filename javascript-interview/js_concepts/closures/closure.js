// function makeFunction() {
// 	var name = 'Mozilla';
// 	return function () {
// 		console.log(name);
// 	};
// }
//
// makeFunction()();

// var e = 10;
// function sum(a) {
// 	return function (b) {
// 		return function (c) {
// 			return function (d) {
// 				return a + b + c + d + e;
// 			};
// 		};
// 	};
// }
//
// console.log(sum(1)(2)(3)(4)); // 20

/**
 * * Closure in Javascript
 * * Q1. What will be logged to console?
 */

// let count = 0;
// (function () {
// 	if (count === 0) {
// 		let count = 1;
// 		console.log(count);
// 	}
// 	console.log(count);
// })();

/**
 * * Q2. Write a function that would allow you to do this
 */

// var addSix = createBase(6);
// console.log(addSix(10)); // 16
// console.log(addSix(21)); // 27

function createBase(base) {
	return function (num) {
		return num + base;
	};
}

var addSix = createBase(6);
console.log(addSix(10)); // 16
console.log(addSix(21)); // 27
