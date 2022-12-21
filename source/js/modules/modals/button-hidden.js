
//-----------------------------------меняет текст при открытии кнопки подробнее
const button = document.querySelector('.about-company__button');
const youdiv = document.querySelector('.about-company__text-detalied');
button.addEventListener('click', function () {
  youdiv.style.display = youdiv.style.display === 'none' ? 'block' : 'none';
  button.innerHTML = (button.innerHTML === 'Подробнее') ? button.innerHTML = 'Скрыть всё' : button.innerHTML = 'Подробнее';
});

// export const text = () => {
//   const aboutButton = document.querySelector('.about-company__button');
//   const aboutBlok = document.querySelector('.about-company__text-detalied');

//   if (aboutButton) {
//     aboutButton.addEventListener('click', function (evt) {
//       evt.preventDefault();
//       aboutBlok.classList.toggle('.about-company__text-detalied--active');

//       if (aboutButton.textContent === 'Подробнее') {
//         aboutButton.innerHTML = 'Свернуть';
//       }
//       else {
//         aboutButton.innerHTML = 'Подробнее';
//       }
//     });
//   }
// }---код не работает
//-----этот код взят с примера,который выслал наставник
