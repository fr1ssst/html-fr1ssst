const prompt = require('prompt-sync')();

let totalWithoutDiscount = 0;
let totalWithDiscount = 0;

const products =  [
   {
       id: 1,
       name: "Ноутбук",
       description: "Хороший ноутбук",
       data: [{price: 12883.0, sale: 10}, {price: 22723.0, sale: 7}, {price: 11000.0, sale: 17}]
   },
   {
       id: 2,
       name: "Смартфон",
       description: "Такий собі смартфон ноутбук",
       data: [{price: 2455.0, sale: 6}, {price: 2223.0, sale: 7}, {price: 5110.0, sale: 6}]
   },
   {
       id: 3,
       name: "Павербанк",
       description: "Просто павербанк",
       data: [{price: 455.0, sale: 6}, {price: 623.0, sale: 17}, {price: 810.0, sale: 20}]
   },
   {
       id: 4,
       name: "Сканер",
       description: "Крутий сканер",
       data: [{price: 855.0, sale: 19}, {price: 777.0, sale: 10}, {price: 510.0, sale: 10}]
   }
];
products.forEach(product => {
	product.data.forEach(modification => {
		totalWithoutDiscount += modification.price;
		totalWithDiscount += modification.price * (1 - modification.sale / 100);
	})
})
console.log("Total without discount: " + totalWithoutDiscount.toFixed(2) + " UAH");
console.log("Total with discount: " + totalWithDiscount.toFixed(2) + " UAH");