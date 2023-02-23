// const fnA =  function (parameter) {
//     const innerVariable = 'Значення внутрішньох змінної fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Це виклик innerFunction');
//     };
//     return innerFunction;
// };

// const fnB = fnA('Katichka');

// fnB();

// console.log(fnB);


// const makeDish = function (sheffName, dish) {
// console.log(`${sheffName} готує ${dish}`);
// };

// makeDish('Катя', 'Печінку');
// makeDish('Катя', 'Омлет');
// makeDish('Катя', 'Чай(Зіллячко)');


// makeDish('Міша', 'Борщ');
// makeDish('Міша', 'хліб до борща');
// makeDish('Міша', 'каву')

// const makeSheff = function (name) {
// const makeDish = function (dish) {
//     console.log(`${name} готує ${dish}`);
// };

// return makeDish;
// };

// const katia = makeSheff('Катя');
// console.dir(katia);
// const vuvten = makeSheff('Міша');
// katia('Пиріжок');
// katia('Печіночку');
// vuvten('Боршик');

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// console.log(Number(floatingPoint.toFixed(3)));

// const rounder = function (number, places) {
//         return Number(number.toFixed(places));
// };

// console.log(rounder(3.4233, 2));
// console.log(rounder(3.4233, 3));
// console.log(rounder(3.4233, 1));

// const rounder = function (places) {
//     return function (number ){
//         return Number(number.toFixed(places));
//     }
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4233));
// console.log(rounder3(3.4233));
// console.log(rounder2(3.4233));


// const salaryManagerFactory = function (employeeName, baseSalary) {
//     let salary = baseSalary;

//     const chengeBy = function (amount) {
//         salary += amount;
//     };

//     return {
//         reise(amount) {
//             chengeBy(amount);
//         },
//         lower(amount) {
//             chengeBy(amount);
//         },
//         current() {
//             return `Поточна зарплата ${employeeName} - ${salary} `;
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);
// console.log(salaryManager.current());


// const add = function(a, b, c) {
//     console.log(a, b, c);
//     console.log(arguments);
//     return a + b + c;
// };

// console.log(add(2, 4, 5));

// const adds = (...args) => {
//     console.log(args);
//     // return a + b + c;
// };

// console.log(adds(4, 2, 3));

// const arrowFnA = () => ({
//     arrowA : 5
// });
// console.log(arrowFnA());

// const filter = (arrey, test) => {
//     const filtredArrey = [];
  
//         for (const el of arrey){
//           console.log(el);
//           const passed = test(el);
  
//           if (passed) {
//             filtredArrey.push(el);
//           }
//         }
//         return filtredArrey;
//   };
  
//   const r1 = filter([1, 2, 3, 4, 5], (value) => value >= 3);
  
//   console.log(r1);
  
  
  
//   const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], (value) => value <= 4);
//   console.log(r2);
  
//   const fruits = [
//     { name: 'apple', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];
  
  
//   const r3 = filter(fruits, fruit => fruit.quantity >= 120);
//   console.log(r3);

// Створіть функцію,
// яка повертатиме 
// привітання, 
// яке використовує
// вхід;
// ваша програма має
// повернути «Привіт,
// ім'я>, як справи сьогодні?».

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
  
//     orderedItems.forEach(function (number) {
//       totalPrice += number;
//     });
     
  
//     // Change code above this line
//     return totalPrice;
//   }
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray(2, 3));


// const add = (a, b, c) => {
// return a + b + c;
// };

// console.log(add(2, 4, 3));

// const addMassege = message => {
//   return message;
// };
// console.log(addMassege('Привіт'));

// const adds = () => {
// console.log('Шо це є?');
// };
// adds();


// const add = (...args) => a + b;
// console.log(add(4, 5));

// function adds () {
// console.log(arguments);
// };
// adds(2, 4, 5, 6, 7);
// // 
// 
// const showThis = () => {
//   console.log('THis:', this);
// };

// showThis();

const numbers = [1, 2, 3, 4, 5, 6];

// const greaterThenTwo = numbers.filter(num => num > 4);
// console.log(greaterThenTwo);

// const myltByTwo = greaterThenTwo.map(num => num * 3);
// console.log(myltByTwo);

// const sorted = myltByTwo.sort((a, b) => a - b);

// console.log(sorted);

const players = [
  { id: 'id - 1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id - 2', tag: 'Ajax', isOnline: false, rank: 600 },
  { id: 'id - 3', tag: 'Poly', isOnline: true, rank: 100 },
  { id: 'id - 4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

const onlineAndSorted = players
.filter(player => player.isOnline)
.sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
console.log(onlineAndSorted);