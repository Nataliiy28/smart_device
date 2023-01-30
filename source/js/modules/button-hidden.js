// Каждая задача должна быть в отдельном модуле
export const initTextShow = function () {

  const aboutButton = document.querySelector('[data-open-text]');
  const infoContainer = document.querySelector('[data-text-show]');

  if (aboutButton) {
    aboutButton.addEventListener('click', function (evt) {
      evt.preventDefault();

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
