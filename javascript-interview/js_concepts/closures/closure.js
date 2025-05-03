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

// // var addSix = createBase(6);
// // console.log(addSix(10)); // 16
// // console.log(addSix(21)); // 27
//
// function createBase(base) {
// 	return function (num) {
// 		return num + base;
// 	};
// }
//
// var addSix = createBase(6);
// console.log(addSix(10)); // 16
// console.log(addSix(21)); // 27

/**
 * * Q3. Time Optimization
 */

// function find(index) {
// 	let a = [];
// 	for (let i = 0; i < 1000000; i++) {
// 		a[i] = i * i;
// 	}
//
// 	console.log(a[index]);
// }

/**
 * ! Q4. Time Optimization with Closure
 */

// function registerSquares() {
// 	const a = [];
// 	for (let i = 0; i < 1000000; i++) {
// 		a[i] = i * i;
// 	}
//
// 	return function (index) {
// 		console.log(a[index]);
// 	};
// }
//
// const find = registerSquares();
//
// console.time('6');
// find(6);
// console.timeEnd('6');
// console.time('12');
// find(12);
// console.timeEnd('12');

/**
 * ? Q5. Block scope and setTimeout
 */

// function a() {
// 	for (var i = 0; i < 3; i++) {
// 		setTimeout(function log() {
// 			console.log(i);
// 		}, 1000);
// 	}
// }
//
// a();

/**
 * * using let instead of var
 */
// function a() {
// 	for (let i = 0; i < 3; i++) {
// 		setTimeout(function log() {
// 			console.log(i);
// 		}, 1000);
// 	}
// }
//
// a();

/**
 * * using IIFE to create a new scope
 */

// function a() {
// 	for (var i = 0; i < 3; i++) {
// 		function fn(i) {
// 			setTimeout(function log() {
// 				console.log(i);
// 			}, 1000);
// 		}
// 		fn(i);
// 	}
// }
//
// a();

/**
 * ? Q6. How would you use closure to create a private counter?
 */

// function createCounter() {
// 	let count = 0;
// 	return {
// 		increment: function () {
// 			count++;
// 		},
// 		decrement: function () {
// 			count--;
// 		},
// 		getCount: function () {
// 			return count;
// 		},
// 		reset: function () {
// 			count = 0;
// 		},
// 	};
// }
//
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // 3
// counter.decrement();
// console.log(counter.getCount()); // 2
// counter.reset();
// console.log(counter.getCount()); // 0
// counter.increment();
// console.log(counter.getCount()); // 1
// counter.increment();
// console.log(counter.getCount()); // 2
// counter.increment();
// console.log(counter.getCount()); // 3

/**
 * ? Q7. What is a module pattern in JavaScript?
 */
//
// const Module = (function () {
// 	function privateMethod() {
// 		console.log('I am a private method');
// 	}
//
// 	return {
// 		publicMethod: function () {
// 			console.log('I am a public method');
// 			privateMethod();
// 		},
// 	};
// })();
//
// Module.publicMethod(); // I am a public

/**
 * ? Q8. Make this run only once;
 * ! Make sure to use closure to do this
 *
 * * let view;
 * * function likeTheVideo () {
 * * view = "Roadside Coder";
 * * console.log('subscribe to ', view);
 * *}
 * * likeTheVideo(); // subscribe to Roadside Coder
 * * likeTheVideo(); // subscribe to Roadside Coder
 * * ikeTheVideo(); // subscribe to Roadside Coder
 */

let view;

function customFunction() {
	let subscribed = false;
	return function () {
		if (!subscribed) {
			view = 'Roadside Coder';
			console.log('subscribe to ', view);
			subscribed = true;
		} else {
			console.log('Already subscribed to ', view);
		}
	};
}

const likeTheVideo = customFunction();
likeTheVideo(); // subscribe to Roadside Coder
likeTheVideo(); // Already subscribed to Roadside Coder
likeTheVideo(); // Already subscribed to Roadside Coder
likeTheVideo(); // Already subscribed to Roadside Coder
likeTheVideo(); // Already subscribed to Roadside Coder
