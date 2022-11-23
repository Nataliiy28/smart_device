import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
//-----------------------------------кнопка подробнее

const button = document.querySelector('.about-company__button');
const youdiv = document.querySelector('.about-company__text-detalied');
button.addEventListener('click', function () {
  youdiv.style.display = youdiv.style.display === 'none' ? 'block' : 'none';
});

//----------------------------------смена текста в кнопке подробнее-свернуть
const btn = document.querySelector('.about-company__button');
btn.addEventListener('click', function () {
  btn.innerHTML =
    (btn.innerHTML === 'Подробнее') ? btn.innerHTML = 'Скрыть всё' : btn.innerHTML = 'Свернуть';
})

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
