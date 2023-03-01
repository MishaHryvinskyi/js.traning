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

// const numbers = [1, 2, 3, 4, 5, 6];

// const greaterThenTwo = numbers.filter(num => num > 4);
// console.log(greaterThenTwo);

// const myltByTwo = greaterThenTwo.map(num => num * 3);
// console.log(myltByTwo);

// const sorted = myltByTwo.sort((a, b) => a - b);

// console.log(sorted);

// const players = [
//   { id: 'id - 1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id - 2', tag: 'Ajax', isOnline: false, rank: 600 },
//   { id: 'id - 3', tag: 'Poly', isOnline: true, rank: 100 },
//   { id: 'id - 4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
// .filter(player => player.isOnline)
// .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
// console.log(onlineAndSorted);
// const numbers = [1, 2, 3, 4, 5];

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };



// dirtyMultiply(numbers, 2);

// console.log(numbers); 


// const pureMultiply = (array, value) => {
//   const newArrey = [];
//   array.forEach(element => {
//     newArrey.push(element * value);
//   });
//   return newArrey;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubletNumbers =pureMultiply(numbers, 2);

// console.log('Поточний масив:', numbers);
// console.log('Новий масив:', doubletNumbers)


// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetsInLoverCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLoverCase);
// console.log(planets);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.score);
// console.log(names);
// const students = [
//   { name: 'Mango', course:["математика", "фізика"] },
//   { name: 'Poly', courses: ["інформатика", "математика"] },
//   { name: 'Ajax', course: ["фізика", "біологія"]  },
// ];

// console.log(students.map(student => student.courses));

// console.log(students.flatMap(student => student.courses));

// const values = [51, -3, 27, 21, -68, 42, -37];
// console.log(values);

// const positionValues = values.filter(value => value >= 0) ;
// console.log(positionValues);

// const negativeValues = values.filter(value => value < 0) ;
// console.log(negativeValues);

// const bigValues = values.filter(value => value > 1000) ;
// console.log(bigValues);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score > HIGH_SCORE);
// console.log(best);
// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst);
// const avarege = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(avarege); 

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find(option => option.label === "blue")); 
// console.log(colorPickerOptions.find(option => option.label === "pink")); 
// console.log(colorPickerOptions.find(option => option.label === "white"));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// console.log(numbers);

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(function(number){
// console.log(number);
// return number * 2;
// });
// const delTwoNumbers = numbers.map(function(number){
//     return number - 2;
// });
// console.log("doubledNums:", doubledNums);
// console.log("numbers:", numbers);
// console.log("delTwoNumbers:", delTwoNumbers);


const players = [
    { id: 'player-1', name: 'Mango', timePlayd: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayd: 470, points: 92, online: true },
    { id: 'player-3', name: 'Katia', timePlayd: 230, points: 89, online: true },
    { id: 'player-4', name: 'Misha', timePlayd: 150, points: 71, online: false },
    { id: 'player-5', name: 'Zcaba', timePlayd: 80, points: 46, online: true },
];

console.log(players);
console.table(players);

const playerToUpdate =  'player-4';

const updatePlayers = players.map(player => {
    console.log(player.id);
    if (playerToUpdate === player.id) {

        return {
            ...player,
            timePlayd: player.timePlayd + 300,
        }
    }
    return player;
    
    });
console.table(updatePlayers);



