// *****напиши скрипт, який заміняє регістр кожного символу в рядку на протилежний
// наприклад якщо рядок JavaScript то на виході повинний бути рядок jAVAsCRIPT

// const string = 'JavaScript';
// const letters = string.split('');  // split() метод рядка який розбиває рядок по роздільнику

// let invertedString = '';

// console.log(letters);

// for (const letter of letters){ 
//     console.log(letter); //  перебирає по буквенно словл JavaScript

    // if(letter === letter.toLocaleLowerCase()) {
       
    //  console.log('Ця буква у нижньому регістрі - ', letter); // буква яка є в рядку, порівнюється у нижньому регістрі
    //  invertedString += letter.toLocaleUpperCase();
    // } else {
    //     invertedString += letter.toLocaleLowerCase();
    //     console.log('Ця буква у верхньому регістрі - ', letter);// олд скул
    // }
// const isEqual = letter === letter.toLocaleLowerCase();
// invertedString += isEqual  ? letter.toLocaleUpperCase() : letter.toLocaleLowerCase();

// }
// console.log('invertedString : ', invertedString);

// ****Задача
// Робимо Slug в URL з назви статті (наприклад на dev.to)
// заголовок статті складається тільки з букв і відступів
// Нормалізуємо рядок
// розбиваємо по словах
// зшиваємо у рядок з роздільником
//  має получитися top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLocaleLowerCase(); // Нормалізуємо рядок
// // console.log(normalizedTitle);


// const words = normalizedTitle.split(' '); // розбиваємо по словах
// // console.log(words);

// const slug = words.join('-'); // зшиваємо у рядок з роздільником
// // console.log(slug);

// // ** Цепочки виклику

// const slug1 = title.toLocaleLowerCase().split(' ').join('-'); // декларативний код, абстракція
// console.log(slug1);


// ***Задача
// напиши скрипт, який рахує суму двох масивів
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2);
// for (const number of numbers){
//     total += number;
// }
// console.log(total);


// *** ЗАдача
// працюємо з карточками в колекції трелло 
// метод splice()
// видалити
// добавити
// обновити
// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5'
// ];
// console.table(cards);

// видалення елемента по індексу
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);

// добавляємо по індексу
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, 'Карточка-6');
// console.table(cards);

// оновлення по індексу
// const cardToUpDate = 'Карточка-4';

// const index = cards.indexOf(cardToUpDate);
// console.table(index);
// cards.splice(index, 1, 'Оновлена карточка-4');
// console.table(cards);


//  const add = function (x, y) {
// console.log(x);
// console.log(y);

// console.log('meee')
// return x + y;
//  }
// const r1 = add(6, 3);
// console.log('r1:', r1);

// add(5, 3);
// add(10, 30);

// const artOfKayia ={
//     gobelen: 'fire autem',
//     kulum: 'gucyl',
//     art: 'watercolor',
// };

// console.log(artOfKayia);

// const add = function(x, y) {
//   console.log(x);
//   console.log(y);
//   console.log('Виконує функцію add');

// return (x + y) * y;
// };
// const r1 = add(5, 4);
// console.log('r1 =', r1);
// const r2 = add(52, 41)
// console.log('r2 =', r2);
// const r3 = add(54, 23)
// console.log('r3 =', r3);


// 
// const cart = [58, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart){
//   total += value;
// }

// console.log('total:', total);

// const calculateTotalPrice = function(items) {
//   console.log(items);

//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));


// function add(a, b, c) {
//   console.log('цифри :', a, b, c);
//   console.log('віднімання :', a - b);
//   console.log('додавання :', c + b);
//   console.log('ділення :', c / b);
// }

// add(2, 4, 5);
// add(1, 5, 23);

// const adds = (r, v, d) => r + v + d;
// console.log(r + v + d);

// adds(9, 2, 3);
// let salary = 10232.2342;
// console.log(Number(salary.toFixed(2)));

// const doMath = function (a, b, callback) {
// const result = callback(a, b);

// console.log(result);
// };

// const add = function (x, y) {
// return x + y;

// };

// doMath(2, 3, add)

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line
// makePizza("Ultracheese", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });


// const fnA = function (message, callback) {
// console.log(message);

// console.log(callback);
// callback(2);
// };

// const fnB = function (number) {
//   console.log('Це лог при виклиці fnB', number);
// }

// fnA('Вуууувтень', fnB);

// const doMath = function (a, b, callback) {
// const result = callback(a, b);

// console.log(result);
// };

// doMath(10, 2, function(x, y) {
//   return x / y;
// });
// doMath(2, 4, function(x, y) {
//   return x * y;
// });
// doMath(9, 4, function(x, y) {
//   return x - y;
// });
// doMath(3, 4, function(x, y) {
//   return x + y;
// });

// doMath(16, 3, function(x, y) {
//   return x % y;
// });

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//   }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);


const buttonRef = document.querySelector('.js-button');

const handleButtonClick = function (){
  console.log('Клік по кнопці' + Date.now());
}

buttonRef.addEventListener('click', handleButtonClick);



