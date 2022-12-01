import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';


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

if (ButtonConsalt && screen.width < MobileWidth) {
  ButtonConsalt.textContent = ButtonText;
}

$(function () {
  $('.accordion__toggle').on('click', function () {
    var thisContent = $(this).next();

    $('.accordion__toggle').not(this).removeClass('accordion__toggle--close');
    $('.accordion__content').not(thisContent).slideUp(400);
    thisContent.slideToggle(400);
    $(this).toggleClass('accordion__toggle--close');
  })
})

try {
  storageUserName = localStorage.getItem('user-name');
  storageUserPhone = localStorage.getItem('user-phone');
  storageText = localStorage.getItem('message');
  storageQuestion = localStorage.getItem('question');
} catch (err) {
  isStorageSupport = false;
}

if (UsserName) {
  UsserName.focus();
  UsserName.value = localStorage.getItem('user-name');
  UsserName.oninput = function () {
    localStorage.setItem('user-name', UsserName.value);
  };
}

if (UsserPhone) {
  UsserPhone.value = localStorage.getItem('user-phone');
  UsserPhone.oninput = function () {
    localStorage.setItem('user-phone', UsserPhone.value);
  };
}

if (MassageText) {
  MassageText.value = localStorage.getItem('message');
  MassageText.oninput = function () {
    localStorage.setItem('message', MassageText.value);
  };
}

if (QuestionText) {
  QuestionText.value = localStorage.getItem('question');
  QuestionText.oninput = function () {
    localStorage.setItem('question', QuestionText.value);
  };
}

function openPopup() {
  PopupModal.classList.add('modal--show');
  Overly.classList.add('overlay--show');
  UsserName.focus();
  BODY_ELEMENT.classList.add('noscroll');
}

function closePopup() {
  if (POPUP_ELEMENT.classList.contains('modal--show')) {
    PopupModal.classList.remove('modal--show');
    Overly.classList.remove('overlay--show');
    BODY_ELEMENT.classList.remove('noscroll');
  }
}

CallbackButtonConsalt.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});

CloseElement.addEventListener('click', function () {
  closePopup();
});

CloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KeyEnter) {
    closePopup();
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KeyEsc) {
    closePopup();
  }
});

Overly.addEventListener('click', function () {
  closePopup();
});

$(document).mouseup(function (e) {
  const container = $('.modal__wrapper');
  if (e.target !== container[0] && !container.has(e.target).length) {
    closePopup();
  }
});

// Select all links with hashes
$(function () {
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        const target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            const $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
}());

$(function () {
  $('input[type="tel"]').mask('+7(000)000-00-00');
}());

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
