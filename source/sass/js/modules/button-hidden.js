// Каждая задача должна быть в отдельном модуле
export const initTextShow = function () {

  // const aboutButton = document.querySelector('.about-company__button');
  // const aboutBlok = document.querySelector('.about-company__text-detalied');
  const aboutButton = document.querySelector('[data-open-text]');
  const infoContainer = document.querySelector('[data-text-show]');

  if (aboutButton) {
    aboutButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      // aboutBlok.classList.toggle('about-company__text-detalied--active');
      // aboutBlok.classList.toggle('about-company__text-detalied');
      // if (aboutButton.textContent === 'Подробнее') {
      // aboutButton.innerHTML = 'Свернуть';
      // }
      // else {
      // aboutButton.innerHTML = 'Подробнее';
      // }

      if (infoContainer.closest('.is-active')) {
        infoContainer.classList.remove('is-active');
        aboutButton.textContent = 'Подробнее';
      } else {
        infoContainer.classList.add('is-active');
        aboutButton.textContent = 'Свернуть';
      }
    });
  }
};
