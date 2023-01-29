// const quantity = 10;
// const orderMsg = `Ви замовили ${quantity} холодильників`;


// console.log(orderMsg);
// let brand = prompt('Давай брнд');
// brand = brand.toLowerCase();
// console.log(brand);
const blackListedWord1 = 'спам';
const blackListedWord2 = 'розпродаж';
const string1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі міліон';
const string2 = 'Самий найбільший РОЗПРОДАЖ цієї неділі, непропусть';
const string3 = 'Рекламна компанія #fatlivesmatter';
console.log(string1.includes(blackListedWord1));
console.log(string1.includes(blackListedWord2));
console.log(string2.includes(blackListedWord1));
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blackListedWord2));
console.log(string3.includes(blackListedWord1));
console.log(string3.includes(blackListedWord2));