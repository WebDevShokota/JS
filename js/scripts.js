let many 	 	= prompt ("Какой ваш бюджет?"),
	name 	 	= prompt ("Какое название магазина?"),
	product		= prompt ("Какой продукт будем продовать?"),
	productOne	= prompt ("Какой продукт будем продовать?"),
	productTwo	= prompt ("Какой продукт будем продовать?"),
	earnings	= prompt ("На какую сумму выручки вы расчитываете?"),
	num 		= 33721,
	shopGoods 	= [product, productOne, productTwo],
	employers	= obj = {
		nameOne: 	"Daniil",
		nameTwo: 	"Vava",
		nameThree: 	"Quen",  
	},
	mainList 	= obj = {
		budget: many,
		name: 	name,
		shop: 	shopGoods[0],
		assoс:  employers,
		open: 2017,   
	};

alert ("В день вы должны заробатывать: " + earnings/30 + ".");

console.log (mainList);

let mun = num * num;

console.log (mun);

alert (Math.pow(mun, 3));