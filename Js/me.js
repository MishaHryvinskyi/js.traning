
const magicBtn = document.querySelector('.btn-chenges');
magicBtn.addEventListener ('click', () => {
    const imgEl = document.querySelector('.img_user');
    console.log('navEl', imgEl);
    console.log(imgEl.src);
    imgEl.src = "http://127.0.0.1:5500/images/katichka.jpg";
}) ;


// const titleEL = document.createElement('h2');
// titleEL.classList.add('page-text');
// titleEL.textContent = 'ЦЕ файний Вувтень!!! :)';
// document.body.appendChild(titleEL);
// console.log(titleEL);



// const imgEl = document.querySelector('img');
// imgEl.classList.add('others-img');
// imgEl.src = 'http://127.0.0.1:5500/images/katia.jpg';
// document.body.appendChild(imgEl);
// console.log(imgEl);

const naviItemEl = document.querySelector('li');
naviItemEl.classList.add('site-nave__item');

const navLinkEl = document.querySelector('a');
navLinkEl.classList.add('site-nave__link');
navLinkEl.textContent = 'Файний Кчічк';
navLinkEl.href = 'https://chat.openai.com/chat/61abd75c-2f77-4105-bf55-67ed11c1f8b3';

naviItemEl.appendChild(navLinkEl);
console.log(naviItemEl);

const navEl = document.querySelector('.work_exp');
console.log(navEl);
navEl.appendChild(naviItemEl);