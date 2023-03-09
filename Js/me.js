// const chopShop = {
//   stones: [
//   { name: 'Emerald', price: 1300, quantity: 4 },
//   { name: 'Diamond', price: 2700, quantity: 3 },
//   { name: 'Saphire', price: 1400, quantity: 7 },
//   { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find(({ name }) => stoneName === name);
//     return currentStone.price * currentStone.quantity;
//   },
// };

// console.log("calcTotalPrice Emerald", chopShop.calcTotalPrice('Emerald')); // 5200
// console.log("calcTotalPrice Diamond", chopShop.calcTotalPrice('Diamond')); // 8100
// console.log("calcTotalPrice Saphire", chopShop.calcTotalPrice('Saphire')); // 9800
// console.log("calcTotalPrice Ruby", chopShop.calcTotalPrice('Ruby')); // 1600


// // 1. Контекст(this) у функції визначається на момент її виклику, а не на момент створення
// // 2. Контекстом(this) функції буде об'єкт, який її викликав

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: "mango@hotmail.com",
//     list: "friends",
//   })
// );

// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: "poly@hotmail.com",
//   })
// );


// const calculator = {
//   a: 0,
//   b: 0,
// read (a, b) {
//   this.a = a; 
//   this.b = b;
//   return this;
// },
// add() {
//   return this.a + this.b;
// },
// mult() {
//   return this.a * this.b;
// },
// del() {
//   return this.a - this.b;
// }
// };

// console.log(calculator.read(40, 5).add());
// console.log(calculator.read(40, 5).mult());
// console.log(calculator.read(40, 5).del());