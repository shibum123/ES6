var a = 5;
function sum(){
	if(true){
		var a = 7;
	}
	console.log(a);
}
sum()
console.log(a);

let square = x => x * x;
console.log(square(10))

let add = (a, b) => a + b;
console.log(add(2, 3));

let developers = [{name: 'Shibu'},{name:'Rejitha'}];

console.log(developers.map(developer => developer.name));


function f (x, y = 7, z = 42) {
    return x + y + z
}
console.log(f(1) === 50);

var customer = {name:'Shibu'};
var card = {type:'Credit', amount:'500'};
console.log(`The customer
        ${customer.name} wants to buy using ${card.type} for an amount of ${card.amount}`
);

