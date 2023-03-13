
const magicBtn = document.querySelector('.btn-chenges');
magicBtn.addEventListener ('click', () => {
    const imgEl = document.querySelector('.img_user');
    console.log('navEl', imgEl);
    console.log(imgEl.src);
    imgEl.src = "http://127.0.0.1:5500/images/katichka.jpg";
}) ;



