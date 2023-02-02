
// Напишіть скрипт який підрахує суму всіх парних чисел в масиві
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// 1 Перемінна total



// // 2 Перебрати масив
// for (let i = 0; i < numbers.length; i += 1) {
// const number = numbers[i];
// console.log(number);


// // 3 На кожній ітерації перевірити елемент на парність
// if (number % 2 === 0) {
//     console.log('Парні!!!');


// // 4 Якщо парне, плюсуємо до total
//     total += number;
// }
// for (const number of numbers){
//     console.log(number);
//     if (number % 2 === 0) {
//         console.log('Парні!!!');
    
    
//     // 4 Якщо парне, плюсуємо до total
//         total += number;
//     }
// }

// console.log('Total:', total);

// function getExtremeElements(array) {
//     // Change code below this line
//   const ar = [];
//   ar.push(array[0]);
//   ar.push(array[array.length -1]);
  
  
//     // Change code above this line
//     return ar;
//     console.log(getExtremeElements);
//   }
  

// const logins = ['m4ngoDone' ,'k1widab3st' ,'poly1scute' ,'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Користувач ${loginToFind} знайдений.`;

// for(let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
    
//     console.log('login:', login);
//     console.log(`${login} === ${loginToFind}:`,login === loginToFind);

// if (login === loginToFind){
//     console.log('Ура співпало!');
//     message = `Користувач ${loginToFind} знайдений.`;
//     break;
   
// }    
// }               // FOR OF



// for(const login of logins) {
//     console.log('login:', login);
//     console.log(`${login} === ${loginToFind}:`,login === loginToFind);


//     if (login === loginToFind){
//              console.log('Ура співпало!');
//              message = `Користувач ${loginToFind} знайдений.`;
//              break;
// }
// }
//   console.log(message);  // FOR OF


// console.log(logins.includes('poly1scute')); // абстракція


// const message = logins.includes(loginToFind)           // абстракція
// ? `Йо користувач ${loginToFind} знайдений` 
// : `Ніт користувач ${loginToFind} не знайдений`;
// console.log(message); // декларативний код





// ЗАДаЧА напиши скрипт самого маленького числа в масиві,
// при умові, що числа унікальні не повторюються
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];  // поклали перед собою саму маленьку монетку
// let largestNumber = numbers[0];

// for (const number of numbers) { //  перебрали мішочок
//     if(number < smallestNumber){ //  порівняли чи поточна монетка менша за ту яку витягнули?
//         smallestNumber = number; //  якщо менша? замінили
//     }
// }

// console.log('smallestNumber:',  smallestNumber);


// for (const number of numbers){
//     if(number > largestNumber){
//         largestNumber = number;
//     }
// }
// console.log('largestNumber:', largestNumber);





// Задача. Напиши скрипт , який обєднує всі елементи масива в одному рядку

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = ' ';

// for (const friend of friends){
//     string += friend + ', ';
// }
// console.log(string.slice(0, string.length - 1));
// const string = friends.join(', ');

// console.log(string);