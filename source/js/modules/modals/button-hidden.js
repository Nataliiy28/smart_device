
//-----------------------------------меняет текст при открытии кнопки подробнее

const aboutButton = document.querySelector('.about-company__button');
const aboutBlok = document.querySelector('.about-company__text-detalied');

if (aboutButton) {
  aboutButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    aboutBlok.classList.toggle('about-company__text-detalied--active');
    aboutBlok.classList.toggle('about-company__text-detalied');
    if (aboutButton.textContent === 'Подробнее') {
      aboutButton.innerHTML = 'Свернуть';
    }
    else {
      aboutButton.innerHTML = 'Подробнее';
    }
  });
}
