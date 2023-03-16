
// const colors = ['tomato', 'teal', 'orange', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors [index];
// console.log(color);
// document.body.style.backgroundColor = color;

// const magiscBtn = document.querySelector('.btn-chengese');
// magicBtn.addEventListener ('click', () => {
//     const imgEl = document.querySelector('.img_user');
//     console.log('navEl', imgEl);
//     console.log(imgEl.src);
//     imgEl.src = "http://127.0.0.1:5500/images/katia.jpg";
// }) ;

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-renive-listener');

// addListenerBtn.addEventListener('click', event => {
//     console.log('Вішаю слухача подій на цільову кнопку');

//     targetBtn.addEventListener('click', handleTargetButtonClick); // addEventListener і removeEventListener посилаються на одну і ту саму функцію handleTargetButtonClick
// });

// removeListenerBtn.addEventListener('click', event => {
//     console.log('Знімаю слуача подій з цільової кнопки');

//     targetBtn.removeEventListener('click', handleTargetButtonClick); // addEventListener і removeEventListener посилаються на одну і ту саму функцію handleTargetButtonClick
// });

// function handleTargetButtonClick (event)  {
//     console.log('Клік по Цільова кнопка');
// };


// const form = document.querySelector('.js-register-form');


// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit (event) {
//     event.preventDefault();
    
//     const formData = new FormData (event.currentTarget);
    
// console.log(formData);

//     formData.forEach((value, name) => {
//         console.log('name:', name);
//         console.log('value', value);
//     });
// };


// const refs = {
//     input: document.querySelector('.js-input'),
//     nameLabel: document.querySelector('.js-Btn > span'),
//     licenseCheckbox: document.querySelector('.js-license'),
//     btn: document.querySelector('.js-Btn'),
// };


// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);
// refs.licenseCheckbox.addEventListener('change', onLicenseChenge);




// function onInputFocus() {
//     console.log('Інпут отримав фокус - подія Focus');
// };


// function onInputBlur() {
//     console.log('Інпут отримав фокус - подія Blur');
// };

// function onInputChange(event) {
//     refs.nameLabel.textContent = event.currentTarget.value;
// };

// function onLicenseChenge() {
//       refs.btn.disabled = !event.currentTarget.checked;
// };





// const refs = {
//     output: document.querySelector('.js-output'),
//     clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keydown', onKeypress);
// refs.clearBtn.addEventListener('click', onClearoutput);

// function onKeypress(event) {
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);

//     refs.output.textContent += event.key;
// };

// function onClearoutput() {
//     refs.output.textContent = '';
// }

