// var-let-const
// scope

/***************
 * * Global Scope
 * ************/

// var a = 5;
// let b = 10; // block scope variable
// const c = 15; // block scope variable
// console.log(a); // 5
// console.log(b); // 10
// console.log(c); // 15

/*****************
 * * Local Scope
 ****************/

// if (true) {
// 	var a = 10; // redeclaring var variable
// 	let b = 20; // block scope variable
// 	const c = 30; // block scope variable
// 	console.log(a); // 10
// 	console.log(b); // 20
// 	console.log(c); // 30
// }
//
// console.log(a);
// console.log(b);
// console.log(c);

/****************
 * * Function Scope
 ****************/

// function test() {
// 	var a = 1; // function scope variable
// 	let b = 2; // block scope variable
// 	const c = 3; // block scope variable
// 	console.log(a); // 1
// 	console.log(b); // 2
// 	console.log(c); // 3
// }
//
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

/*****************************
 * ? Redeclaration & shadowing
 ****************************/

/*******************
 * * Redeclaration
 ******************/

// var a;
// var a;

// let b;
// let b;

// const c=10;
// const c=20;

/**************************************
 * * Declaration without initialization
 *************************************/

// var a;
// let b;
// const c; // SyntaxError: Missing initializer in const declaration

/*****************
 * ? Hoisting
 *****************/
