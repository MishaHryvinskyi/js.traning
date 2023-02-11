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

const a = {x:5, y:243};
const b = {x:65, z:457};
const c = {z:34, y:45};

const d = {
    ...a,//x:5,x:54,   x:65
    x:54,
    ...b,// y:243,y:43,  y:45
    y:43,
    ...c,// z:457,z:34   z:77
    z:77
//    
    };
console.log(d);
