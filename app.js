// let x = 10;
// let y = 5;

// {
// 	let z = x + y;
// 	console.log(z);
// }

// {
//  var x = 1;
//  {
//    var x = 2;  // same variable!
//    console.log(x);  // 2
//  }
//  console.log(x);  // 2
// }

// {
//  let x = 1;
//  {
//    let x = 2;  // different variable
//    console.log(x);  // 2
//  }
//  console.log(x);  // 1
// }

// let x = 19;

// {
// 	let y = 5;
// 	{
// 		let z = x + y;
// 		console.log(z);
// 	}
// }

// if (x == 10) {
//  // do this
//  console.log('x is 10');
// } else {
//  // do this
//  console.log('x is not 10');
// }

let num = -8;

// if (num > 0 ) {
//  console.log('Positive');
// } else { (num < 0) 
//  console.log('Negative');

// }

// let user = 20;

// if (user > 18) {
//  console.log('Access Granted');
// } else {
//  console.log('Access Denied');
// }

// let day = 'Monday';

// if (day == 'Monday') {
//  console.log('It is Monday');
// } else if (day == 'Tuesday') {
//  console.log('It is Tuesday');
// } else if (day == 'Friday') {
//  console.log('It is Friday');
// } else if (day == 'Saturday') {
//  console.log('It is Saturday');
// } else if (day == 'Sunday') {
//  console.log('It is Sunday');
// } else { 
//  console.log('It is not Monday, Tuesday, Friday, Saturday or Sunday');
// }

// let temp = 20;
// let time = 'morning';

// if (temp >=80) {
//  console.log('It is hot');
//  if (time == 'morning') {
//   console.log('It is morning');
//  }

// }

// let learner = 50;

// if (learner >= 90) {
//  console.log('A');
// }
// else if (learner >= 80) {
//  console.log('B');
// }
// else if (learner >= 70) {
//  console.log('C');
//  if (learner >= 75) {
//   console.log('You are close to a B');
//  }
// }
// else if (learner >= 55) {
//  console.log('D');
// } else {
//  console.log('F');
// }

// let x = 5;
// let y = 4;
// let operand = "/007";
// switch (operand) {
//    case "+":
//        console.log(x + y);
//        break;
//    case "-":
//        console.log(x - y);
//        break;
//    case "*":
//        console.log(x * y);
//        break
//    case "/":
//        console.log(x / y);
//        break;
//    default:
//        console.log("Invalid Operand")
//        break;
// }

// let x = 10;
// let isTen;

// if (x == 10) {
// 	isTen = true;
//  console.log(isTen);
// } else {
// 	isTen = false;
//  console.log(isTen);
// }

// let x = 10;
// let isTen = x == 10 ? true : false;
// console.log(isTen);

// let x = -10;

// if (x < 0) {
// 	console.log("Negative!");
// } else {
// 	throw "Error - I don't know what I'm doing.";
// }

// console.log("Does this log?");

// let x = ;

// try {
// 	if (x < 0) {
// 		console.log("Negative!");
// 	} else {
// 		throw "Error - I don't know what I'm doing.";
// 	}
// } catch (error) {
// 	console.log(error);
// }

// console.log("Does this log?");

// let x = 10;

// try {
// 	if (x > 0) {
// 		let isEven = (x % 2 == 0) ? true : false;
// 	} else if (x <= 0) {
// 		throw "Error - Value of 0 or below.";
// 	}

// 	console.log(isEven);
// } catch (err) {
// 	console.log(err);
// } finally {
// 	console.log(x);
// }

let x = 5;

if (x > 0)
	console.log('Positive!');
	x++;
else
	console.log('Negative.');
	x--;