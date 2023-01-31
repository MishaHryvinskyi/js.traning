// const quantity = 10;
// const orderMsg = `Ви замовили ${quantity} холодильників`;


// console.log(orderMsg);
// let brand = prompt('Давай брнд');
// brand = brand.toLowerCase();
// console.log(brand);
// const blackListedWord1 = 'спам';
// const blackListedWord2 = 'розпродаж';
// const string1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі міліон';
// const string2 = 'Самий найбільший РОЗПРОДАЖ цієї неділі, непропусть';
// const string3 = 'Рекламна компанія #fatlivesmatter';
// console.log(string1.includes(blackListedWord1));
// console.log(string1.includes(blackListedWord2));
// console.log(string2.includes(blackListedWord1));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blackListedWord2));
// console.log(string3.includes(blackListedWord1));
// console.log(string3.includes(blackListedWord2));


const x1 = 10;
const x2 = 30;
const number = 50;
console.log(`Число ${number} попадає на відрізок до ${x1}?`, number < x1);
console.log(`Число ${number} попадає на відрізок після ${x2}?`, number > x2);
const res1 = number > x1 && number < x2;
console.log(`Число ${number} попадає на відрізок вів ${x1} до ${x2}?`, res1);
const res2 = number < x1 || number > x2;
console.log(`Число ${number} попадає на відрізок до ${x1}, чи після ${x2}?`, res2);

const isOpen = true;
const isFriend = true;
const isDnd = false;
const canOpenChat = isOpen && isFriend &&! isDnd;
console.log('Модна відкрити чат?', canOpenChat);
