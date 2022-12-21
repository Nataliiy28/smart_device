import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import './modules/modals/button-hidden';
import './modules/modals/phone-mask';
'use strict';

const ButtonConsalt = document.querySelector('.page-header__button-consultation');
const MobileWidth = 768;
const ButtonText = 'Бесплатная консультация';
const BODY_ELEMENT = document.querySelector('body');
const CallbackButtonConsalt = document.querySelector('.page-header__button-call');
const PopupModal = document.querySelector('.modal');
const Overly = document.querySelector('.overlay');
const CloseElement = PopupModal.querySelector('.modal__close');
const UsserName = PopupModal.querySelector('[name=name]');
const UsserPhone = PopupModal.querySelector('[name=phone]');
const MassageText = PopupModal.querySelector('[name=callback-text]');
const QuestionText = document.querySelector('[name=question-text]');
const KeyEsc = 27;
const KeyEnter = 13;
const isStorageSupport = true;
const storageUserName = '';
const storageUserPhone = '';
const storageText = '';
const storageQuestion = '';

//------------------------Меняет текст на кнопке => бесплатная консультация => получить бесплатную консультацию
if (ButtonConsalt && screen.width < MobileWidth) {
  ButtonConsalt.textContent = ButtonText;
}

//-------------------------открывает модальное окно
let popupBg = document.querySelector('.modal__wrapper'); // Фон попап окна
let popup = document.querySelector('.modal'); // Само окно
let openPopupButtons = document.querySelectorAll('.page-header__button-consultation'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.modal__close'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
    e.preventDefault();// Предотвращаем дефолтное поведение браузера
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    popup.classList.add('active'); // И для самого окна
  })
});

document.querySelector('.page-header__button-consultation').addEventListener('click', function (e) {
  let popup = document.querySelector('.modal')
  popup.style.display = popup.style.display === 'none' ? 'block' : 'none'
});

document.querySelector('.modal__close').addEventListener('click', function (e) {
  let closePopupButton = document.querySelector('.modal')
  closePopupButton.style.display = closePopupButton.style.display === 'none' ? 'block' : 'none'
});

//-----------------------------------

//-----------------------------------меняет текст при открытии кнопки подробнее

// const button = document.querySelector('.about-company__button');
// const youdiv = document.querySelector('.about-company__text-detalied');
// button.addEventListener('click', function () {
//   youdiv.style.display = youdiv.style.display === 'none' ? 'block' : 'none';
//   button.innerHTML = (button.innerHTML === 'Подробнее') ? button.innerHTML = 'Скрыть всё' : button.innerHTML = 'Подробнее';
// // });

// ---------------------------------

//----------------------------------кнопка аккордиона +-

const PlusButtonElement = document.querySelectorAll('.page-footer__title');
PlusButtonElement.forEach(element => element.addEventListener('click', function () {

  if (element.classList.contains('hide_after')) {
    element.classList.remove('hide_after');
  } else {
    element.classList.add('hide_after');
  }
}));

//-------------------------------------убирает аккордион +-
// const classList = document.querySelectorAll(".page-footer__title")

// window.addEventListener("resize", function () {

//   if (window.innerWidth < 700) {
//     classList.forEach(item => {
//       item.classList.remove("hide_after")
//     })
//   }

//   else {
//     console.log('more')
//     classList.forEach(item => {
//       item.classList.add("")
//     })
//   }
// });

//-------------------------------------
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
