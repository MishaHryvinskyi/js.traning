
// Напишіть скрипт який підрахує суму всіх парних чисел в масиві
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;
// 1 Перемінна total



// 2 Перебрати масив
for (let i = 0; i < numbers.length; i += 1) {
console.log(numbers[i]);
}

// 3 На кожній ітерації перевірити елемент на парність
if(numbers[i] % 2 === 0) {
    console.log('Парні!!!');


// 4 Якщо парне, плюсуємо до total
    total += numbers[i];
}
console.log('Total:', total);
