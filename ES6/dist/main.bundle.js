'use strict';

var a = 5;
function sum() {
	if (true) {
		var a = 7;
	}
	console.log(a);
}
sum();
console.log(a);

var square = function square(x) {
	return x * x;
};
console.log(square(10));

var add = function add(a, b) {
	return a + b;
};
console.log(add(2, 3));

var developers = [{ name: 'Shibu' }, { name: 'Rejitha' }];

console.log(developers.map(function (developer) {
	return developer.name;
}));

function f(x) {
	var y = arguments.length <= 1 || arguments[1] === undefined ? 7 : arguments[1];
	var z = arguments.length <= 2 || arguments[2] === undefined ? 42 : arguments[2];

	return x + y + z;
}
console.log(f(1) === 50);

var customer = { name: 'Shibu' };
var card = { type: 'Credit', amount: '500' };
console.log('The customer\n        ' + customer.name + ' wants to buy using ' + card.type + ' for an amount of ' + card.amount);
